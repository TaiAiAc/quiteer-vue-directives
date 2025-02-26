import type { Directive } from 'vue'

const directive: Directive<HTMLElement, number> = (el, binding) => {
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
  el.style.display = '-webkit-box'
  Reflect.set(el.style, '-webkit-line-clamp', binding.value || 1)
  Reflect.set(el.style, '-webkit-box-orient', 'vertical')
}

export default {
  name: 'ellipsis',
  directive
}
