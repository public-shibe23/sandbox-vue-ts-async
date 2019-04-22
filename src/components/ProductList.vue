<template>
  <div>
    <div class="field">
      <button class="button is-primary is-outlined" @click="totalPrice">Search</button>
    </div>
    <table class="table is-fullwidth" v-if="products.length">
      <tr>
        <th>
          <abbr title="ID">ID</abbr>
        </th>
        <th>
          <abbr title="Name">Name</abbr>
        </th>
        <th>
          <abbr title="Stock">Stock</abbr>
        </th>
        <th>
          <abbr title="Price">Price</abbr>
        </th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.stock }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IProductListState, IProductState } from '@/store/ProductList'

@Component
export default class ProductList extends Vue {
  @Prop() private products!: IProductListState;

  totalPrice(){
    let total: number = 0
    console.log( this.products )
    // for (let i in this.products){
    //   total += product
    // }
    return total
  }

  fetch(): void {
    this.$emit("fetch");
  }
}
</script>
