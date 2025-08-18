<template>
    <el-input v-model="search" placeholder="Fuzzy search!" :prefix-icon="ElIconSearch">
        <template #append>
            <el-select v-model="searchMode" placeholder="Select" style="width: 115px">
                <el-option v-for="item in Object.keys(SEARCH_MODES)" :key="item" :label="item" :value="item" />
            </el-select>
        </template>
    </el-input>
    <div v-if="searchMode === 'Custom'" class="mt-2! flex flex-row gap-2">
        <el-input-tag v-model="filterTags" placeholder="Filter tags (enter)" clearable />
        <el-select v-model="typeFilter" multiple collapse-tags placeholder="Type" style="width: 15rem">
            <el-option v-for="item, i in TYPES" :key="i" :label="item.label" :value="i" />
        </el-select>
        <el-button :type="getSortBtnType('points')" :icon="getSortBtnIcon('points')" class="mx-0!"
            @click="toggleSort('points')">Points</el-button>
        <el-button :type="getSortBtnType('solves')" :icon="getSortBtnIcon('solves')" class="mx-0!"
            @click="toggleSort('solves')">Solves</el-button>
    </div>
    <el-pagination v-model:current-page="currPage" class="justify-center" layout="prev, pager, next"
        :total="docsFiltered.length" :page-size="5" hide-on-single-page />
    <el-timeline class="mt-2!" v-auto-animate>
        <el-timeline-item v-for="{ item: doc, matches, score } in docsFiltered.slice(currPage * 5 - 5, currPage * 5)"
            :key="doc.path" hide-timestamp>
            <kumo-link no-prefetch type="primary" :to="'/c' + doc.path" class="font-mono">
                <span v-html="highlight(doc.title, matches?.find(m => m.key === 'title')?.indices)"></span>
            </kumo-link>
            <el-tag v-if="score" :type="score < 0.1 ? 'success' : score < 0.5 ? 'warning' : 'danger'" size="small"
                class="ml-1">
                {{ (1 - score).toPrecision(2) }}
            </el-tag>
            <br />
            <el-text class="font-mono" size="small" v-if="isSearching">
                <span v-html="'/c' + highlight(doc.path, matches?.find(m => m.key === 'path')?.indices)"></span>
            </el-text>
            <el-text class="block mt-1!">
                <span v-html="highlight(doc.description, matches?.find(m => m.key === 'description')?.indices)"></span>
            </el-text>
            <article-tags :article="doc"
                :custom-tag-html="(tag, i) => (highlight(tag, matches?.find(m => m.key === 'tags' && m.refIndex === i)?.indices) ?? '')" />
            <span class="el-timeline-item__timestamp is-bottom font-mono" v-text="displayDocDates(doc)" />
        </el-timeline-item>
        <template v-if="docsFiltered.length === 0">
            <el-skeleton v-if="docStatus === 'pending'" />
            <el-empty v-else description="No results found!" />
        </template>
    </el-timeline>
</template>
<script lang="ts" setup>
import type { PageCollections } from '@nuxt/content';
import Fuse, { type FuseResult, type RangeTuple } from 'fuse.js';
const currPage = ref(1);
const search = ref("");
const filterTags = ref<string[]>();
const { data: alldocs, status: docStatus } = await useLazyAsyncData(`c/docs`, () => queryAllDocs());
const docs = computed(() => alldocs.value?.flat?.filter(a => a.created)?.sort((a, b) => -a.created.localeCompare(b.created)));

const customSortKey = ref<'points' | 'solves'>();
const customSortDir = ref<'asc' | 'desc'>();

function toggleSort(key: 'points' | 'solves') {
    if (customSortKey.value === key) {
        customSortDir.value = customSortDir.value === 'desc' ? 'asc' : customSortDir.value === 'asc' ? undefined : 'desc';
        if (!customSortDir.value) customSortKey.value = undefined;
    } else {
        customSortKey.value = key;
        customSortDir.value = 'desc';
    }
}
const getSortBtnType = (key: 'points' | 'solves') => customSortKey.value !== key ? 'default' : customSortDir.value === 'desc' ? 'primary' : 'danger';
const getSortBtnIcon = (key: 'points' | 'solves') => customSortKey.value !== key ? ElIconSort : customSortDir.value === 'asc' ? ElIconSortUp : ElIconSortDown;

const SEARCH_KEYS = [{ name: "title", weight: 1 }, { name: "path", weight: 1 }, { name: "description", weight: 0.8 }, {
    name: "tags",
    weight: 1
}]
const SEARCH_DEFAULTS = {
    useExtendedSearch: true,
    isCaseSensitive: false,
    shouldSort: true,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    findAllMatches: true,
    keys: SEARCH_KEYS,
    distance: 100,
}
const SEARCH_MODES = {
    Fuzzy: {
        threshold: 0.6,
        ...SEARCH_DEFAULTS
    },
    Exact: {
        ignoreLocation: true,
        threshold: 0,
        ...SEARCH_DEFAULTS
    },
    Custom: {
        threshold: 1,
        ...SEARCH_DEFAULTS
    }
} as const;

const TYPES = [
    { label: "CTF Events", filter: /^\/ctf\/[^/]+$/ },
    { label: "CTF Writeups", filter: /^\/ctf\/[^/]+\/[^/]+\/[^/]+$/ },
    { label: "Blog", filter: /^\/blog\/.+$/ },
    { label: "HackTheBox", filter: /^\/htb\/.+$/ },
] as const;

const typeFilter = ref<number[]>([]);

function customFilter(items: FuseResult<PageCollections['content']>[]): FuseResult<PageCollections['content']>[] {
    if (searchMode.value !== "Custom") return items;
    items = items.filter(item => (filterTags.value ?? []).every(tag => item.item?._tags?.includes(tag)));
    if (typeFilter.value.length) items = items.filter(item => typeFilter.value.some(i => TYPES[i].filter.test(item.item.path)));

    const key = customSortKey.value;
    if (key) items = items.filter(i => i.item[key]).sort((a, b) => {
        const aVal = a.item[key];
        const bVal = b.item[key];
        if (aVal === bVal) return 0;
        if (!aVal) return 1;
        if (!bVal) return -1;
        if (customSortDir.value === 'asc') return aVal > bVal ? 1 : -1;
        return aVal < bVal ? 1 : -1;
    });
    return items;
}

const searchMode = ref("Fuzzy" as keyof typeof SEARCH_MODES);
const fuse = computed(() => new Fuse(docs.value ?? [], SEARCH_MODES[searchMode.value]));
watch(docs, () => fuse.value.setCollection((docs.value ?? []) as never[]), { immediate: true });
const isSearching = computed(() => search.value.length > 1)
const docsFiltered = computed(() => customFilter(isSearching.value ? fuse.value.search(search.value).filter(e => (e?.score ?? 1) < 0.9) : (docs.value ?? []).map(w => ({
    item: w,
    matches: null,
    score: null
} as unknown as any))));
function highlight(text?: string, indices?: readonly RangeTuple[]) {
    if (!indices || !text) return text;
    return indices.reduce((str, [start, end]) => {
        str[start] = `<span class="highlighted">${str[start]}`;
        str[end] = `${str[end]}</span>`;
        return str;
    }, text.split("")).join("");
}
</script>