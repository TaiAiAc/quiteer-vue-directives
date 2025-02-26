import type { App } from 'vue'
import ellipsis from './directive/ellipsis'
import intersecting from './directive/intersecting'
import loading from './directive/loading'
import throttle from './directive/throttle'
import debounce from './directive/debounce'

export { loading, ellipsis, intersecting, throttle, debounce }

export default {
  install: (app: App) => {
    app.directive(loading.name, loading.directive)
    app.directive(ellipsis.name, ellipsis.directive)
    app.directive(intersecting.name, intersecting.directive)
    app.directive(throttle.name, throttle.directive)
    app.directive(debounce.name, debounce.directive)
  }
}
