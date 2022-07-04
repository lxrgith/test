import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      num: 0,
    };
  },
  mutations: {
    num(state) {
      state.num += 1;
    },
  },
});
