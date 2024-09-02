<script setup lang="ts">
import { Example } from "#components";

const BaseFooButton = resolveComponent("BaseFooButton");

const clickable = ref(false);

function toggleClickable() {
  clickable.value = !clickable.value;
}
</script>

<template>
  <!-- dynamic components -->
  <component :is="Example" />
  <component
    :is="clickable ? BaseFooButton : 'input'"
    @click="toggleClickable"
  />
</template>
