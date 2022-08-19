<template>
  <div class="cart-page">
    <section>
      <b-container
        ><b-row>
          <h1 class="title cart-page__title">Корзина</h1>
          <p v-if="!CART.length && BUY.length > 0" class="cart-page__subtitle">
            Спасибо за покупки
          </p>
          <p v-if="!CART.length && !BUY.length" class="cart-page__subtitle">
            Ваша корзина пуста...
          </p>
          <b-row>
            <b-col cols="4" v-for="(item, index) in CART" :key="item.article">
              <ObCartItem :cart_item_data="item" @deleteFromCart="deleteFromCart(index)" />
            </b-col>
          </b-row>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              v-if="CART.length > 0"
              @click="payCart"
              class="cart-page__custom-btn custom-btn mt-5"
              >Купить</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section v-if="BUY.length">
      <b-container>
        <b-row>
          <b-col>
            <h2>Ваши покупки</h2>
            <div v-for="item in BUY" :key="item.article" class="d-flex justify-content-center">
              <h3>{{ item.name }} {{ item.price }} Р</h3>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ObCartItem from '../components/ObCartItem.vue';

export default {
  name: 'cartView',
  components: {
    ObCartItem,
  },
  computed: {
    ...mapGetters(['CART', 'BUY']),
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'GET_BUY']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    payCart() {
      this.GET_BUY(this.CART);
    },
  },
};
</script>
<style scoped lang="scss">
.cart-page {
  min-height: 100vh;
  padding-bottom: 140px;
  padding-top: 140px;
  &__title {
    font-size: 64px;
    line-height: 96px;
    color: #000;
  }

  &__subtitle {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.07em;
    font-family: Raleway;
  }

  &__custom-btn {
    color: #000;
    border-color: #000;
  }
}
</style>
