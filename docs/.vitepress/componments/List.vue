<template>
  <div v-for="item in lists">{{ item.title }}</div>
</template>
<script lang="ts" setup>
const props = defineProps({
  lists: Array<ListType>,
});
type ListType = { name: string; title: String };
</script>
