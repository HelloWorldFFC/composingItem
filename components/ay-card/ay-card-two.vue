<template>
	<view>
		<view class="box" :style="[{'background-image': 'radial-gradient(circle at 2rpx 16rpx, transparent 12rpx, '+ themeColor+' 12rpx, '+ themeColor+' 0rpx),radial-gradient(circle at 398rpx 16rpx, transparent 12rpx, '+ themeColor+' 12rpx, '+ themeColor+' 0rpx)'}]">{{title}}</view>
	
	</view>
</template>

<script>
	export default {
		props: {
			state: {
				type: Number,
				default: 1, //1:可用  2:已用 3：过期 
			},
			
			title: {
				type: String,
				default: '100元',
			},
			
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			btnEvent(e){
				this.$emit('btnEvent', e);
			},
		}
	}
</script>

<style lang="scss">
	.box {
		position: relative;
		height: 320upx;
		margin: 100upx 20upx;
		// background-image:
		// 	radial-gradient(circle at 2upx 16upx, transparent 12upx, #ff9e6d 12upx, #ff9e6d 0upx),
		// 	radial-gradient(circle at 398upx 16upx, transparent 12upx, #ff9e6d 12upx, #ff9e6d 0upx);
		background-size: 400upx 36upx;
		background-position: 0 0, 400upx 0;
		background-repeat-x: no-repeat;
		font-size: 120upx;
		color: #fff;
		font-weight: bold;
		line-height: 320upx;
		padding-left: 80upx;
		box-sizing: border-box;
		cursor: pointer;
	}
	
	.box::before {
		position: absolute;
		content: "";
		left: 480upx;
		top: 0;
		bottom: 0;
		width: 0;
		border-left: 2upx dashed #fff;
	}
	
	.box::after {
		position: absolute;
		content: "立即领取";
		font-size: 52upx;
		width: 140upx;
		top: 50%;
		// right: 1%;
		left: 86%;
		transform: translate(-50%, -50%);
		line-height: 80upx;
		letter-spacing: 10upx;
	}
	
</style>
