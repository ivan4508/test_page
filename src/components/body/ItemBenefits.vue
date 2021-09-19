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
	.size(3);
	display: flex;
	flex-direction: column;
	align-items:center;
	img{
		margin:auto;
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