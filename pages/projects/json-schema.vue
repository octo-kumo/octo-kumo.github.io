<template>
  <JsonEditorVue id="json-editor" v-model="value" mode="text"/>
</template>
<script lang="ts" setup>
import {nextTick, onMounted, ref, watch} from "vue";

const value = ref();

const dbName = 'kumo';
const storeName = 'json-schema';
const valueID = 'editor-value';
let db: IDBDatabase;

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(dbName);

    request.onerror = (event) => reject((event.target as IDBOpenDBRequest).error);
    request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore(storeName, {keyPath: 'id'});
    };
  });
};


const writeToIndexedDB = async (data: string) => {
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  store.put({id: valueID, value: data});

  transaction.oncomplete = () => console.log('Data written to IndexedDB');
  transaction.onerror = (event) =>
      console.error('Error writing to IndexedDB:', (event.target as IDBOpenDBRequest).error);
};

// Function to read data from IndexedDB
const readFromIndexedDB = async () => {
  const transaction = db.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);
  const request = store.get(valueID);

  request.onsuccess = (event) =>
      console.log('Data read from IndexedDB:', (value.value = JSON.parse((event.target as IDBOpenDBRequest).result?.value || '')));
  request.onerror = (event) =>
      console.error('Error reading from IndexedDB:', (event.target as IDBOpenDBRequest).error);
};
onMounted(() => {
  nextTick(async () => {
    db = await openDatabase();
    await readFromIndexedDB();
    watch(value, (newV, oldV) => writeToIndexedDB(JSON.stringify(newV)));
  })
})
</script>
<style scoped>
#json-editor {
  height: calc(100vh - 64px);
}
</style>
