import { createApp } from 'vue'
import App from './App.vue'
// element icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// svg
import 'virtual:svg-icons-register'
// 自定义插件，用于注册自定义全局组件
import globalComponents from '@/components'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(globalComponents).mount('#app')
