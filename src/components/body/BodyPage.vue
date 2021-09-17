<template lang='pug'>
.wrapp_label
	.wrapper
		.items
			.item.text-center
				app-section-label
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
.text-center{
	text-align: center;
}
.wrapp_label{
	margin-top: 3px;
	padding-top:63px;
	padding-bottom:136px;
	background-color: #F1F2F2;
	border-radius:0 0 100% 100%;
}
</style>
