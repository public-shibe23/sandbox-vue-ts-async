<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-6">
        <ProductList :products="products" @fetch="fetchProducts"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductList from "@/components/ProductList.vue"; // @ is an alias to /src
import {ProductListModule} from '@/store/ProductList'

@Component({
  components: {
    ProductList
  }
})
export default class Home extends Vue {
  get products(){
    return ProductListModule.products
  }

  fetchProducts(): void {
    ProductListModule.FETCH_PRODUCTS();
  }
}
</script>
