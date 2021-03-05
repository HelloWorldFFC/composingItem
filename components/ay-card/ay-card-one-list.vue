<template>
	<view>
		<ayCardOne v-for="(item, index) in list" :key="index" 
		:state="item.state" 
		:width="item.width" 
		:title="item.title"
		:subtitle="item.subtitle"
		:tips="item.tips" 
		:desc="item.desc"
		:themeColor="item.themeColor">
			
		</ayCardOne>
	</view>
</template>

<script>
	import ayCardOne from './ay-card-one.vue';
	export default {
			components: {
				ayCardOne,
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
