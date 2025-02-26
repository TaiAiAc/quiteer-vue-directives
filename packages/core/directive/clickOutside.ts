import type { Directive, DirectiveBinding } from 'vue'

declare global {
  interface HTMLElement {
    _clickOutsideHandler?: (event: MouseEvent) => void
  }
}

interface ClickOutsideOptions {
  /**
   * 点击外部时的回调函数
   */
  handler: () => void

  /**
   * 是否在点击外部时立即触发回调
   * @default true
   */
  immediate?: boolean

  /**
   * 是否在指令绑定时添加事件监听
   * @default true
   */
  attachOnMount?: boolean
}

type ClickOutsideValue = (() => void) | ClickOutsideOptions

const defaultOptions: Partial<ClickOutsideOptions> = {
  immediate: true,
  attachOnMount: true
}

const directive: Directive<HTMLElement, ClickOutsideValue> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<ClickOutsideValue>) {
    const options = typeof binding.value === 'function'
      ? { ...defaultOptions, handler: binding.value }
      : { ...defaultOptions, ...binding.value }

    if (!options.attachOnMount)
      return

    el._clickOutsideHandler = (event: MouseEvent) => {
      const target = event.target as Node
      if (el === target || el.contains(target))
        return

      if (options.immediate)
        options.handler()
      else
        setTimeout(options.handler, 0)
    }

    document.addEventListener('click', el._clickOutsideHandler)
  },

  unmounted(el: HTMLElement) {
    if (el._clickOutsideHandler) {
      document.removeEventListener('click', el._clickOutsideHandler)
      delete el._clickOutsideHandler
    }
  }
}

export default {
  name: 'clickOutside',
  directive
}
