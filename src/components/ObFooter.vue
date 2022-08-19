<template>
  <div class="footer__wrapper">
    <b-container>
      <b-row class="align-items-sm-start align-items-md-center">
        <b-col>
          <b-row align-v="center">
            <b-col class="d-flex">
              <b-navbar-brand href="#" class="mr-auto">
                <router-link to="/"
                  ><img src="../assets/logo.png" alt="img" class="logo-img" /></router-link
              ></b-navbar-brand>
            </b-col>
            <b-col class="d-flex">
              <a href="tel:+30922040281" class="mr-auto">+30922040281</a>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-nav class="d-flex justify-content-md-between flex-column flex-md-row footer__links">
            <router-link to="/" class="text-right">Главная</router-link>
            <router-link to="/catalog" class="mr-auto">Каталог</router-link>
            <router-link to="/cart" class="mr-auto">Корзина</router-link>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ObNavbar',
  data() {
    return {
      showCollapse: false,
    };
  },
  watch: {
    $route() {
      // This will close the collapse if any part of the route changes
      // including query, params, hash, name, or path
      this.showCollapse = false;
    },
  },
};
</script>
<style scoped lang="scss">
.footer {
  &__wrapper {
    background: #1596c1;
    padding: 30px 0;
  }

  &__links {
    a {
      padding: 0 50px;
      @media (max-width: 768px) {
        padding: 0;
      }
      @media (max-width: 576px) {
        text-align: right;
        height: 50px;
      }
    }
  }
}

a {
  color: #fff;
  font-size: 24px;
  line-height: 27px;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.logo-img {
  @media (max-width: 576px) {
    padding: 20px 0;
  }
}
</style>
