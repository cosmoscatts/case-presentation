<script setup lang="ts">
function toggle() {
  toggleDark()
}
</script>

<template>
  <div flex-center text-24px font-bold h60px relative>
    <div flex-auto />
    作品集
    <div flex-auto />
    <button
      icon-btn text-lg mr5
      i="carbon-sun dark:carbon-asleep"
      @click="toggle"
    />
  </div>
</template>
