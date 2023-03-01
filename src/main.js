import Vue from 'vue'
import App from './App.vue'

//完整引入
//import ElementUI from 'element-ui'
//引入Element UI的全部样式
//import 'element-ui/lib/theme-chalk/index.css'

//按需引入
import { Button, Select } from 'element-ui';

Vue.config.productionTip = false

//Vue.use(ElementUI)

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
    el: '#app',
    render: h => h(App),
})
