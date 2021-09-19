<template lang='pug'>
footer
	.wrapper
		.items
			ul
				li(v-for='list in listFooter')
					a.link(href='#') {{list}}
			address
				a.link(href='mailto:service@in-line.ru') service@in-line.ru
				a.link(href='tel:88002007430') 8-800-200-74-30
</template>
<script>
	export default {
		data:()=>({
			listFooter:['Услуги  и поддержка','Сервисы для бизнеса','Общая информация ','Защита бизнеса']
		})
	}
</script>
<style lang='less'>
@import '../../assets/css/styles.less';
footer{
	background: #2F2F2F;
	.link{
		.font(Circe,bold,16px,24px,#FFFFFF);
		text-decoration:none;
	}
	ul{
		display: flex;
		.link{
			letter-spacing: 0.01em;
		}
	}
}

</style>
