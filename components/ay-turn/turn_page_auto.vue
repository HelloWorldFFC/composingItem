<template>
	<view>
		<view class="box" :style="{'margin-left': (width/3)*2+ 'rpx' }">
			<view class="box-ct" :style="style">
				<view :style="{border: '1px solid '+ themeColor }" class="page bk-ct">结束</view>
				<view class="page bk-c" v-for="(item,index) in list" :key="index"  :style="[{border: '1px solid '+ themeColor  },{'animation-duration' :(list.length+index)+'s'},{'animation-delay' : (list.length-index)+'s'}]">
					<view class="txt-box">
						<view>{{item.txt}}</view>
					</view>

					<view class="btm-box">
						<view class="btm-box2">

							<view class="btn-bk-l">{{item.size}}</view>
						</view>

					</view>
				</view>
				<view class="page bk-cover" :style="style_cover">
					<view class="txt-box">
						<view class="tit">{{cover.txt}}</view>
						<image v-if="cover.img" :style="style_img" lazy-load="true" @error="onImageError(cover)" :src="cover.img" />
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			cover: {
				type: Object,
				default () {
					return {
						img: 'https://cdn.pixabay.com/photo/2021/01/25/11/54/woman-5948133__340.jpg',
						txt: '名人名言',
					}
				}
			},
			height: {
				type: Number,
				default: 400
			},
			width: {
				type: Number,
				default: 300
			},

			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		computed: {
			style() {
				let that = this;
				var height = parseInt(that.height);
				var width = parseInt(that.width);
				var style = '';
				if (height > 0) {
					style = `height:${height}rpx;`;
				}
				if (width > 0) {
					style += `width:${width}rpx;`;
				}

				return style;
			},
			style_cover() {
				let that = this;
				var style = '';

				style += `background-color:${that.themeColor};`;
				style += `border : 1px solid ${that.themeColor};`;
				let leg = that.list.length;
				let time = leg * 2;

				style += `animation-duration : ${time}s;animation-delay : 0s;`;

				return style;
			},
			style_img() {
				let that = this;
				var width = parseInt(that.width);
				var style = '';
				if (width > 0) {
					let width_img = width / 3;
					style += `height:${width_img}rpx;width:${width_img}rpx;`;
				}

				return style;
			},
		},

		watch: {

		},
		data() {
			return {

			};
		},
		created: function() {
			let that = this;
		},
		methods: {
			
			onImageError(item, index) {
				//虽触发，但不会显示默认的图片				
				this.error = null; //这个暂没有发现作用

				let obj = {
					index: index,
					list: this.list
				};
				this.$emit('Error', obj);
			},

		}
	}
</script>

<style lang="scss">
	.txt-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 20upx;

		.tit {
			font-size: 40upx;
			font-weight: bold;
			padding-bottom: 20upx;
		}
	}

	.txt-box image {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
	}

	.btm-box {
		position: fixed;
		left: 0;
		bottom: 10upx;
		width: 100%;

		.btm-box2 {
			padding: 30upx 40upx;
			text-align: center;
		}

		.btm-bk-l {
			width: 100%;
			margin: 20upx auto;
			padding: 20upx;
			font-size: 40upx;
		}
	}


	.box {

		transform-style: preserve-3d;
	}

	.box-ct {

		position: relative;
		margin: 0 auto;
		transform: rotateX(30deg);
		transform-style: preserve-3d;
	}

	.page {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		transform-origin: left;

	}

	.bk-cover {
		font-size: 30px;
		color: #ffffff;

		animation-timing-function: ease;
		animation-iteration-count: 2;
		animation-direction: alternate;
		animation-fill-mode: none;
		animation-play-state: running;
		animation-name: roll;
	}

	.bk-ct {
		font-size: 30px;
		background-color: #fff;
		color: #33363C;

	}

	.bk-c {
		background-color: #fff;
		color: #33363C;

		// animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;
		// alternate:动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放

		//animation: name duration timing-function delay iteration-count direction fill-mode play-state;
		//animation: roll 3s ease 3s 2 alternate;
		// animation-duration: 3s;
		// animation-delay: 3s;

		animation-timing-function: ease;
		animation-iteration-count: 2;
		animation-direction: alternate;
		animation-fill-mode: none;
		animation-play-state: running;
		animation-name: roll;

	}

	@keyframes roll {
		from {
			transform: rotateY(0)
		}

		to {
			transform: rotateY(-180deg)
		}
	}
</style>
