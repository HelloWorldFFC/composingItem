<template>
	<view class="container">
		<!-- <view class="dot" :style="style_dot"></view> -->
		<view class="pulse" :style="style_pulse"></view>
	</view>
</template>

<script>
	export default {
		components: {

		},

		data() {
			return {
				dot_left:0,
				dot_top:0,
			}
		},
		props: {
			pulse_width: {
				type: Number,
				default: 0
			},
			pulse_height: {
				type: Number,
				default: 0
			},
			
			themeColor: {
				type: String,
				default: '',
			},
		},
		computed: {
			style_dot() {
				let that = this ;
				var pulse_width = parseInt(that.pulse_width);
				var pulse_height = parseInt(that.pulse_height);
				var dot_left = 0;
				var dot_top = 0;
				dot_left = pulse_width/2;
				dot_top = pulse_height/2;
				var style = '' ;
				if(dot_left>0){
					style = `left:${dot_left}rpx;`;
				}
				if(dot_top>0){
					style += `top: ${dot_top}rpx;`;
				}
				
				let themeColor = that.themeColor ;
				if(themeColor.length>0){
					style += `border: 4rpx solid ${themeColor}; `;
				}
				
				return style ;
			},
			style_pulse() {
				let that = this ;
				var pulse_width = parseInt(that.pulse_width);
				var pulse_height = parseInt(that.pulse_height);
				var style = '' ;
				if(pulse_width>0){
					style = `width:${pulse_width}rpx;`;
				}
				if(pulse_height>0){
					style += `height: ${pulse_height}rpx;`;
				}
				
				let themeColor = that.themeColor ;
				if(themeColor.length>0){
					style += `border: 4rpx solid ${themeColor}; `;
				}
				
				return style ;
			},
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@keyframes warn {
		0% {
			transform: scale(0);
			opacity: 0.0;
		}
		
		5% {
			transform: scale(0);
			opacity: 0.25;
		}
		
		10% {
			transform: scale(0);
			opacity: 0.05;
		}
		
		15% {
			transform: scale(0);
			opacity: 0.1;
		}
		
		25% {
			transform: scale(0);
			opacity: 0.15;
		}
		
		35% {
			transform: scale(0);
			opacity: 0.2;
		}
		
		50% {
			transform: scale(0.1);
			opacity: 0.3;
		}

		75% {
			transform: scale(0.4);
			opacity: 0.4;
		}
		
		80% {
			transform: scale(0.5);
			opacity: 0.5;
		}
		
		100% {
			transform: scale(1);
			opacity: 0.0;
		}
	}

	@-webkit-keyframes "warn" {
		0% {
			transform: scale(0);
			opacity: 0.0;
		}
		
		5% {
			transform: scale(0);
			opacity: 0.25;
		}
		
		10% {
			transform: scale(0);
			opacity: 0.05;
		}
		
		15% {
			transform: scale(0);
			opacity: 0.1;
		}
		
		25% {
			transform: scale(0);
			opacity: 0.15;
		}
		
		35% {
			transform: scale(0);
			opacity: 0.2;
		}
		
		50% {
			transform: scale(0.1);
			opacity: 0.3;
		}
		
		75% {
			transform: scale(0.4);
			opacity: 0.4;
		}
		
		80% {
			transform: scale(0.5);
			opacity: 0.5;
		}
		
		100% {
			transform: scale(1);
			opacity: 0.0;
		}
	}

	.container {
		position: relative;
		
	}

	/* 保持大小不变的小圆圈  */
	.dot {
		position: absolute;
		width: 1px;
		height: 1px;
		left: 50px;
		top: 50px;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border: 2px solid red;
		border-radius: 20px;
		z-index: 2;
	}

	/* 产生动画（向外扩散变大）的圆圈  */
	.pulse {
		position: absolute;
		width: 100px;
		height: 100px;
		left: 2px;
		top: 2px;
		border: 6px solid red;
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		border-radius: 30px;
		z-index: 1;
		opacity: 0;
		-webkit-animation: warn 3s ease-out;
		-moz-animation: warn 3s ease-out;
		animation: warn 3s ease-out;
		-webkit-animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
	}
</style>
