export const isDark = useDark()
export const toggleDark = useToggle(isDark)
function createArcoTheme() {
  if (isDark.value) document.body.setAttribute('arco-theme', 'dark')
  else document.body.removeAttribute('arco-theme')
}
watch(isDark, createArcoTheme, { immediate: true })
