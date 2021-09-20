<template lang='pug'>
.item
	img(:src='pathImg')
	p.count {{count}}
	p.description {{description}}
</template>
<script>

export default{
	data:()=>({
	}),
	props:{
		count:Number,
		description:String,
		imgSrc:String
	},
	computed:{
		pathImg:(el)=>require('@/assets/img/benefits/'+el.imgSrc)
	}
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
.item{
	display: flex;
	flex-direction: column;
	align-items:center;
	flex-basis: 25%;
	.md-block({
		flex-basis:100%;
		margin-bottom:15px;
		});
	img{
		margin:auto;
	}
	&:nth-child(2){
		flex-basis:24%;
		margin-left:20px;
		margin-right:20px;
		.md-block({
			flex-basis:100%;
			});
	}
	.count{
		.font(Circe,bold,50px,122.4%,#3865A7);
	}
	.description{
		.font(Circe,bold,20px,122.4%,#000000);
		text-align:center;
	}
}

</style>