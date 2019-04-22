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
export interface IProductListState {
  products: IProductState[];
}
export interface IProductState {
  id: number;
  name: string;
  stock: number;
  price: number;
}

@Module({ dynamic: true, store, name: "productList", namespaced: true })
class ProductList extends VuexModule implements IProductListState {
  products: IProductState[] = [];

  @Action({ commit: "SET_ITEMS" })
  public async FETCH_PRODUCTS() {
    const products = await fetchProducts();
    return { products };
  }

  @Mutation
  public SET_ITEMS(payload: IProductListState) {
    this.products = payload.products;
  }
}

export const ProductListModule = getModule(ProductList);
