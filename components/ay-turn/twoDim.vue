<template>
	<view style="position: relative;">
		<view class='box' :style="style">
			<!--正面-->
			<view class="box-ct pros" :style="style" :animation="animationMain" @click='rotateFn(1)'>
				<image :style="style" lazy-load="true" :src="pros_img"></image>
			</view>
			<!--反面-->
			<view class="box-ct cons" :style="style" :animation="animationBack" @click='rotateFn(2)'>
				<image :style="style" lazy-load="true" :src="cons_img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pros_img: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2021/02/01/18/50/drop-5971598__340.jpg',
			},
			cons_img: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2019/08/28/08/41/cute-4436103__340.jpg',
			},
			height: {
				type: Number,
				default: 150
			},
			width: {
				type: Number,
				default: 150
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

		},

		watch: {

		},
		data() {
			return {
				animationMain: null, //正
				animationBack: null, //反
			};
		},

		methods: {
			//详情页
			toDetailPage(item) {
				let that = this;
				let list = that.list;
				let index = item.index;
				let data = {
					curIndex: index,
					item: list[index],
					list: list
				};
				this.$emit('toDetailPage', data);
			},

			onImageError(item, index) {
				//虽触发，但不会显示默认的图片				
				this.error = null; //这个暂没有发现作用

				let obj = {
					index: index,
					list: this.list
				};
				this.$emit('Error', obj);
			},
			rotateFn(e) {
				this.animation_main = uni.createAnimation({
					duration: 400,
					timingFunction: 'linear'
				})
				this.animation_back = uni.createAnimation({
					duration: 400,
					timingFunction: 'linear'
				})
				// 点击正面
				if (e == 1) {
					this.animation_main.rotateY(180).step()
					this.animation_back.rotateY(0).step()
					this.animationMain = this.animation_main.export()
					this.animationBack = this.animation_back.export()
				} else {
					this.animation_main.rotateY(0).step()
					this.animation_back.rotateY(-180).step()
					this.animationMain = this.animation_main.export()
					this.animationBack = this.animation_back.export()
				}
			},

		}
	}
</script>

<style lang="scss">
	.box {
		position: absolute;
		top: 18%;
		left: 50%;

		transform: translate(-50%, -50%);
		-webkit-perspective: 1000;
		-moz-perspective: 1000;
	}

	.box-ct {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;

		transition: all 1s;
		backface-visibility: hidden;
		cursor: pointer;
		border-radius: 10rpx;


		text {
			text-align: center;
			font-size: 30rpx;
		}
	}

	.pros {}

	.cons {

		transform: rotateY(-180deg);
	}
</style>
