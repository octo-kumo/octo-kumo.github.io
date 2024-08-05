<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

withDefaults(defineProps<{
  article?: ParsedContent | Partial<ParsedContent>,
  idPrefix?: string,
  hideCat?: boolean,
  customTagHtml?: (tag: string, index: number) => string,
  short?: boolean
}>(), {
  customTagHtml: (tag: string) => tag
});

</script>

<template>
  <div class="flex gap-1 my-1 article-tags font-mono" v-if="article"
    v-shared="getTransitionName(article, 'tags-' + (idPrefix ?? ''))">
    <el-tag v-if="article.rank" size="small" :type="article.rank > 20 ? 'info' : 'primary'"><el-icon>
        <el-icon-trophy />
      </el-icon>&nbsp;{{ article.rank }}
    </el-tag>
    <template v-if="short">
      <el-tag v-if="article.team" size="small" type="warning"><el-icon>
          <icons-users />
        </el-icon>
      </el-tag>
      <el-tag v-if="article.points && oneLvlUp(article._path) !== '/ctf'" size="small"
        :type="(article.solves ?? 999) > 50 ? 'info' : 'success'">
        {{ article.points }}
      </el-tag>
    </template>
    <template v-else>
      <el-tag v-if="article.team" size="small" type="warning"><el-icon>
          <icons-users />
        </el-icon>&nbsp;{{ article.team }}
      </el-tag>
      <el-tag v-if="article.points" size="small" type="info">{{ article.points }} points</el-tag>
      <el-tag v-if="article.solves" size="small" :type="article.solves > 50 ? 'info' : 'success'">
        {{ article.solves }} solves
      </el-tag>
    </template>
    <el-tag size="small" v-if="getCtfCategory(article) && !hideCat">{{ getCtfCategory(article) }}</el-tag>
    <el-tag size="small" v-for="(tag, i) in (article.tags ?? [])">
      <span v-html="customTagHtml(tag, i)"></span>
    </el-tag>
  </div>
</template>

<style scoped lang="scss"></style>
