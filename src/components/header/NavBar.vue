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
.font(@family,@weight,@size,@line,@color){
	font-family: @family;
	font-weight: @weight;
	font-size: @size;
	line-height: @line;
	color: @color;
}
.d-flex{
	display: flex;
	justify-content: space-between;
}
.cabinet{
	.font(Circe,normal,16px,24px,#FFFFFF);
	text-decoration: none;
}
.link{
	text-decoration: none;
	margin:auto auto auto 27px;
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
	.font(Circe,bold,16px,122.4%,#FE5F5F);
}
.icon_online_assistant{
	margin:5px 14px auto auto;
}
</style>
