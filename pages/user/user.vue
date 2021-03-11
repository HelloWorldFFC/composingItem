<template>
	<view>
		<view class="user-box" style="">
			<view class="NavBox">
				<view class="nav">
					
				</view>
				
			</view>
			<view class="nav-box">
				<shortcutNav :list="shortcutNavList" :hengNumber="3" :backgroundColor="navbackgroundColor" @toDetailPage="toDetailPage_shortcut"></shortcutNav>
			</view>
		</view>
	</view>
</template>

<script>
	import shortcutNav from "@/components/ay-shortcutNav/shortcutNav.vue"
		export default {
			components: {
				shortcutNav,
	
			},
			data() {
				return {
					shortcutNavList:[{
					img: 'https://cdn.pixabay.com/photo/2016/11/23/17/56/decor-1854075__340.jpg',
					name: '动画',//立人
					key: '1',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/29/06/28/bay-1867798__340.jpg',
					name: '景区',//立德
					key: '2',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/bee-1850116__340.jpg',
					name: '跳跃',//立言
					key: '3',
				},],
					navbackgroundColor: '#fff',
				}
			},
	
			onLoad() {
				let that = this;
			},
			methods: {
				
			}
	
		}
	
</script>

<style lang="scss">
	.user-box{
		position: relative;
		width: 100%;
		height: 400upx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-image: url('https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg');
		.NavBox{
			position: absolute;
			bottom: 0upx;
			left: 0upx;
			width: 100%;
			.nav{
				background-color: #FFFFFF;
				    border-top-left-radius: 20%;
				    border-top-right-radius: 20%;
				    height: 50px;
			}
			
		}
		.nav-box{
			position: absolute;
			bottom: 0upx;
			left: 0upx;
			width: 100%;
			z-index: 2;
			width: 94%;
			margin: 0upx 20upx;
		}
	}
</style>
