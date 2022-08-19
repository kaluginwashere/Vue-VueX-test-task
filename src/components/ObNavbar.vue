<template>
  <b-navbar toggleable
    ><b-container>
      <b-navbar-brand href="#">
        <router-link to="/"><img src="../assets/logo.png" alt="img" class="logo-img" /></router-link
      ></b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse" collapse>
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <!-- Right elements -->
      <div class="d-flex navbar__bag-wrapper">
        <!-- Icon -->
        <router-link to="/cart"><div class="navbar__bag"></div></router-link>
        <!-- Right elements -->
      </div>
      <b-collapse id="navbar-toggle-collapse" v-model="showCollapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav vertical>
            <router-link to="/">Главная</router-link>
            <router-link to="/catalog">Каталог</router-link>
            <router-link to="/cart">Корзина</router-link>
          </b-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
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
.navbar {
  position: relative;
  width: 100%;
  background-color: #1596c1;
}

.logo-img {
  @media (max-width: 576px) {
    width: 90px;
  }
}

.navbar-toggler {
  position: relative;
  width: 64px;
  height: 30px;
  background-image: url('~@/assets/w-arrow-menu.svg');
  background-repeat: no-repeat;
  border: none;
  z-index: 1;
  @media (max-width: 576px) {
    width: 40px;
    height: 12px;
    background-size: contain;
  }
}
.navbar-toggler.not-collapsed {
  background-image: url('~@/assets/arrow-menu.svg');
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-brand {
  margin: 0;
}

#navbar-toggle-collapse {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-210px);
  @media (max-width: 768px) {
    transform: translateX(-170px);
  }
  .navbar-toggler-icon {
    display: none;
  }
}

.navbar-nav {
  background: #fff;
  width: 420px;
  margin: 0 auto;
  padding: 120px 0;
  @media (max-width: 768px) {
    padding: 70px 0;
    width: 340px;
  }
  @media (max-width: 576px) {
    padding: 70px 0;
    width: 320px;
  }
}

.navbar-nav a {
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 56px;
  color: #000;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 48px;
  }
}

.navbar__bag {
  width: 54px;
  height: 64px;
  background-image: url('~@/assets/bag.svg');
  background-repeat: no-repeat;
  @media (max-width: 576px) {
    width: 34px;
    height: 40px;
    background-size: contain;
  }
}

.navbar__bag-wrapper {
  width: 178px;
  justify-content: flex-end;
  @media (max-width: 576px) {
    width: 90px;
  }
}
</style>
