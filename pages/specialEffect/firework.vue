<template>
	<view >
		<firework :top_height='200'></firework>
		
		<firework :top_height='300'></firework>
		
		<firework :top_height='400'></firework>
		
	</view>
	
	
</template>

<script>
	import firework from '@/components/ay-firework/firework.vue';
	export default {
		components: {
			firework,
		},

		data() {
			return {
				
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
</style>
