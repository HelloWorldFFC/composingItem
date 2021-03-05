<template>
	<view>
		<view v-for="(item, index) in list" :key="index">
			<bg1 v-if="item.type==1" :title="item.title" :themeColor="item.themeColor">
				<slot />
			</bg1>
			<bg2 v-if="item.type==2" :title="item.title" :themeColor="item.themeColor">
				<slot />
			</bg2>
			<bg3 v-if="item.type==3" :title="item.title">
				<slot />
			</bg3>
			<bg4 v-if="item.type==4" :title="item.title" >
				<slot />
			</bg4>
			<bg5 v-if="item.type==5" :title="item.title">
				<slot />
			</bg5>
			<bg6 v-if="item.type==6" :title="item.title" >
				<slot />
			</bg6>
			<bg7 v-if="item.type==7" :title="item.title">
				<slot />
			</bg7>
		</view>
		
		
	</view>
</template>

<script>
	import bg1 from './ay-bg1.vue';
	import bg2 from './ay-bg2.vue';
	import bg3 from './ay-bg3.vue';
	import bg4 from './ay-bg4.vue';
	import bg5 from './ay-bg5.vue';
	import bg6 from './ay-bg6.vue';
	import bg7 from './ay-bg7.vue';
	export default {
		components: {
			bg1,
			bg2,
			bg3,
			bg4,
			bg5,
			bg6,
			bg7,
		},
		props: {
			
			list: {
				type: Array,
				default () {
					return []
				}
			},
			
		},
		
		data() {
			return {
				
			};
		},
		
		methods: {

		}
	};
</script>

<style lang="scss">
	
</style>
