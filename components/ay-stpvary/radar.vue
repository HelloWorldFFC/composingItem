<template>
	<view >
		<view class="box" :class="'color-'+colorName" :style="style_w_h" ></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			colorName: {
				type: String,
				default: 'aqua'//aqua hotPink lime gold orangeRed 
			},
			height: {
				type: Number,
				default: 400
			},
			width: {
				type: Number,
				default: 400
			},
			
		
		},
		computed: {
			style_w_h() {
				let that = this;
				var height = parseInt(that.height);
				var width = parseInt(that.width);
				var style = '';
				if (height > 0) {
					style = `height:${height}rpx;max-height:${height}rpx;`;
				}
				if (width > 0) {
					style += `width:${width}rpx;max-width:${width}rpx;`;
				}
		
				return style;
			},
		},
		methods: {}
	}
</script>

<style lang="scss">
	//十六进制颜色码互换成RGB颜色值: https://www.sioe.cn/yingyong/yanse-rgb-16/
	
	
	.color-gold{
		background: -webkit-radial-gradient(center, rgba(255,215,0, 0.3) 0%, rgba(0, 0, 0, 0) 75%), -webkit-repeating-radial-gradient(rgba(0, 0, 0, 0) 5.8%, rgba(0, 0, 0, 0) 18%, #FFD700 18.6%, rgba(0, 0, 0, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 49.5%, #FFD700 50%, #FFD700 50%, rgba(0, 0, 0, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0) 49.5%, #FFD700 50%, #FFD700 50%, rgba(0, 0, 0, 0) 50.2%);
		border: 1upx solid #FFD700;//dashed solid
	}
	.color-gold:after {
		background-image: linear-gradient(44deg, rgba(0, 0, 0, 0) 50%, #FFD700 100%);
	}
	
	.color-orangeRed{
		background: -webkit-radial-gradient(center, rgba(255,69,0, 0.3) 0%, rgba(0, 0, 0, 0) 75%), -webkit-repeating-radial-gradient(rgba(0, 0, 0, 0) 5.8%, rgba(0, 0, 0, 0) 18%, #FF4500 18.6%, rgba(0, 0, 0, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 49.5%, #FF4500 50%, #FF4500 50%, rgba(0, 0, 0, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0) 49.5%, #FF4500 50%, #FF4500 50%, rgba(0, 0, 0, 0) 50.2%);
		border: 1upx solid #FF4500;//dashed solid
	}
	.color-orangeRed:after {
		background-image: linear-gradient(44deg, rgba(0, 0, 0, 0) 50%, #FF4500 100%);
	}
	
	.color-aqua{
		background: -webkit-radial-gradient(center, rgba(0, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 75%), -webkit-repeating-radial-gradient(rgba(0, 0, 0, 0) 5.8%, rgba(0, 0, 0, 0) 18%, #00FFFF 18.6%, rgba(0, 0, 0, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 49.5%, #00FFFF 50%, #00FFFF 50%, rgba(0, 0, 0, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0) 49.5%, #00FFFF 50%, #00FFFF 50%, rgba(0, 0, 0, 0) 50.2%);
		border: 1upx solid #00FFFF;//dashed solid
	}
	.color-aqua:after {
		background-image: linear-gradient(44deg, rgba(0, 0, 0, 0) 50%, #00FFFF 100%);
	}
	
	.color-hotPink{
		background: -webkit-radial-gradient(center, rgba(255,105,180, 0.3) 0%, rgba(0, 0, 0, 0) 75%), -webkit-repeating-radial-gradient(rgba(0, 0, 0, 0) 5.8%, rgba(0, 0, 0, 0) 18%, #FF69B4 18.6%, rgba(0, 0, 0, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 49.5%, #FF69B4 50%, #FF69B4 50%, rgba(0, 0, 0, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0) 49.5%, #FF69B4 50%, #FF69B4 50%, rgba(0, 0, 0, 0) 50.2%);
		border: 1upx solid #FF69B4;//dashed solid
	}
	.color-hotPink:after {
		background-image: linear-gradient(44deg, rgba(0, 0, 0, 0) 50%, #FF69B4 100%);
	}
	
	
	.color-lime{
		background: -webkit-radial-gradient(center, rgba(0,255,0, 0.3) 0%, rgba(0, 0, 0, 0) 75%), -webkit-repeating-radial-gradient(rgba(0, 0, 0, 0) 5.8%, rgba(0, 0, 0, 0) 18%, #00FF00 18.6%, rgba(0, 0, 0, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 49.5%, #00FF00 50%, #00FF00 50%, rgba(0, 0, 0, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0) 49.5%, #00FF00 50%, #00FF00 50%, rgba(0, 0, 0, 0) 50.2%);
		border: 1upx solid #00FF00;//dashed solid
	}
	.color-lime:after {
		background-image: linear-gradient(44deg, rgba(0, 0, 0, 0) 50%, #00FF00 100%);
	}
	
	
	
	.box {
		margin: 0upx auto;
		
		position: relative;
		top: 50%;
		border-radius: 50%;
		
		overflow: hidden;
	}

	.box:after {
		content: ' ';
		display: block;
		width: 50%;
		height: 50%;
		position: absolute;
		top: 0;
		left: 0;
		animation: rb 5s infinite;
		animation-timing-function: linear;
		transform-origin: bottom right;
		border-radius: 100% 0 0 0;
	}

	@keyframes rb {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
