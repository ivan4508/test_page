<template lang='pug'>
header
	.wrapper
		app-nav-bar
		app-content-header
</template>
<script>
	import NavBar from './NavBar.vue';
	import ContentHeader from './ContentHeader.vue';
	export default {
		components:{
			'app-nav-bar':NavBar,
			'app-content-header':ContentHeader
		}
	}
</script>
<style lang='less'>
header{
	padding:35px;
	height: 779px;
	background:#ffffff url(../../assets/img/header_bg.png) no-repeat;
	background-size:100% 100%;
}
</style>
