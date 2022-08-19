const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
});
