<script setup lang="ts">
const props = defineProps<{
  title: string
  tags?: string[]
  url?: string
  description?: string
  images?: string[]
}>()
const refTagList = ref()
function openUrl() {
  if (!props.url) return
  useOpenWindow(props.url)
}

function getOverflowListWidth() {
  if (!refTagList.value) return '100%'
  return `${refTagList.value.$el.clientWidth - 20}px`
}
const overflowListWidth = ref('100%')
onMounted(() => {
  overflowListWidth.value = getOverflowListWidth()
})
const { width } = useWindowSize()
watch(width, () => {
  overflowListWidth.value = getOverflowListWidth()
}, { immediate: true })
</script>

<template>
  <a-card flex="~ col" h465px bordered hoverable>
    <a-carousel
      v-if="images?.length"
      :auto-play="true"
      animation-name="fade"
      show-arrow="never"
      indicator-position="outer"
      :style="{
        width: '100%',
        height: '240px',
      }"
    >
      <a-carousel-item v-for="image in images" :key="image">
        <img
          :src="image"
          :style="{
            width: '100%',
            height: '240px',
          }"
          :class="{ 'cursor-pointer': url?.length }"
          @click="openUrl"
        >
      </a-carousel-item>
    </a-carousel>
    <a-card
      v-else :style="{
        width: '100%',
        height: '240px',
      }" flex-center
    >
      <a-empty description="暂无图片" />
    </a-card>
    <div flex-center h50px text-24px font-bold>
      {{ title }}
    </div>
    <a-card ref="refTagList" flex-center h40px mt5px w-full>
      <a-tooltip :content="tags?.join('、')">
        <a-overflow-list :style="{ width: overflowListWidth }">
          <a-tag v-for="tag in tags" :key="tag" mr3>
            {{ tag }}
          </a-tag>
        </a-overflow-list>
      </a-tooltip>
    </a-card>
    <p h60px mt10px of="x-hidden y-auto">
      简介：{{ description ?? '暂无简介' }}
    </p>
  </a-card>
</template>
