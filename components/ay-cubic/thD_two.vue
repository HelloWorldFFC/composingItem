<template>
	<view>
		<view class="box" :style="style_box">
			<view class="box-item">
				<view v-for="(item,index) in list" :key="index" :style="style_w_h_t">
					<image :style="style_w_h"  lazy-load="true" :src="item.img">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {


		components: {

		},
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			margin_t_b: {
				type: Number,
				default: 4
			},
			height: {
				type: Number,
				default: 140
			},
			width: {
				type: Number,
				default: 210
			},
			height_t: {
				type: Number,
				default: 200
			},
			width_t: {
				type: Number,
				default: 220
			},

		},
		computed: {
			style_w_h() {
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
			style_w_h_t() {
				let that = this;
				var height = parseInt(that.height_t);
				var width = parseInt(that.width_t);
				var style = '';
				if (height > 0) {
					style = `height:${height}rpx;`;
				}
				if (width > 0) {
					style += `width:${width}rpx;`;
				}
			
				return style;
			},
			style_box() {
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
				style += `margin:${that.margin_t_b}% auto;`;
				
				// #ifdef MP-WEIXIN
				// style += `margin-left:${-that.width}rpx;`;
				// #endif
				
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

		},
		methods: {


		},
	}
</script>

<style lang="scss">
	.box {
		margin: 4% auto;
		width: 210upx;
		height: 140upx;
		position: relative;
		perspective: 1000upx;
	}

	.box-item {
		width: 100%;
		height: 100%;
		position: absolute;
		transform-style: preserve-3d;
		animation: rotation 20s infinite linear;
	}

	.box-item:hover {
		animation-play-state: paused;
	}

	.box-item view {
		display: block;
		position: absolute;
		width: 220upx;
		height: 200upx;
		left: 10upx;
		top: 10upx;
		background: black;
		overflow: hidden;
		border: solid 5upx black;
	}

	.box-item image {
		filter: grayscale(0);
		cursor: pointer;
		transition: all 0.3s ease 0s;
		width: 100%;
		height: 100%;
	}

	.box-item image:hover {
		filter: grayscale(1);
		transform: scale(1.2, 1.2);
	}

	.box-item view:nth-child(1) {
		transform: rotateY(0deg) translateZ(288upx);
	}

	.box-item view:nth-child(2) {
		transform: rotateY(60deg) translateZ(288upx);
	}

	.box-item view:nth-child(3) {
		transform: rotateY(120deg) translateZ(288upx);
	}

	.box-item view:nth-child(4) {
		transform: rotateY(180deg) translateZ(288upx);
	}

	.box-item view:nth-child(5) {
		transform: rotateY(240deg) translateZ(288upx);
	}

	.box-item view:nth-child(6) {
		transform: rotateY(300deg) translateZ(288upx);
	}

	@keyframes rotation {
		from {
			transform: rotateY(0deg);
		}

		to {
			transform: rotateY(360deg);
		}
	}
</style>
