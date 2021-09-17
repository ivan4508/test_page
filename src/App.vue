<template lang='pug'>
app-header
app-body-page
app-footer
</template>
<script>
import Header from '@/components/header/Header.vue';
import BodyPage from '@/components/body/BodyPage.vue';
import Footer from '@/components/footer/Footer.vue';
export default {
  name: 'App',
  components: {
    'app-header':Header,
    'app-body-page':BodyPage,
    'app-footer':Footer
  }
}
</script>
<style lang="less">

</style>
