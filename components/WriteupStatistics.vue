<script lang="ts" setup>
import type { NavItem } from '@nuxt/content';
import type { ApexOptions } from "apexcharts";
import VueApexCharts, { type VueApexChartsComponent } from 'vue3-apexcharts'

const colors: Record<string, (v: number) => string> = {
    "dark": (v: number) => `color-mix(in oklch, #66b1ff ${((1 - v) * 100).toFixed(2)}%, #f78989 ${((v) * 100).toFixed(2)}%)`,
    "light": (v: number) => `color-mix(in oklch, #409eff ${((1 - v) * 100).toFixed(2)}%, #f56c6c ${((v) * 100).toFixed(2)}%)`,
};
function getColor(v: number) {
    const m = colors[colorMode.value];
    return (m && m(v)) || colors.dark(v);
}
let syncLock = false;
function syncCharts(c1: VueApexChartsComponent, c2: VueApexChartsComponent) {
    if (syncLock) return;
    console.log("syncing...")
    syncLock = true;
    const l1 = c1.options?.labels ?? [];
    const l2 = c2.options?.labels ?? [];
    const p1: string[] = ((c1?.chart as any)?.w.globals.selectedDataPoints[0] ?? []).map((i: number) => l1[i]);
    const p2: string[] = ((c2?.chart as any)?.w.globals.selectedDataPoints[0] ?? []).map((i: number) => l2[i]);
    // const s1 = p2.filter((i: string) => !p1.includes(i));
    const s2 = p1.filter((i: string) => !p2.includes(i));
    s2.forEach(i => c2.toggleDataPointSelection(l2.indexOf(i)));
    syncLock = false;
}

const catChart = ref<VueApexChartsComponent | null>(null);
const pntChart = ref<VueApexChartsComponent | null>(null);
const model = defineModel<{ catFilter: string[] }>({ default: {} });
const props = defineProps<{ docs: NavItem[] }>();
const docs = props.docs;
const colorMode = useColorMode();
const grouped = computed(() => docs.reduce((acc, doc) => {
    const cat = getCtfCategory(doc)
    if (cat) {
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(doc);
    }
    return acc;
}, {} as Record<string, NavItem[]>));
const categoryChart = computed(() => {
    const vals: [string, number, string][] = Object.entries(grouped.value).map(([_, docs], i, arr) => [_, docs.length, getColor(i / arr.length)]);
    vals.sort((a, b) => b[1] - a[1]);
    return {
        select(event: any, chartContext: any, opts: any) {
            model.value.catFilter = opts.selectedDataPoints[0].map((i: number) => vals[i][0]);
            syncCharts(catChart.value!, pntChart.value!);
        },
        series: vals.map(([_, docs, c]) => docs),
        options: <ApexOptions>{
            colors: vals.map(([_, __, c]) => c),
            title: {
                text: 'By Writeup Count'
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            value: {
                                formatter: (val) => `${val} wp`
                            },
                            total: {
                                show: true,
                                label: 'Total Writeups',
                                formatter: (w: any) => w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)
                            }
                        }
                    },
                }
            },
            chart: {
                id: 'catChart',
                // group: 'writeups',
                background: 'rgba(0, 0, 0, 0)',
            },
            labels: vals.map(([cat, _, c]) => cat),
            theme: {
                mode: colorMode.value
            },
        }
    }
});
const valueChart = computed(() => {
    const vals: [string, number, string][] = Object.entries(grouped.value).map(([_, docs], i, arr) => [_, docs.map(d => d.points ?? 0).reduce((a, b) => a + b, 0), getColor(i / arr.length)])
    vals.sort((a, b) => b[1] - a[1]);
    return {
        select(event: any, chartContext: any, opts: any) {
            model.value.catFilter = opts.selectedDataPoints[0].map((i: number) => vals[i][0]);
            syncCharts(pntChart.value!, catChart.value!);
        },
        series: vals.map(([_, value, c]) => value),
        options: <ApexOptions>{
            colors: vals.map(([_, __, c]) => c),
            title: {
                text: 'By Total Points'
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            value: {
                                formatter: (val) => `${val}pt`
                            },
                            total: {
                                show: true,
                                label: 'Total Points',
                                formatter: (w: any) => w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)
                            }
                        }
                    }
                }
            },
            chart: {
                id: 'pntChart',
                // group: 'writeups',
                background: 'rgba(0, 0, 0, 0)',
            },
            labels: vals.map(([cat, _, c]) => cat),
            theme: {
                mode: colorMode.value
            },
        }
    }
});

</script>
<template>
    <div class="flex flex-row items-center justify-between justify-items-center">
        <client-only>
            <vue-apex-charts ref="catChart" type="donut" :options="categoryChart.options" width="350" height="350"
                @dataPointSelection="categoryChart.select" :series="toRaw(categoryChart.series)" />
            <vue-apex-charts ref="pntChart" type="donut" :options="valueChart.options" width="350" height="350"
                @dataPointSelection="valueChart.select" :series="toRaw(valueChart.series)" />
        </client-only>
    </div>
</template>
<style scoped lang="scss"></style>