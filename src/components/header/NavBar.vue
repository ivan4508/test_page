<template lang='pug'>
nav.d-flex
	a.btn.danger.cabinet(href='#') Личный кабинет
	a.link(href='#') Каталог услуг
	button.online_assistant
		i.icon_online_assistant
		| Онлайн помощник
</template>
<script>
	export default {
	}
</script>
<style lang='less' scoped>
@import '../../assets/css/styles.less';
.d-flex{
	display: flex;
	justify-content: space-between;
	align-items:flex-start;
}
.btn.danger{
padding:8px 28px;
}
nav{
	padding-left: 23px;
	.icon_online_assistant{
		background-color: #FE5F5F;
		padding:8px 13px;
		border-radius:100%;
		&:after{
			transform:translate(1px,2px);
			display: inline-block;
		}
	}
	.sm-block({
		flex-direction:column;
	});
}

.cabinet{
	.font(Circe,normal,16px,24px,#FFFFFF);
	text-decoration: none;
	.sm-block({
		margin:auto;
		margin-bottom:20px;
		});
}
.link{
	text-decoration: none;
	margin:7px auto auto 27px;
	.sm-block({
		margin:auto;
		margin-bottom:20px;
		});
}
.link,
.online_assistant{
	.font(Circe,bold,16px,24px,#000000);
}
.online_assistant{
	background-color: transparent;
	cursor: pointer;
	border:none;
	display: flex;
	align-items:center;
	margin:-12px 0 auto auto;
	.font(Circe,bold,16px,122.4%,#FE5F5F);
	.sm-block({
		margin:auto;
		margin-bottom:20px;
		order:-1;
		});
}
.icon_online_assistant{
	margin:5px 14px auto auto;
}
</style>
