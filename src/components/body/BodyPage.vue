<template lang='pug'>
.wrapp_bg.first
	.wrapper
		.items
			.item
				app-section-label
.wrapper
	app-section-content
.wrapp_bg.last
	.wrapper
		.items
			.item
				app-section-footer
</template>
<script>
	import SectionLabel from './SectionLabel.vue';
	import SectionContent from './SectionContent.vue';
	import SectionFooter from './SectionFooter.vue';
	export default {
		components:{
			'app-section-label':SectionLabel,
			'app-section-content':SectionContent,
			'app-section-footer':SectionFooter
		}
	}
</script>
<style lang='less' scoped>
@import '../../assets/css/styles.less';
.wrapp_bg{
	&.first{
		position: relative;
		margin-bottom: 156px;
		padding-top:40px;
		padding-bottom:136px;
		.md-block({
			margin-bottom:70px;
			});
		&:after{
			content:'';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: #f1f2f2 url('../../assets/img/bg.png') no-repeat;
			background-size: contain;
			z-index: -1;
			transform:rotate(180deg);
		}
	}
	&.last{
		border-radius:100%;
		padding-top:48px;
		padding-bottom:72px;
		position: relative;
		&:after{
			content:'';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: #f1f2f2 url('../../assets/img/bg.png') no-repeat;
			background-size:contain;
			z-index: -1;
		}
		.md-block({
			padding-top:30px;
			padding-bottom:25px;
			});
	}
	.item{
		.size(12);
		text-align:center;
	}
}
</style>
