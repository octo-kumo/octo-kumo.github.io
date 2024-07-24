<template>
    <el-input v-model="search" placeholder="Fuzzy search!" :prefix-icon="ElIconSearch" />
    <el-pagination v-model:current-page="currPage" class="justify-center" layout="prev, pager, next"
        :total="docsFiltered.length" :page-size="5" hide-on-single-page />
    <el-timeline class="mt-2!" v-auto-animate>
        <el-timeline-item v-for="{ item: doc, matches, score } in docsFiltered.slice(currPage * 5 - 5, currPage * 5)"
            :key="doc._path" hide-timestamp>
            <kumo-link no-prefetch type="primary" :to="'/c' + doc._path">
                <span v-html="highlight(doc.title, matches?.find(m => m.key === 'title')?.indices)"></span>
            </kumo-link>
            <el-tag v-if="score" :type="score < 0.1 ? 'success' : score < 0.5 ? 'warning' : 'danger'" size="small"
                class="ml-1">
                {{ (1 - score).toPrecision(2) }}
            </el-tag>
            <br />
            <el-text class="font-mono!" size="small" v-if="isSearching">
                <span v-html="'/c' + highlight(doc._path, matches?.find(m => m.key === '_path')?.indices)"></span>
            </el-text>
            <el-text class="block mt-1!">
                <span v-html="highlight(doc.description, matches?.find(m => m.key === 'description')?.indices)"></span>
            </el-text>
            <article-tags :article="doc"
                :custom-tag-html="(tag, i) => highlight(tag, matches?.find(m => m.key === 'tags' && m.refIndex === i)?.indices) ?? ''" />
            <span class="el-timeline-item__timestamp is-bottom" v-text="displayDocDates(doc)" />
        </el-timeline-item>
        <template v-if="docsFiltered.length === 0">
            <el-skeleton v-if="status === 'pending'" />
            <el-empty v-else />
        </template>
    </el-timeline>
</template>
<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
import Fuse, { type RangeTuple } from 'fuse.js';

const currPage = useStorage('index-pager-curr', 1);
const search = ref("");
const { data: docs, status } = await useLazyAsyncData(`c/docs_i`, () => queryAllDocs(true));

const fuse = new Fuse([], {
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: true,
    isCaseSensitive: false,
    shouldSort: true,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    keys: [{ name: "title", weight: 1 }, { name: "_path", weight: 1 }, { name: "description", weight: 0.8 }, {
        name: "tags",
        weight: 1
    }]
});
watch(docs, () => fuse.setCollection((docs.value ?? []) as never[]), { immediate: true });

const isSearching = computed(() => search.value.length > 1)
const docsFiltered = computed(() => isSearching.value ? fuse.search(search.value).filter(e => (e?.score ?? 1) < 0.9) : (docs.value ?? []).map(w => ({
    item: w,
    matches: null,
    score: null
})))
// definePageMeta({
//   layout: 'clean'
// });
function highlight(text?: string, indices?: readonly RangeTuple[]) {
    if (!indices || !text) return text;
    return indices.reduce((str, [start, end]) => {
        str[start] = `<span class="highlighted">${str[start]}`;
        str[end] = `${str[end]}</span>`;
        return str;
    }, text.split("")).join("");
}
</script>