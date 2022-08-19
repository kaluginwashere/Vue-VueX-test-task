<template>
  <div class="ObCatalogItem__wrapper">
    <div>
      <img :src="require('../assets/images/' + cart_item_data.image)" alt="img" />
    </div>
    <div class="ObCatalogItem__CardBody">
      <h3 class="ObCatalogItem__name">{{ cart_item_data.name }}</h3>
      <span class="ObCatalogItem__category">{{ cart_item_data.category }}</span>
    </div>
    <b-row align-v="center" class="no-gutters ObCatalogItem__CardFooter">
      <b-col
        ><span class="ObCatalogItem__price">{{ cart_item_data.price }} р.</span></b-col
      >
      <b-col><b-button class="custom-btn" @click="deleteFromCart">Удалить</b-button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ObCartItem',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ObCatalogItem__wrapper {
  border: 3px solid #000;
  padding: 25px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  min-height: 100%;
}

img {
  height: 300px;
  width: 200px;
}

.ObCatalogItem__name {
  margin-top: 30px;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.07em;
}
.custom-btn {
  border: 3px solid #000;
  font-size: 30px;
  color: #000;
}

.ObCatalogItem__price {
  font-size: 30px;
}

.ObCatalogItem__category {
  font-size: 18px;
  line-height: 27px;
  margin: 50px 0;
  display: block;
}

.ObCatalogItem__CardBody {
  flex: 1 1 auto;
}

.ObCatalogItem__CardFooter {
  flex: 0 1 auto;
}
</style>
