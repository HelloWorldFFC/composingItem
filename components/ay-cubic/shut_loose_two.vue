<template>
	<view>
		<view class="box" :style="style_box">
			<view :class="index==0?'out_front':(index==1?'out_back':(index==2?'out_left':(index==3?'out_right':(index==4?'out_top':(index==5?'out_bottom':(index==6?'in_front in-box':(index==7?'in_back in-box':(index==8?'in_left in-box':(index==9?'in_right in-box':(index==10?'in_top in-box':'in_bottom in-box'))))))))))"
			 v-for="(item,index) in list" :key="index">
				<image lazy-load="true" :src="item.img" class="out_pic" :class="((index==0)||(index==1)||(index==2)||(index==3)||(index==4)||(index==5))?'out_pic':'in_pic'" :style="((index==0)||(index==1)||(index==2)||(index==3)||(index==4)||(index==5))?style_w_h:style_w_h_in">
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
				default: 200
			},
			height: {
				type: Number,
				default: 200
			},
			width: {
				type: Number,
				default: 200
			},
			height_in: {
				type: Number,
				default: 100
			},
			width_in: {
				type: Number,
				default: 100
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
			style_w_h_in() {
				let that = this;
				var height = parseInt(that.height_in);
				var width = parseInt(that.width_in);
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

</script>

<style lang="scss">
	.box {
		width: 200upx;
		height: 200upx;
		margin: 200upx auto;
		transform-style: preserve-3d;
		animation: rotate 20s infinite;
		animation-timing-function: linear;
	}

	.box view {
		position: absolute;
		transition: all .4s;
	}

	view .out_pic {
		width: 200upx;
		height: 200upx;
		opacity: 0.9;
	}

	view .in_pic {
		width: 100upx;
		height: 100upx;
	}

	.box .in-box {
		display: block;
		position: absolute;
		width: 100upx;
		height: 100upx;
		top: 50%;
		left: 50%;
	}

	@keyframes rotate {
		from {
			transform: rotateX(0deg) rotateY(0deg);
		}

		to {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}


	.out_front {
		transform: translateZ(100upx);
	}

	.out_back {
		transform: translateZ(-100upx);
	}

	.out_left {
		transform: rotateY(90deg) translateZ(100upx);
	}

	.out_right {
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.out_top {
		transform: rotateX(90deg) translateZ(100upx);
	}

	.out_bottom {
		transform: rotateX(-90deg) translateZ(100upx);
	}

	.in_front {
		transform: translateZ(50upx);
	}

	.in_back {
		transform: translateZ(-50upx);
	}

	.in_left {
		transform: rotateY(90deg) translateZ(50upx);
	}

	.in_right {
		transform: rotateY(-90deg) translateZ(50upx);
	}

	.in_top {
		transform: rotateX(90deg) translateZ(50upx);
	}

	.in_bottom {
		transform: rotateX(-90deg) translateZ(50upx);
	}

	/*外面的图片散开*/
	.box:hover .out_front {
		transform: translateZ(200upx);
	}

	.box:hover .out_back {
		transform: translateZ(-200upx);
	}

	.box:hover .out_left {
		transform: rotateY(90deg) translateZ(200upx);
	}

	.box:hover .out_right {
		transform: rotateY(-90deg) translateZ(200upx);
	}

	.box:hover .out_top {
		transform: rotateX(90deg) translateZ(200upx);
	}

	.box:hover .out_bottom {
		transform: rotateX(-90deg) translateZ(200upx);
	}


	/*里面的图片散开*/
	.box:hover .in_front {
		transform: translateZ(100upx);
	}

	.box:hover .in_back {
		transform: translateZ(-100upx);
	}

	.box:hover .in_left {
		transform: rotateY(90deg) translateZ(100upx);
	}

	.box:hover .in_right {
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.box:hover .in_top {
		transform: rotateX(90deg) translateZ(100upx);
	}

	.box:hover .in_bottom {
		transform: rotateX(-90deg) translateZ(100upx);
	}
</style>
