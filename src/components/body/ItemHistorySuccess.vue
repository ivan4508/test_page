<template lang='pug'>
.item.first
	img(:src='pathImg')
.item.last
	h4.title {{title}}
	p.subtitle
		i.icon_label
		| {{subtitle}}
	p.description {{description}}
	button.btn.info Читать историю
		i.arrow
</template>
<script>
	export default{
		props:{
			imgSrc:String,
			title:String,
			subtitle:String,
			description:String
		},
		computed:{
			pathImg:(el)=>require('@/assets/img/historySuccess/'+el.imgSrc)
		}
	}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
.item{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	&.first{
		padding-top:15px;
		max-width:300px;
		margin:28px auto auto auto;
	}
	&.last{
		max-width:620px;
		margin:12px auto auto -93px;
	}
	.arrow{
		margin-left: 13px;
	}
	.title{
		.font(Circe,bold,24px,95.9%,#2B2B2B);
		margin-top: 56px;
		margin-bottom: 22px;
		.md-block({
			margin-top: 25px;
			});
	}
	.subtitle{
		.font(Circe,bold,16px,122.4%,#FE5F5F);
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}
	.description{
		.font(Circe,normal,16px,115.4%,#000000);
		margin-bottom: 17px;
	}
	.icon_label{
		display: inline-block;
		width: 46px;
		height: 32px;

	}
	.btn.info{
		.font(Circe,normal,14px,122.4%,#FFFFFF);
	}
}
</style>