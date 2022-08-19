<template>
  <div id="app">
    <ObNavbar />
    <keep-alive><router-view /></keep-alive>
    <ObFooter />
  </div>
</template>
<script>
import ObNavbar from './components/ObNavbar.vue';
import ObFooter from './components/ObFooter.vue';

export default {
  components: {
    ObNavbar,
    ObFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Forum, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #fff;
  letter-spacing: 0.07em;
}

.custom-btn {
  background: transparent;
  font-size: 42px;
  border-radius: 0;
  border: 3px solid #fff;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
  &:focus {
    border: 3px solid #000;
    color: #000;
    background: #fff;
    box-shadow: none;
  }
  &:hover {
    border: 3px solid #000;
    color: #000;
    background: #fff;
  }
  &:active {
    border: 3px solid #000;
    color: #000;
    background: #fff;
  }
}

.title {
  color: #fff;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}
</style>
