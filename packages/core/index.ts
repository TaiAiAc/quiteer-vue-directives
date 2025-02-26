import type { App } from 'vue'
import ellipsis from './directive/ellipsis'
import intersecting from './directive/intersecting'
import loading from './directive/loading'

export { loading, ellipsis, intersecting }

export default {
  install: (app: App) => {
    app.directive(loading.name, loading.directive)
    app.directive(ellipsis.name, ellipsis.directive)
    app.directive(intersecting.name, intersecting.directive)
  }
}
