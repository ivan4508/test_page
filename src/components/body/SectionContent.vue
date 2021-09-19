<template lang='pug'>
h2.label.first
	i.icon_dot
	|
	span Преимущества
	i.icon_dot
.items.j-between
	app-item-benefits(v-for='item in listBenefits' v-bind='item')
h2.label.last
	i.icon_dot
	|Истории успеха
	i.icon_dot
.items.j-between.order(v-for='item in ListHistorySuccess')
	app-item-history-success(v-bind='item')
</template>
<script>
	import ItemBenefits from './ItemBenefits.vue';
	import ItemHistorySuccess from './ItemHistorySuccess.vue'
	export default{
		components:{
			'app-item-benefits':ItemBenefits,
			'app-item-history-success':ItemHistorySuccess
		},
		data:()=>({
			listBenefits:[
				{imgSrc:'organization.png',count:482,description:'Организаций поддержки по Российской Федерации'},
				{imgSrc:'services.png',count:5240,description:'Оказано услуг государственной поддержки'},
				{imgSrc:'participant.png',count:1360,description:'Зарегестрировано участников проекта'}
			],
			ListHistorySuccess:[
				{imgSrc:'russian_traditions.png', title:'Пекарня “Русские традиции”',subtitle:'Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».',description:'Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта. '},
				{imgSrc:'auto_repair_shop.png', title:'Автомастерская',subtitle:'Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.',description:'Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг. '},
				{imgSrc:'beauty_salon_emirate.png', title:'Салон красоты “Эмират”',subtitle:'Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.',description:''},
			]
		})
	}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
.label{
	.font(Circe,bold,40px,122.4%,#2B2B2B);
	text-align: center;
	&.first{
		margin-top:3px;
		transform:translateX(7px);
		margin-bottom: 97px;
		span{
			margin-left:16px;
			margin-right:16px;
		}
	}
	&.last{
		margin-top: 240px;
		margin-bottom: 89px;
	}
	.icon_dot{
		display: inline-block;
		transform:translateY(-5px);
	}
}
.order{
	&:nth-child(odd){
		flex-direction:row-reverse;
	}
}
.j-between{
	justify-content: space-between;
}
</style>