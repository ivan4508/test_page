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

	background-color: #F1F2F2;
	&.first{
		margin-top: 3px;
		margin-bottom: 156px;
		padding-top:75px;
		padding-bottom:136px;
		border-radius:0 0 100% 100%;
	}
	&.last{
		border-radius:100% 100% 0 0;
		padding-top:48px;
		padding-bottom:72px;
	}
	.item{
		.size(12);
		text-align:center;
	}
}
</style>
