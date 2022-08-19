<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="main-page">
    <section class="hero-block__wrapper">
      <b-container>
        <b-row>
          <b-col cols="12" md="9">
            <div class="hero-block__info">
              <h1 class="hero-block__title title">Книги, которые вознесут вас на Олимп</h1>
              <b-button class="d-flex justify-content-start custom-btn">Узнать больше</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="shop-block__wrapper">
      <b-container>
        <b-row>
          <h2 class="title shop-block__title">Горячие новинки</h2>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col class="col-lg-12 col-xs-12"
            ><carousel
              :per-page="3"
              :scrollPerPage="true"
              :navigationEnabled="true"
              :perPageCustom="[
                [320, 1],
                [768, 1],
                [1024, 3],
              ]"
              id="custom-carousel"
            >
              <slide v-for="product in PRODUCTS" :key="product.article">
                <ObCatalogItem :product_data="product" @addToCart="addToCart" />
              </slide> </carousel
          ></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="about-us__wrapper">
      <b-container class="about-us">
        <b-row class="custom-padding">
          <b-col cols="12" sm="6" class="about-us__image-block_image order-2 order-md-1"></b-col>
          <b-col cols="12" sm="6" class="about-us__image-block order-1 order-md-2">
            <h3 class="about-us__title title">О нас</h3>
            <p>
              Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто
              магазин, а настоящий клуб любителей книги, который объединяет в своем культурном
              пространстве людей самых разных интересов.
            </p></b-col
          >
        </b-row>
        <b-row class="custom-padding">
          <b-col cols="12" sm="6" class="about-us__image-block"
            ><h3 class="about-us__title title">Гармония</h3>
            <p>
              Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете.
              Каждую неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы
              узнаете много нового о книгах и писателях.
            </p></b-col
          >
          <b-col cols="12" sm="6" class="about-us__image-block_image"></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="subscribe__wrapper">
      <b-container class="subscribe">
        <b-row>
          <b-col>
            <h2 class="subscribe__title title">Хотите знать о книгах всё?</h2>
            <p class="subscribe__subtitle">Подпишитесь на нашу новостную рассылку</p>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="12" class="col-md-10">
            <div>
              <b-form>
                <b-row>
                  <b-col cols="12" class="col-md-8 mb-2"
                    ><b-form-input id="inline-form-input-name" placeholder=""></b-form-input
                  ></b-col>
                  <b-col cols="12" class="col-md-4 p-md-0"
                    ><b-button class="custom-btn subscribe__custom-btn">Отправить</b-button></b-col
                  >
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

// eslint-disable-next-line object-curly-newline
import { Carousel, Slide } from 'vue-carousel';
import { mapActions, mapGetters } from 'vuex';
import ObCatalogItem from '../components/ObCatalogItem.vue';

export default {
  name: 'homeView',
  components: {
    ObCatalogItem,
    Carousel,
    Slide,
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
<style lang="scss">
.main-page {
  margin-top: -87px;
}
.hero-block {
  &__title {
    font-size: 80px;
    line-height: 120px;
    color: #fff;
    text-align: left;
    margin-bottom: 105px;
    margin-top: 180px;
    @media (max-width: 768px) {
      font-size: 64px;
      line-height: 96px;
    }
    @media (max-width: 576px) {
      font-size: 40px;
      line-height: 60px;
    }
  }
  &__wrapper {
    background-image: url('~@/assets/hero-bg.jpg');
    background-size: cover;
    @media (max-width: 768px) {
      background-position: 60%;
    }
  }
  &__info {
    margin-bottom: 260px;
  }
}
.shop-block {
  &__title {
    font-size: 64px;
    line-height: 96px;
    color: #000;
    margin-bottom: 70px;
    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 72px;
      margin-bottom: 40px;
    }
    @media (max-width: 576px) {
      font-size: 30px;
      line-height: 45px;
    }
  }
  &__wrapper {
    padding-top: 140px;
    @media (max-width: 768px) {
      padding-top: 90px;
    }
  }
}

.about-us {
  &__wrapper {
    padding-top: 140px;
    @media (max-width: 768px) {
      padding-top: 90px;
    }
    @media (max-width: 576px) {
      padding-top: 160px;
    }
  }
  &__image-block {
    background: #1596c1;
    color: #fff;
    height: 590px;
    padding: 50px 110px 60px;
    @media (max-width: 768px) {
      padding: 80px 40px 60px;
      height: 550px;
    }
    @media (max-width: 576px) {
      padding: 30px 25px;
      height: 500px;
    }
  }
  &__title {
    font-size: 64px;
    line-height: 96px;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 72px;
    }
    @media (max-width: 576px) {
      margin-bottom: 50px;
      font-size: 30px;
    }
  }

  p {
    color: #fff;
    font-size: 24px;
    line-height: 36px;
    font-family: Raleway;
    letter-spacing: 0.07em;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
  &__image-block_image {
    &:nth-of-type(1) {
      background-image: url('~@/assets/about1.jpg');

      object-fit: cover;
    }
    &:nth-of-type(2) {
      background-image: url('~@/assets/about2.jpg');

      object-fit: cover;
    }
    @media (max-width: 768px) {
      height: 550px;
      background-position: center;
    }

    @media (max-width: 576px) {
      padding: 30px 25px;
      height: 500px;
    }
  }
  .custom-padding {
    padding: 0 12px;
  }
}
.subscribe {
  &__wrapper {
    margin-top: 140px;
    margin-bottom: 140px;
  }
  &__title {
    font-size: 42px;
    line-height: 54px;
    color: #000;
    @media (max-width: 576px) {
      font-size: 30px;
      line-height: 45px;
    }
  }
  &__subtitle {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.07em;
    font-family: Raleway;
    margin-bottom: 60px;
    @media (max-width: 576px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
  &__custom-btn {
    border: 3px solid #000;
    color: #000;
    height: 60px;
    font-size: 30px;
    width: 100%;
    @media (max-width: 576px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
}
#inline-form-input-name {
  border: 3px solid #000000;
  border-radius: 0;
  height: 60px;
}
#custom-carousel {
  .VueCarousel-navigation {
    position: relative;
    top: 60px;
    width: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {
      top: 50%;
      width: 100%;
      position: absolute;
    }
    @media (max-width: 576px) {
      top: 50px;
      width: 50%;
      position: relative;
    }
  }
  .VueCarousel-navigation-prev {
    background-image: url('~@/assets/prev-arrow.svg');
    height: 50px;
    width: 14px;
    font-size: 0;
    background-repeat: no-repeat;
  }
  .VueCarousel-navigation-next {
    background-image: url('~@/assets/next-arrow.svg');
    height: 50px;
    width: 14px;
    font-size: 0;
    background-repeat: no-repeat;
  }

  .VueCarousel-dot {
    width: 30px !important;
    height: 30px !important;
    border: 1px solid #000;
    padding: 0 !important;
    margin: 0 55px;
    background-color: #fff !important;
    &--active {
      background: #000 !important;
    }
  }

  .VueCarousel-dot-container {
    margin-top: 30px !important;
  }

  @media (max-width: 768px) {
    .VueCarousel-pagination {
      display: none;
    }
  }
}
</style>
