// 该文件是整个项目的入口文件

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 引入混入
// import mixin from '../mixin/mixin';
// 引入插件
// import plugins from './plugins';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 混入
// Vue.mixin(mixin);

// 应用(使用)插件
// Vue.use(plugins, {userData: 'hello plugins!'});
// const Puppet = Vue.extend({});
// const puppet = new Puppet();
// Vue.prototype.eventBus = puppet;

// 创建 Vue 实例对象 -- vm
new Vue({
  el: '#app',
  // 将 App 组件放入容器中
  render: h => h(App),  // 等同下方的方法，但由于没有用到 this，写成 箭头函数 更加精简，形参可随便取名
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
  // render(createElement) {
  //   return createElement('h1', '你好啊啊啊啊');
  // },
  // components: { App },
});
