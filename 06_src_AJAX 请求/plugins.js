import mixin from '../mixin/mixin';

export default {
  install(Vue, options) {
    // 全局过滤器 Vue.filter()

    // 定义全局指令 Vue.directive()

    // 定义混入 Vue.mixin()
    Vue.mixin(mixin); // 全局混入

    // 给 Vue 原型上添加一个方法 （vm和vc都能使用）
    Vue.prototype.plugin = () => {
      alert('主人，你好，我是你定义的插件，我正在为你提供服务 XD');
      alert(options.userData);
    };
  }
}
