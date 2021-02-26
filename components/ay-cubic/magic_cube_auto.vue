<template>
	<view>

		<view class="box" :style="style_box">
			<view class="box-item" :style="style_w_h" :class="'dv'+(index+1)" v-for="(item,index) in 6" :key="index">
				<label :style="style_box_item" v-for="(item2,index2) in 9" :key="index2">
					{{index2+1}}
				</label>
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
		
			w_h: {
				type: Number,
				default: 300
			},
			margin_t_b: {
				type: Number,
				default: 150
			},
			w_h_item: {
				type: Number,
				default: 90
			},
			margin_item: {
				type: Number,
				default: 5
			},
			borderRadius: {
				type: Number,
				default: 20
			},
		},
		computed: {
			style_w_h() {
				let that = this;
				var w_h = parseInt(that.w_h);
				var style = '';
				if (w_h > 0) {
					style = `height:${w_h}rpx;`;
					style += `width:${w_h}rpx;`;
				}
				
				return style;
			},
			style_box() {
				let that = this;
				var w_h = parseInt(that.w_h);
				var style = '';
				if (w_h > 0) {
					style = `height:${w_h}rpx;`;
					style += `width:${w_h}rpx;`;
				}
				style += `margin:${that.margin_t_b}rpx auto;`;
				return style;
			},
			style_box_item() {
				let that = this;
				var w_h = parseInt(that.w_h_item);
				var style = '';
				if (w_h > 0) {
					style = `height:${w_h}rpx;`;
					style += `width:${w_h}rpx;line-height:${w_h}rpx;`;
				}
				style += `margin:${that.margin_item}rpx;`;
				
				style += `border-radius:${that.borderRadius}rpx;;`;
				
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
		width: 300upx;
		height: 300upx;
		margin: 150upx auto;
		position: relative;
		font-size: 50upx;
		transform-style: preserve-3d;
		/*动画效果*/
		animation: rotate 10s linear infinite;
	}
	.box-item{
		width: 300upx;
		height: 300upx;
		position: absolute;
	}
	

	label {
		float: left;
		width: 90upx;
		height: 90upx;
		margin: 5upx;
		border-radius: 20upx;
		line-height: 90upx;
		text-align: center;
	}

	.dv1 label {
		background-color: orange;
		transform: skewZ(60deg);
	}

	.dv1 {
		background-color: transparent;
		transform: rotateY(90deg) translateZ(150upx);
	}

	.dv2 {
		background-color: transparent;
		transform: rotateY(-90deg) translateZ(150upx);
	}

	.dv3 {
		background-color: transparent;
		transform: rotateX(90deg) translateZ(150upx);
	}

	.dv4 {
		background-color: transparent;
		transform: rotateX(-90deg) translateZ(150upx);
	}

	.dv5 {
		background-color: transparent;
		transform: translateZ(150upx);
	}

	.dv6 {
		background-color: transparent;
		transform: translateZ(-150upx);
	}

	.dv2 label {
		background-color: green;
	}

	.dv3 label {
		background-color: greenyellow;
	}

	.dv4 label {
		background-color: palevioletred;
	}

	.dv5 label {
		background-color: pink;
	}

	.dv6 label {
		background-color: yellow;
	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg) rotateX(0deg);
		}

		100% {
			transform: rotateY(135deg) rotateX(45deg);
		}
	}
</style>
