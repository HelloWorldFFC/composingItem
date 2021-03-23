<!-- https://www.jb51.net/article/201866.htm -->
<template>
	<!-- @touchmove="hd_th_start" @touchend="hd_th_end" -->
	<view v-show="show"   class="box" :style="style" :class="show_th?'show':'hide'">

		<view class="cf-closeBox">
			<view class="iconfont icon-guanbi3" @tap="close" :style="{color: themeColor}"></view>
		</view>

		<image @tap="toDetailPage" lazy-load="true" class="help-img" :src="img"></image>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				show_th : true ,
			};
		},
		computed: {
			style() {
				let that = this;
				var style = '';
				style = `bottom:${that.bottom}rpx;`;

				style += `right:${that.right}rpx;`;

				return style;
			},
		},
		props: {
			//是否显示
			show: {
				type: Boolean,
				default: true
			},
			img: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',
			},
			themeColor: {
				type: String,
				default: '#969698',
			},
			bottom: {
				type: Number,
				default: 180
			},
			right: {
				type: Number,
				default: 0
			},
		},
		watch: {
			show(e){
				this.show_th = e ;
			},
		},
		methods: {
			hd_th_start() {
				this.show_th = false ;
			},
			hd_th_end() {
				this.show_th = true ;
				
			},
			//点击事件
			toDetailPage() {
				var that = this;
				let data = {};
				this.$emit('toDetailPage', data);
			},
			close() {
				let data = {};
				this.$emit('close', data);
			},

		}
	}
</script>

<style lang="scss">
	.cf-closeBox {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		font-size: 40upx;
	}

	

	.icon-guanbi3 {
		font-size: 40upx;
	}

	.box {
		position: fixed;
		bottom: 180upx;
		// right: 20upx;
		padding-top: 4upx;
		padding-left: 10upx;
		z-index: 997;
		
		&.show {
			animation: showLayer 0.2s linear both;
		}
		
		&.hide {
			animation: hideLayer 0.2s linear both;
		}
		
		@keyframes showLayer {
			0% {
				transform: translateX(40upx);
			}
		
			100% {
				transform: translateX(0%); //这里可以通过变大变小调整偏移量
			}
		}
		
		@keyframes hideLayer {
			0% {
				transform: translateX(0%);
			}
		
			100% {
				transform: translateX(180upx);
			}
		}
		
		.help-img {
			// position: absolute;
			// top: 0;
			// left: 0;
			// bottom: 0;
			// right: 0;
			height: 80upx;
			width: 80upx;
			margin: auto;
			// border-radius: 50%;
		}
	}
</style>
