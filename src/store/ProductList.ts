import { fetchProducts } from "../api";
import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store";

// export const state: State = {
  
// };
// export const getters = {
//   getAllProducts: state => {
//     return state.products;
//   }
// };
// export const mutations = {
//   SET_ITEMS: (state, payload) => {
//     state.products = payload.products;
//   }
// };
// export const actions = {
//   FETCH_PRODUCTS: async ({ commit }) => {
//     const res = await fetchProducts();
//     commit("SET_ITEMS", res.data);
//   }
// };

// export default new Vuex.Store<State>({
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// });

export interface IProductListState {
  products: object
}

@Module({ dynamic: true, store, name: "productList", namespaced: true })
class ProductList extends VuexModule implements IProductListState {
  products: object = {} 

  @Mutation
  public SET_ITEMS(payload: IProductListState) {
        this.products = payload.products;
  }
}

const productListModule = getModule(ProductList);

export default productListModule
