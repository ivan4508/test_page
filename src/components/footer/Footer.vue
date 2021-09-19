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
<style lang='less' scoped>
@import '../../assets/css/styles.less';
footer{
	background: #2F2F2F;
	padding-top:29px;
	padding-bottom: 32px;
	.sm-block({
		padding-top:30px;
		padding-bottom: 15px;
		});
	.items{
		justify-content: space-between;
		.lg-block({
			justify-content:center;
			})
	}
	.link{
		.font(Circe,bold,16px,24px,#FFFFFF);
		text-decoration:none;
	}
	ul{
		display: flex;
		.lg-block({
			margin-bottom:15px;
			});
		.sm-block({
			flex-direction:column;
			flex-grow:1;
			flex-basis:100%;
			text-align:center;
			});
		li{
			.sm-block({
				margin-bottom: 15px;
			});
		}
		.link{
			letter-spacing: 0.01em;
			margin-right: 45px;
			.sm-block({
				margin-right: 0;
				});
		}
	}
	address{
		.sm-block({
			display: block;
			width: 100%;
		});
		.link{
			margin-right: 38px;
			.sm-block({
				display: block;
				width: 100%;
				text-align:center;
				margin-bottom: 15px;
			});
		}
	}
}

</style>
