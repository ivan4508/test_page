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
@import './assets/css/smart-grid.less';
@import './assets/css/smart-grid-per.less';
.reset();
.wrapper{
  .wrapper();
  .items{
    .row-flex();
    .item{
      .col();
    }
  }
}

.btn{
  padding: 11px 22px;
  border-radius:50px;
  border:none;
  cursor: pointer;
  &.danger{
    background-color: #FE5F5F;
    color:#fff;
  }
  &.info{
    background-color: #3865A7;
    color:#fff;
  }
}
</style>
