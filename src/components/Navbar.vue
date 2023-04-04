<script setup lang="ts">
function toggle() {
  toggleDark()
}
</script>

<template>
  <div flex-center text-24px font-bold h60px relative>
    <div flex-auto />
    <div i-carbon-chemistry mr3 text="[#1772d0]" />
    <span text="[#1772d0]">作品集</span>
    <div flex-auto />
    <button
      icon-btn text-lg mr5
      i="carbon-sun dark:carbon-asleep"
      @click="toggle"
    />
  </div>
</template>
