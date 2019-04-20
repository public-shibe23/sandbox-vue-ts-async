import Vue from "vue";
import Vuex from "vuex";
import {IProductListState} from "./store/ProductList";

Vue.use(Vuex);

export interface State {
  prodcuts: IProductListState
}

export default new Vuex.Store<State>({
});
