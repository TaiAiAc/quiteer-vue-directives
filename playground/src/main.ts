import { createApp } from 'vue'
import './style.css'
import QuiteerDirectives from '@quiteer/directives'
import App from './App.vue'

// 导入指令

// 创建应用实例
const app = createApp(App)

// 注册指令
app.use(QuiteerDirectives)

// 挂载应用
app.mount('#app')
