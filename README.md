# my_first_pure_vue

## 关于不同版本的 Vue
* vue.js 与 vue.runtime.xxx.js 的区别：
  * vue.js 是完整版的 vue，包含：核心功能 + 模板解析器
  * vue.runtime.xxx.js 是运行版的 Vue, 只包含核心功能，没有模板解析器（webpack打包时会解析）

* 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数收到
  的 createElement 函数去指定具体内容

## 脚手架文件结构
* 包含 node_modules, 就是 vue 里项目里的文件目录

## ref 属性
* 被用来给元素或子组件注册引用信息（id 的替代者）
* 应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）
* 使用方式：
  * 打标识 ref="xxx"
  * 获取 this.$refs.xxx


## 配置项 props
  功能：让组件接收外部传过来的数据
  接收数据方式
    1. 只接收
      props: ['name'],
    2. 限制类型
      props: {
        name: String
      }
    3. 限制类型、限制必要性、指定默认值
      props: {
        type: String,
        required: true,
        default: '张三',
      }
  注： props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，请复制 props 的内容到 data 中一份，然后去修改 data 中的数据

## 混入
* 功能：可以把多个组件共用的配置提取成一个混入对象
* 特点：合并不是替换，先调用混入，后内置，重复的后内置的 overwrite
* 使用方式：
  * 定义混合
  * 使用混入
    1. 全局混入：Vue.mixin(xxx)
    2. 局部混入：mixins: [xxx]

## 插件
  功能：提供更多封装好的功能，增强 Vue
  本质：包含 install 方法的一个对象，install 的第一个参数是 Vue， 第二个以后的参数是插件使用者传递的数据
  定义插件：
    对象.install = function (Vue, options) {
      // 全局过滤器 Vue.filter()

      // 定义全局指令 Vue.directive()
    
      // 定义混入 Vue.mixin()
    
      // 给 Vue 原型上添加一个方法 （vm和vc都能使用）
    }
  使用插件：Vue.use

## scoped 样式
* 作用：让样式在局部生效，防止冲突
* 写法：<style scoped>

## 组件化编码流程

1. 拆分静态组件（ui）：组件要按照 功能点 拆分，命名不要与 html 元素冲突（header、head)
2. 实现动态组件（逻辑）：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
   * 一个组件在用：放在组件自身即可
   * 一些组件在用：放在他们共同的父组件上（状态提升）—— 这个之后废弃，直接用页面通信方式
3. 实现交互：从绑定事件开始

注： v-model 绑定的值不能是 props 传过来的值，因为 props 值是只读的，不允许修改，props 传过来的若是对象类型的值，修改对象中的属性 Vue 不会报错，但不推荐这样做

## webStorage

1. 存储内容大小一般支持 5 MB 左右（不同浏览器有差异）
2. 浏览器通过 window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制
3. SessionStorage 存储内容随浏览器窗口关闭而消失，类似 内存；LocalStorage 存储内容，需手动清空缓存才会消失，是存在硬盘里了
4. JSON.parse(null) 结果依然是 null

## 组件的自定义事件

1. 一种组件间通信的方式，适用于 ： 子组件 => 父组件
2. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，就要在 A 中给 B 绑定自定义事件（事件的回调在 A 中）
3. 绑定自定义事件：

```javascript
// 方式一
<Demo @atguigu="test" /> 或 <Demo v-on:atguigu="test" />
// 方式二
mounted() {
  this.$refs.xxx.$on('atguigu', this.test); // 第二个参数是绑定的事件函数，这个方法更灵活，用于不需要立即绑定组件自定义事件
// 注意：方式二绑定自定义事件时，需考虑 this 的指向：1. 回调配置在 methods 中；2. 用箭头函数，否则this指向为子组件
}
```

4. 触发自定义事件： ```this.$emit('atguigu', data)```
5. 解绑自定义事件：```this.$off('atguigu')```
6. 组件上也可以绑定原生 DOM 事件，需要使用 native 修饰符

## 优秀的组件间通信方式一：全局事件总线 (GlobalEventBus)

* 可实现任意组件间通信
* 安装全局事件总线

```js
new Vue({
 	……
  beforeCreate() {
  	Vue.prototype.$eventBus = this; // 注册全局事件总线，$eventBus 指向的就是当前应用的 vm
	}
})
```

* 使用全局事件总线
  * 接收数据：```this.$eventBus.$on('eventName', this.method);```
  * 提供数据：```this.$eventBus.$emit('eventName', data);```
* 注：最 beforeDestroy() 钩子中，用 $off 去解绑 注册事件的组件所注册绑定的事件（不然 eventBus 身上东西会太多）
* 仅父子传递是不需要用这个的f





