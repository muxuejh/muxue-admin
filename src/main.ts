import { createApp } from 'vue'
import App from './App.vue'
// element css（有配置自动到了 element Plus 样式，但 ElMessageBox 样式不生效，所以在这全部导入）
import 'element-plus/dist/index.css'
// element icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// svg
import 'virtual:svg-icons-register'
// 自定义插件，用于注册自定义全局组件
import globalComponents from '@/components'
// 全局样式
import '@/styles/index.scss'
import router from './router'
import pinia from './store'
import '@/permission'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(globalComponents).use(router).use(pinia).mount('#app')
