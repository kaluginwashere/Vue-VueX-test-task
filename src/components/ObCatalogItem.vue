<template>
  <div class="ObCatalogItem__wrapper">
    <div>
      <img :src="require('../assets/images/' + product_data.image)" alt="img" />
    </div>
    <div class="ObCatalogItem__CardBody">
      <h3 class="ObCatalogItem__name">{{ product_data.name }}</h3>
      <span class="ObCatalogItem__category">{{ product_data.category }}</span>
    </div>
    <b-row align-v="center" class="no-gutters ObCatalogItem__CardFooter">
      <b-col
        ><span class="ObCatalogItem__price">{{ product_data.price }} р.</span></b-col
      >
      <b-col
        ><b-button class="custom-btn ObCatalogItem__custom-btn" @click="addToCart"
          >Купить</b-button
        ></b-col
      >
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ObCatalogItem',
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ObCatalogItem {
  &__wrapper {
    border: 3px solid #000;
    padding: 25px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: stretch;
    min-height: 100%;
  }

  &__custom-btn {
    border: 3px solid #000;
    font-size: 30px;
    color: #000;
  }

  img {
    height: 300px;
    width: 200px;
  }

  &__name {
    margin-top: 30px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.07em;
    font-family: Raleway;
  }

  &__price {
    font-size: 30px;
    font-family: Raleway;
  }

  &__category {
    font-size: 18px;
    line-height: 27px;
    margin: 50px 0;
    display: block;
    font-family: Raleway;
  }

  &__CardBody {
    flex: 1 1 auto;
  }

  &__CardFooter {
    flex: 0 1 auto;
  }
}
</style>
