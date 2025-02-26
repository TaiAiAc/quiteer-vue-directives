import type { Directive } from 'vue'

declare global {
  interface HTMLElement {
    _debounceHandler?: (event: Event) => void
  }
}

interface DebounceOptions {
  /**
   * 防抖延迟时间（毫秒）
   * @default 300
   */
  wait?: number

  /**
   * 是否在开始时立即执行
   * @default false
   */
  immediate?: boolean
}

type DebounceValue = Function | { handler: Function; options?: DebounceOptions }

const debounce = (fn: Function, options: DebounceOptions = {}) => {
  const { wait = 300, immediate = false } = options
  let timer: NodeJS.Timeout | null = null
  let isInvoked = false

  const debounced = function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (immediate && !isInvoked) {
      isInvoked = true
      fn.apply(this, args)
    }
    else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoked = false
      }, wait)
    }
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    isInvoked = false
  }

  return debounced
}

const directive: Directive<HTMLElement, DebounceValue> = {
  created(el, binding) {
    const value = binding.value
    const handler = typeof value === 'function' ? value : value.handler
    const options = typeof value === 'function' ? {} : (value.options || {})
    const debouncedHandler = debounce(handler, options)

    el._debounceHandler = (event: Event) => {
      debouncedHandler.call(el, event)
    }
    el.addEventListener(binding.arg || 'input', el._debounceHandler as EventListener)
  },

  beforeUnmount(el, binding) {
    if (el._debounceHandler) {
      el.removeEventListener(binding.arg || 'input', el._debounceHandler as EventListener)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (el._debounceHandler.cancel) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        el._debounceHandler.cancel()
      }
    }
  }
}

export default {
  name: 'debounce',
  directive
}
