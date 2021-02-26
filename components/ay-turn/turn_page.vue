<template>
	<view>
		<view class='box' :style="style">
			<view class='box_item' v-for="(item,index) in list_dyc" :key="index" @touchstart='touchstart' @touchend="touchend"
			 :animation="index === 0 ? animationData : ''">

				<view class="txt-box">
					<view :class="item.size==''?'tit':''">{{item.txt}}</view>
					<image v-if="item.img" :style="style_img" lazy-load="true" @error="onImageError(item)" :src="item.img" />
				</view>

				<view class="btm-box">
					<view class="btm-box2">

						<view class="btn-bk-l">{{item.size}}</view>
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

			height: {
				type: Number,
				default: 0
			},
			width: {
				type: Number,
				default: 0
			},

			themeColor: {
				type: String,
				default: '#FFFFFF',
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
			list(e) {
				let that = this;
				that.list_dyc = e;
			},
		},
		data() {
			return {
				nowPgae: 1,
				startX: 0,
				slider: false,
				animationData: {},
				list_dyc: [],
			};
		},
		created: function() {
			this.list_dyc = this.list;
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
			touchstart(e) {
				this.startX = e.changedTouches[0].clientX
			},
			touchend(e) {
				let that = this;
				let startX = this.startX;
				let endX = e.changedTouches[0].clientX;
				if (this.slider) return;
				// 下一页(左滑距离大于30)
				if (startX - endX > 30) {
					this.slider = true
					//尾页(当前页 等于 总页数)
					if (this.nowPgae == this.list_dyc.length) {
						this.slider = false
						uni.showToast({
							title: '已经是最后一张了',
							icon: 'none'
						});
						return;
					};
					//创建动画   5s将位置移动到-150%,-150%
					let animation = uni.createAnimation({
						duration: 500,
					});
					animation.translateX('-150%').translateY('-150%').rotate(60).step();
					this.animationData = animation.export()
					// 移动完成后
					setTimeout(function() {
						var list_dyc = that.list_dyc;
						var slidethis = that.list_dyc.shift(); //删除数组第一项
						that.list_dyc.push(slidethis); //将第一项放到末尾
						//创建动画   将位置归位
						let animation = uni.createAnimation({
							duration: 0,
						});
						animation.translateX('-53%').translateY('-50%').rotate(0).step();
						that.list_dyc = that.list_dyc;
						that.animationData = animation.export();
						that.slider = false;
						that.nowPgae = that.nowPgae + 1;

					}, 500)
				}
				// 上一页
				if (endX - startX > 30) {
					this.slider = true
					//首页
					if (this.nowPgae == 1) {
						this.slider = false
						uni.showToast({
							title: '已经到第一张了',
							icon: 'none'
						})
						return;
					};
					//创建动画  移动到-150%,-150%
					let animation = uni.createAnimation({
						duration: 0,
					});
					animation.translateX('-150%').translateY('-150%').rotate(100).step();
					var list_dyc = that.list_dyc;
					var slidethis = that.list_dyc.pop(); //删除数组末尾项
					that.list_dyc.unshift(slidethis); //将删除的末尾项放到第一项
					that.animationData = animation.export()
					that.list_dyc = that.list_dyc
					setTimeout(function() {
						//创建动画   5s将位置移动到原位
						let animation2 = uni.createAnimation({
							duration: 500,
							// timingFunction: 'cubic-bezier(.8,.1,.2,0.8)',
						});
						animation2.translateX('-53%').translateY('-50%').rotate(0).step();
						that.animationData = animation2.export()
						that.slider = false
						that.nowPgae = that.nowPgae - 1

					}, 50)
				}
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

		.tit {
			font-size: 40upx;
			font-weight: bold;
			padding-bottom: 20upx;
		}
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

	.txt-box image {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
	}

	.box {
		position: relative;
		width: 400upx;
		height: 700upx;
	}

	.box .box_item {
		position: absolute;
		width: 70%;
		height: 60%;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		padding: 20rpx;
		background: #fff;
		border: 1rpx solid #eee;
		border-radius: 20rpx;
		box-shadow: 1px 1px 0px 0px rgba(0, 0, 5, 1);
	}

	.box_item:nth-child(1) {
		z-index: 4;
		transform: translateX(-53%) translateY(-50%);
	}

	.box_item:nth-child(2) {
		z-index: 3;
		transform: translateX(-53%) translateY(-50%);
	}

	.box_item:nth-child(3) {
		z-index: 2;
		transform: translateX(-50%) translateY(-51%);
	}

	.card_item:nth-child(4) {
		z-index: 1;
		transform: translateX(-47%) translateY(-52%);
	}

	// .box_item:last-child {
	// 	z-index: 1;
	// 	transform: translateX(-53%) translateY(-50%);
	// }

	// .box_item:nth-last-child(2) {
	// 	z-index: 2;
	// 	transform: translateX(-53%) translateY(-50%);
	// }
</style>
