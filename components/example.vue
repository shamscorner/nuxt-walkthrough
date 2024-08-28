<script lang="ts" setup>
const example = useExample();
</script>

<template>
  <div>
    <!-- more like use-client on react -->
    <ClientOnly fallback-tag="span" fallback="Loading...">
      <pre>{{ JSON.stringify(example.config.app, null, 2) }}</pre>
    </ClientOnly>
  </div>
</template>
