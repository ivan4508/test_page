<template lang='pug'>
.wrapp_label
	.wrapper
		.items
			.item
				app-section-label
.wrapper
	app-section-content
</template>
<script>
	import SectionLabel from './SectionLabel.vue';
	import SectionContent from './SectionContent.vue'
	export default {
		components:{
			'app-section-label':SectionLabel,
			'app-section-content':SectionContent
		}

	}
</script>
<style lang='less' scoped>
@import '../../assets/css/smart-grid.less';
@import '../../assets/css/smart-grid-per.less';
.wrapp_label{
	margin-top: 3px;
	padding-top:63px;
	padding-bottom:136px;
	margin-bottom: 156px;
	background-color: #F1F2F2;
	border-radius:0 0 100% 100%;
	.item{
		.size(12);
		text-align:center;
	}
}
</style>
