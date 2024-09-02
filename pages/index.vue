<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <div>
    {{ runtimeConfig.public.apiBase }}
  </div>
</template>
