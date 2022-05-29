// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vuex
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

// 准备 actions —— 用于响应组件中的动作
const actions = {
  // 对于没有额外业务逻辑、ajax 请求的，直接与 mutations 对话
  // // 加 
  // increment(context , value) {
  //   context.commit('INCREMENT', value);
  // },
  // // 减
  // decrement(context, value) {
  //   context.commit('DECREMENT', value);
  // },
  // 奇数加
  incrementOdd(context, value) {
    console.log('actions 1 处理了一些事情', value);
    context.dispatch('actions2', value);
    // if (context.state.sum % 2) {
    //   context.commit('INCREMENT', value);
    // }
  },
  actions2(context, value) {
    console.log('actions 2 处理了一些事情', value);
    context.dispatch('actions3', value);
  },
  actions3(context, value) {
    console.log('actions 3 处理了一些事情', value);
    context.commit('INCREMENT', value);
  },
  // 等一等加
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('INCREMENT', value);
    }, 500);
  }
};

// 准备 mutations —— 用于操作数据（state）
const mutations = {
  INCREMENT(state, value) {
    // console.log('mutations 中的方法被执行了', state, value);
    state.sum += value;
  },
  DECREMENT(state, value) {
    state.sum -= value;
  },
};

// 准备 state —— 用于存储数据
const state = {
  sum: 0,
};

// 创建并导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});

// 导出 store
// export default store;