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
@import '../../assets/css/smart-grid.less';
@import '../../assets/css/smart-grid-per.less';
.font(@family,@weight,@size,@line,@color){
	font-family: @family;
	font-weight: @weight;
	font-size: @size;
	line-height: @line;
	color: @color;
}
.item{
	&.first{
		.size(4)
	}
	&.last{
		.size(8);
	}
	.arrow{
		margin-left: 13px;
	}
	.title{
		.font(Circe,bold,24px,95.9%,#2B2B2B);
	}
	.subtitle{
		.font(Circe,bold,16px,122.4%,#FE5F5F);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.description{
		.font(Circe,normal,16px,115.4%,#000000);
	}
}
</style>