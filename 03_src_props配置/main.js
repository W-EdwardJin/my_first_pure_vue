// 该文件是整个项目的入口文件

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 创建 Vue 实例对象 -- vm
new Vue({
  el: '#app',
  // 将 App 组件放入容器中
  render: h => h(App),  // 等同下方的方法，但由于没有用到 this，写成 箭头函数 更加精简，形参可随便取名
  // render(createElement) {
  //   return createElement('h1', '你好啊啊啊啊');
  // },
  // components: { App },
});
