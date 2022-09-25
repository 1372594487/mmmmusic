import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as utils from './libs/utils'
import "/src/render/assets/style/font/font.css"
import GtqUI from './libs/gtq-ui/index.js'
// import "/src/render/assets/style/font_icon/font_2871608_j84k3jygm1/iconfont.css"
// createApp(App).mount('#app')
const app = createApp(App);
app.use(router).use(GtqUI);
app.mount('#app')
// In render process.
console.log(window);


