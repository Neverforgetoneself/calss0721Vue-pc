<template>
  <div id="app">
    <Header />
   <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Heade";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
