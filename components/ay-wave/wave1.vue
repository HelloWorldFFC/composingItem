<template>
	<view class="animate wave" :style="style_size">
		<view class="w1" :style="style_color"></view>
		<view class="w2" :style="style_color"></view>
		<view class="w3" :style="style_color"></view>
		<view class="w4" :style="style_color"></view>
	</view>
</template>

<script>
	export default {
		components: {
	
		},
	
		data() {
			return {
				
			}
		},
		props: {
			width: {
				type: Number,
				default: 0
			},
			height: {
				type: Number,
				default: 0
			},
			
			themeColor: {
				type: String,
				default: '',
			},
		},
		computed: {
			style_color() {
				let that = this ;
				
				let style = '' ;
				let themeColor = that.themeColor ;
				if(themeColor.length>0){
					style = `border: 2rpx solid ${themeColor}; `;
				}
				
				return style ;
			},
			style_size() {
				let that = this ;
				
				let style = '' ;
				
				let width = that.width ;
				if(width>0){
					style = `width:${width}rpx;`;
				}
				let height = that.height ;
				if(height>0){
					style += `height: ${height}rpx;`;
				}
				
				return style ;
			},
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	// @-webkit-keyframes
	@keyframes opac {
		from {
			opacity: 1;
			width: 0;
			height: 0;
			top: 50%;
			left: 50%;
		}

		to {
			opacity: 0;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}

	.animate .w2 {
		-webkit-animation-delay: 1s;
	}

	.animate .w3 {
		-webkit-animation-delay: 2s;
	}

	.animate .w4 {
		-webkit-animation-delay: 3s;
	}

	.wave {
		width: 270upx;
		height: 270upx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.wave * {
		border: 1px solid #fff;
		position: absolute;
		border-radius: 50%;
		-webkit-animation: opac 4s infinite;
	}
</style>
