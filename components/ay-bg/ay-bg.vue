<template>
	<view>
		<bg1 v-if="type==1">
			<slot />
		</bg1>
		<bg2 v-if="type==2">
			<slot />
		</bg2>
		<bg3 v-if="type==3">
			<slot />
		</bg3>
		<bg4 v-if="type==4">
			<slot />
		</bg4>
		<bg5 v-if="type==5">
			<slot />
		</bg5>
		<bg6 v-if="type==6">
			<slot />
		</bg6>
		<bg7 v-if="type==7">
			<slot />
		</bg7>
		
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
			type: {
				type: Number,
				default: 1, //1:
			},
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
