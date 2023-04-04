import lottie from 'lottie-web'
import type { RendererType } from 'lottie-web'

export function batchInvoke(functions: Nullable<Fn>[]) {
  functions.forEach(fn => fn && fn())
}

export interface LottieParams {
  containerId: string
  path: string
  loop?: boolean
  renderer?: RendererType
}

function getElement(id: string) {
  return document.querySelector(id)!
}

export function useLottie({
  containerId,
  path,
  loop = true,
  renderer = 'svg',
}: LottieParams) {
  return lottie.loadAnimation({
    path,
    loop,
    renderer,
    container: getElement(containerId),
  })
}

export function useListLottie(list: LottieParams[]) {
  return list.forEach(item => useLottie(item))
}

/**
 * 打开窗口
 */
type TargetContext = '_self' | '_parent' | '_blank' | '_top'
export function useOpenWindow(
  url: string,
  opts?: {
    target?: TargetContext
    [key: string]: any
  },
): void {
  const { target = '_blank', ...others } = opts || {}
  window.open(
    url,
    target,
    Object.entries(others)
      .reduce((preValue: string[], curValue) => {
        const [key, value] = curValue
        return [...preValue, `${key}=${value}`]
      }, [])
      .join(','),
  )
}
