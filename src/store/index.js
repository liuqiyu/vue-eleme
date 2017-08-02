import Vue from 'vue'
import Vuex from 'vuex'
/*import mutations from './mutations'
 import actions from './action'*/
import getters from './getters'

Vue.use(Vuex);

const state = {
  localCity: "深圳",    // 当前的城市
  localCityId: '0755', // 当前城市的id
  count:''
};

export default new Vuex.Store({
  state,
  getters
})
