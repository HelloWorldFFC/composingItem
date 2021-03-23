<template>
	<view class="box" :style="style">
			<view v-if="isNav" class="NavBox">
				<view class="nav">
					
				</view>

			</view>
			<slot />

			

		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			
			themeColor: {
				type: String,
				default: '#ffffff',
			},
			themeImg: {
				type: String,
				default: '',
			},
			height:{
				type: Number,
				default: 500,
			},
			//是否要底部的弧形
			isNav: {
				type: [Boolean, String],
				default: false
			},
		},
		computed: {
			style() {
				let that = this ;
				var themeImg = that.themeImg;
				var style = '' ;
				style = `background-color:${that.themeColor};`;
				if(themeImg.length>0){
					style += `background-image:url(${themeImg});`;
				}
				style += `height:${that.height}rpx;`;
				
				return style ;
			},
		},
		methods: {
	
		}
	};
</script>

<style lang="scss">
	.box {
		position: relative;
		width: 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		
		.NavBox {
			position: absolute;
			bottom: 0upx;
			left: 0upx;
			width: 100%;
	
			.nav {
				background-color: #FFFFFF;
				border-top-left-radius: 20%;
				border-top-right-radius: 20%;
				height: 50px;
			}
	
		}
	}
</style>
