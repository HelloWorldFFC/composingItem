<template>
	<view>
		<view class="user-box" >
			<aybgimg :isNav="true" themeImg="https://cdn.pixabay.com/photo/2020/04/11/14/42/street-5030692__340.jpg">
				<view class="nav-box">
					<shortcutNav :list="shortcutNavList" :hengNumber="3" :backgroundColor="navbackgroundColor" @toDetailPage="toDetailPage_shortcut"></shortcutNav>
				</view>
			</aybgimg>
			
		</view>
		<view style="margin-top: 26upx;">
			<hengItem :list="tipList" @toDetailPage="toDetailPage_tip"></hengItem>
		</view>
	</view>
</template>

<script>
	import aybgimg from '@/components/ay-bg/ay-bg-img.vue';
	import hengItem from '@/components/ay-hengItem/hengItem.vue';
	import shortcutNav from "@/components/ay-shortcutNav/shortcutNav.vue"
	export default {
		components: {
			shortcutNav,
			hengItem,
			aybgimg,
		},
		data() {
			return {
				shortcutNavList: [{
						img: 'https://cdn.pixabay.com/photo/2016/11/23/17/56/decor-1854075__340.jpg',
						name: '动画', //立人
						key: '1',
					},
					{
						img: 'https://cdn.pixabay.com/photo/2016/11/29/06/28/bay-1867798__340.jpg',
						name: '景区', //立德
						key: '2',
					},
					{
						img: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/bee-1850116__340.jpg',
						name: '跳跃', //立言
						key: '3',
					},
				],
				navbackgroundColor: '#fff',
				tipList: [{
							img: 'https://cdn.pixabay.com/photo/2021/01/01/19/33/marshmallows-5879707__340.jpg',
							name: '版本记录',
							toPageUrl: '/pages/user/colophon'
						},
						{
							img: 'https://cdn.pixabay.com/photo/2020/12/20/10/53/apple-5846664__340.jpg',
							name: '生成二维码',
							toPageUrl: '/pagesShow/qrcode/qrcode'
						},
						
						{
							img: 'https://cdn.pixabay.com/photo/2021/01/01/14/07/chapel-5878656__340.jpg',
							name: '客服',
							isKefu: true,
						},
				
						{
							img: 'https://cdn.pixabay.com/photo/2015/05/15/14/38/telephone-booth-768610__340.jpg',
							name: '说明',
							toPageUrl: '/pages/user/aboutUs'
						},
				
				
					],
				
			}
		},

		onLoad() {
			let that = this;
		},
		methods: {
			toDetailPage_tip(e) {
				let that = this;
				let list = e.list;
			
				let item = e.item;
			
				if (item.toPageUrl) {
					uni.navigateTo({
						url: item.toPageUrl
					})
					return;
				}
				// #ifdef MP-WEIXIN
				if (item.isKefu) {
					return;
				}
				// #endif
				let list_img = [];
				list.forEach(item => {
					list_img.push(item.img)
				});
				let idx = e.curIndex;
				if (list_img && list_img.length > 0) {
					uni.previewImage({
						current: list_img[idx],
						urls: list_img,
						indicator: "number",
						loop: true,
					});
				}
			},
		}

	}
</script>

<style lang="scss">
	.user-box {
	
		.nav-box {
			position: absolute;
			bottom: 0upx;
			left: 0upx;
			width: 100%;
			z-index: 2;
			width: 100%;
			margin: 0upx auto;
			padding: 0upx 40upx;
		}
	}
</style>
