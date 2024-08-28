<script setup lang="ts">
const route = useRoute();
const example = useExample();
</script>

<template>
  <!-- more like use-client on react -->
  <ClientOnly fallback-tag="span" fallback="Loading...">
    <pre>{{ JSON.stringify(example.config.app, null, 2) }}</pre>
  </ClientOnly>
</template>
