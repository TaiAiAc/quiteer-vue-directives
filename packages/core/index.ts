import type { App } from 'vue'
import ellipsis from './directive/ellipsis'
import intersecting from './directive/intersecting'
import type { LoadingOptions } from './directive/loading'
import loading from './directive/loading'
import type { ThrottleOptions } from './directive/throttle'
import throttle from './directive/throttle'
import type { DebounceOptions } from './directive/debounce'
import debounce from './directive/debounce'
import type { CopyOptions } from './directive/copy'
import copy from './directive/copy'
import type { LazyOptions } from './directive/lazy'
import lazy from './directive/lazy'
import type { ClickOutsideValue } from './directive/clickOutside'
import clickOutside from './directive/clickOutside'
import type { WatermarkValue } from './directive/watermark'
import watermark from './directive/watermark'

export { loading, ellipsis, intersecting, throttle, debounce, copy, lazy, clickOutside, watermark }

export default {
  install: (app: App) => {
    app.directive(loading.name, loading.directive)
    app.directive(ellipsis.name, ellipsis.directive)
    app.directive(intersecting.name, intersecting.directive)
    app.directive(throttle.name, throttle.directive)
    app.directive(debounce.name, debounce.directive)
    app.directive(copy.name, copy.directive)
    app.directive(lazy.name, lazy.directive)
    app.directive(clickOutside.name, clickOutside.directive)
    app.directive(watermark.name, watermark.directive)
  }
}

/**
 * Vue 指令的基础类型接口
 * 包含所有指令共有的属性
 */
export interface BaseDirectiveType<T = any> {
  /**
   * 指令的值
   */
  value?: T
  /**
   * 指令的修饰符
   */
  modifiers: Record<string, boolean>
  /**
   * 指令的旧值
   */
  oldValue?: T
  /**
   * 指令的参数
   */
  arg?: string
}

/**
 * 复制指令类型
 * @example
 * // 基础用法
 * v-copy="'要复制的文本'"
 *
 * // 配置对象用法
 * v-copy="{
 *   text: '要复制的文本',
 *   onSuccess: () => console.log('复制成功'),
 *   successText: '已复制'
 * }"
 */
export interface CopyDirectiveType extends BaseDirectiveType<string | CopyOptions> {}

/**
 * 加载指令类型
 * @example
 * // 基础用法
 * v-loading="true"
 *
 * // 配置对象用法
 * v-loading="{
 *   show: true,
 *   text: '加载中...',
 *   background: 'rgba(0, 0, 0, 0.7)'
 * }"
 */
export interface LoadingDirectiveType extends BaseDirectiveType<boolean | LoadingOptions> {}

/**
 * 节流指令类型
 * @example
 * // 基础用法
 * v-throttle="handleClick"
 *
 * // 自定义事件
 * v-throttle:input="handleInput"
 *
 * // 配置对象用法
 * v-throttle="{
 *   handler: handleClick,
 *   options: { wait: 500, leading: true }
 * }"
 */
export interface ThrottleDirectiveType extends BaseDirectiveType<Function | { handler: Function; options?: ThrottleOptions }> {}

/**
 * 防抖指令类型
 * @example
 * // 基础用法
 * v-debounce="handleInput"
 *
 * // 自定义事件
 * v-debounce:input="handleInput"
 *
 * // 配置对象用法
 * v-debounce="{
 *   handler: handleInput,
 *   options: { wait: 300, immediate: true }
 * }"
 */
export interface DebounceDirectiveType extends BaseDirectiveType<Function | { handler: Function; options?: DebounceOptions }> {}

/**
 * 图片懒加载指令类型
 * @example
 * // 基础用法
 * v-lazy="{ loading: '/loading.gif', error: '/error.jpg' }"
 *
 * // 带回调函数
 * v-lazy="{
 *   loading: '/loading.gif',
 *   error: '/error.jpg',
 *   onLoad: () => console.log('加载成功')
 * }"
 */
export interface LazyDirectiveType extends BaseDirectiveType<LazyOptions> {}

/**
 * 水印指令类型
 * @example
 * // 基础用法
 * v-watermark="'水印文本'"
 *
 * // 配置对象用法
 * v-watermark="{
 *   text: '水印文本',
 *   fontSize: '16px',
 *   color: 'rgba(0, 0, 0, 0.1)'
 * }"
 */
export interface WatermarkDirectiveType extends BaseDirectiveType<WatermarkValue> {}

/**
 * 文本省略指令类型
 * @example
 * // 单行省略
 * v-ellipsis="1"
 *
 * // 多行省略
 * v-ellipsis="3"
 */
export interface EllipsisDirectiveType extends BaseDirectiveType<number> {}

/**
 * 元素交叉观察指令类型
 * @example
 * // 基础用法
 * v-intersecting="handleIntersect"
 *
 * // 仅在显示时触发
 * v-intersecting:show="handleShow"
 *
 * // 仅在隐藏时触发
 * v-intersecting:hide="handleHide"
 */
export interface IntersectingDirectiveType extends BaseDirectiveType<(isIntersecting: boolean) => void> {}

/**
 * 点击外部指令类型
 * @example
 * // 基础用法
 * v-click-outside="handleClickOutside"
 *
 * // 配置对象用法
 * v-click-outside="{
 *   handler: handleClickOutside,
 *   immediate: true
 * }"
 */
export interface ClickOutsideDirectiveType extends BaseDirectiveType<ClickOutsideValue> {}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    vCopy: CopyDirectiveType
    vLoading: LoadingDirectiveType
    vThrottle: ThrottleDirectiveType
    vDebounce: DebounceDirectiveType
    vLazy: LazyDirectiveType
    vWatermark: WatermarkDirectiveType
    vEllipsis: EllipsisDirectiveType
    vIntersecting: IntersectingDirectiveType
    vClickOutside: ClickOutsideDirectiveType
  }

  export interface GlobalDirectives {
    copy: CopyDirectiveType
    loading: LoadingDirectiveType
    throttle: ThrottleDirectiveType
    debounce: DebounceDirectiveType
    lazy: LazyDirectiveType
    watermark: WatermarkDirectiveType
    ellipsis: EllipsisDirectiveType
    intersecting: IntersectingDirectiveType
    clickOutside: ClickOutsideDirectiveType
  }
}
