<template lang='pug'>
.wrapper_inner
	a(href="#")
		img.logo(src='../../assets/img/logo.png')
	h1 Мой бизнес - цифровая платформа для тех, кто хочет открыть и развивать свой бизнес
</template>
<style lang='less' scoped>
@import '../../assets/css/styles.less';
.wrapper_inner{
	display: flex;
	flex-direction: column;
	align-items:flex-start;
	padding-top:58px;
	padding-left: 23px;
	h1{
		.font(Circe,bold,35px,111.4%,#2B2B2B);
		max-width: 576px;
	}
	.logo{
		margin-bottom: 63px;
	}
}
</style>