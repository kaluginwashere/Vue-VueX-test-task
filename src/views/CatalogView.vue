<template>
  <div class="catalog-page">
    <section>
      <b-container
        ><b-row
          ><h1 class="title catalog-page__title">Каталог</h1>
          <b-row>
            <b-col cols="4" class="mb-4" v-for="product in PRODUCTS" :key="product.article">
              <ObCatalogItem :product_data="product" @addToCart="addToCart" />
            </b-col>
          </b-row>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ObCatalogItem from '../components/ObCatalogItem.vue';

export default {
  name: 'catalogView',
  components: {
    ObCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>
<style scoped lang="scss">
.catalog-page {
  padding-top: 140px;
  &__title {
    font-size: 64px;
    line-height: 96px;
    color: #000;
    margin-bottom: 70px;
  }
}
</style>
