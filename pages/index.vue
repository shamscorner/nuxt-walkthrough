<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
</script>

<template>
  <div>
    {{ runtimeConfig.public.apiBase }}

    <pre>{{ JSON.stringify(appConfig, null, 2) }}</pre>
  </div>
</template>
