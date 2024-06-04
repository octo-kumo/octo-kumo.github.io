<script setup lang="ts">
type ReadonlyHeaders = InstanceType<typeof VDataTable>['headers']
const headers: ReadonlyHeaders = [
  {title: 'Name', sortable: false, key: 'name'},
  {title: 'Price (￥)', key: 'price'},
  {
    title: 'Value', align: 'center', key: 'value',
    children: [
      // {title: 'N/￥', value: (item: Item) => "hello"},
      {title: 'Base (m)', value: 'name'},
      {title: 'Volume (m³)', value: 'name'},
    ],
  },
  {title: 'Link', sortable: false, key: 'link'},
];
type Item = {
  link: string;
  name: string;
  price: number;
  amount: number;

  choices?: Item[];
}

const items: Item[] = [
  {link: "https://google.com", name: "A", price: 10, amount: 1},
  {link: "", name: "B", price: 20, amount: 3},
  {link: "", name: "C", price: 30, amount: 4},
  {link: "", name: "D", price: 60, amount: 5}
]

</script>

<template>
  <v-data-table :headers="headers"
                :items="items"
                height="calc(100vh - 64px - 48px)"
                items-per-page="15"
                fixed-footer
                fixed-header>
    <template v-slot:item.link="{ item }">
      <v-btn variant="plain" class="mx-2" icon="mdi-open-in-new" :href="item.link" target="_blank"></v-btn>
    </template>
    <!--    <div slot="bottom">-->
    <!--      hello test-->
    <!--    </div>-->
  </v-data-table>
</template>

<style scoped lang="css">

</style>
