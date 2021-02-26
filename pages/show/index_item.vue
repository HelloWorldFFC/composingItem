<template>
	<view>
		<tiled :list="list" :hengNumber="3" @toDetailPage="toPage" backgroundColor="#87CEEB" nameColor="#fff" img_last="lg"></tiled>
		
	</view>
	
</template>

<script>
	import tiled from '@/components/ay-shortcutNav/tiled.vue';
	import menu from '@/js/show.js';
	export default {
		components:{
			tiled,
		},
		data() {
			return {
				list : [],
				isLoaded : false ,
			}
		},
		onLoad(options) {
			let that = this;
			
			let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			//console.log(JSON.stringify(data))
			//console.log(data)
			if (data) {
				that.setDate_init(data);
			}
			
			
			//that.loadData();
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			setDate_init(data) {
				let that = this;
				uni.setNavigationBarTitle({
					title: data.name
				})
			
				that.type = data.type;
				that.list = data.item;
				console.log(that.list )
			},
			async loadData() {
				let that = this;
			
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
			
				let res_home = await menu.res_home;
				//console.log(res_home)
				let data = res_home.data;
			
				
				uni.hideLoading();
			
				that.isLoaded = true;
				
			},
			toPage(e) {
				console.log(e)
				let item = e.item ;
				
				console.log("组件：", item.type)
				
				uni.navigateTo({
					url: `/pages/show/show` + `?data=${encodeURIComponent(JSON.stringify(item))}`,
				})
				
			},
		},
	}
</script>

<style  lang="scss">
	
</style>
