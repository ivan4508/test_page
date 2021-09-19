<template lang='pug'>
h4 Есть вопросы?
p Задайте интересующие вас вопросы
	br
	| онлайн помощнику
button.btn.danger
	i.icon_online_assistant
	| Онлайн помощник

</template>
<script>
	export default{

	}
</script>
<style lang='less' scoped>
@import '../../assets/css/styles.less';
h4{
	.font(Circe,bold,35px,52px,#000000);
}
p{
	.font(Circe,normal,16px,24px,#000000);
	margin-bottom: 29px;
}
button{
	display: inline-flex;
	align-items:center;
}
.icon_online_assistant{
	margin-right: 10px;
}
</style>
