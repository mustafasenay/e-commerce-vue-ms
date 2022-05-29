<template>
  <div id="app">
    <app-header-page></app-header-page>
    <router-link to="/"></router-link>
    <router-view/>
    <app-footer-page></app-footer-page>
  </div>
</template>

<script>
import headerPage from "./shared/headerPage.vue"
import footerPage from "./shared/footerPage.vue"
export default {
  components : {
    appHeaderPage : headerPage,
    appFooterPage : footerPage,
  }
}
</script>

<style>

</style>
