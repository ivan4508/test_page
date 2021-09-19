<template lang='pug'>
h4 Для начала работы ответьте на вопрос, есть ли у вас уже существующий бизнес?
.btn-group
	button(type='button').btn.danger Да, у меня уже есть бизнес
	button(type='button').btn.info Нет, но планирую открыть
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
h4{
	.font(Circe,bold,30px,117.4%,#2B2B2B);
	max-width: 552px;
	margin:auto auto 39px auto;
	transform: translateX(11px);
}
.btn-group{
	:first-child{
		margin-right: 27px;
	}
	.btn{
		width: 33%;
		height: 54px;
		.font(Circe,normal,22px,122.4%,#FFFFFF);
		&.danger{
			margin-left: 24px;
		}
		&.info{
			width: 36%;
		}
	}
}
</style>