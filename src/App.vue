<script setup lang="ts">
import { projects } from '~/config'
const current = ref(1)
const filterProjects = computed(() => {
  if (projects.length <= 6) return projects
  const [l, r] = [(current.value - 1) * 6, current.value * 6]
  return projects.slice(l, r)
})
function changePage(val: number) {
  current.value = val
}
</script>

<template>
  <a-layout relative hw-screen bg-body of-hidden>
    <a-layout-header bg-nav absolute top-0 right-0 w-full border-b="1px solid [var(--color-border)]">
      <Navbar />
    </a-layout-header>
  </a-layout>

  <a-layout-content absolute top-60px right-0 w-full :style="{ height: 'calc(100vh - 60px)' }" of="x-hidden y-auto">
    <div w80vw ha mx10vw lt-md="w100vw mx0" p15px mt15px>
      <div grid="~ cols-3 gap5" lt-lg="grid-cols-2" lt-sm="grid-cols-1">
        <Project v-for="project in filterProjects" :key="project.id" col-span-1 v-bind="project" />
      </div>
      <div v-if="projects.length > 6" mt15px flex justify-end>
        <a-pagination :total="projects.length" :current="current" :page-size="6" show-total @change="changePage" />
      </div>
      <Footer />
    </div>
  </a-layout-content>
</template>
