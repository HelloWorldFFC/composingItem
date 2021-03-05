<template>
	<view>
		<ayCardTwo v-for="(item, index) in list" :key="index" 
		:state="item.state" 
		:width="item.width" 
		:title="item.title"
		:subtitle="item.subtitle"
		:tips="item.tips" 
		:desc="item.desc"
		:themeColor="item.themeColor">
			
		</ayCardTwo>
	</view>
</template>

<script>
	import ayCardTwo from './ay-card-two.vue';
	export default {
			components: {
				ayCardTwo,
			},
			props: {
				state: {
					type: Number,
					default: 1, //1:可用  2:已用 3：过期 
				},
				list: {
					type: Array,
					default () {
						return []
					}
				},
				
				
			},
			computed: {
	
	
			},
	
			watch: {
	
			},
			data() {
				return {
	
				};
			},
	
			methods: {
				
				btnEvent(e){
					this.$emit('btnEvent', e);
				},
			},
		}
	
</script>

<style>
</style>
