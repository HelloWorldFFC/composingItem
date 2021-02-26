<template>
	<view>
		<view class="eyes">
			<view class="box" :style="style_box">
				<view class="box-item" :style="style_w_h" :class="'div'+(index+1)" v-for="(item,index) in list" :key="index">
					<image :style="style_w_h" lazy-load="true" :src="item.img">
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
			bg_img: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg'
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
				style += `background-image:url(${that.bg_img});`;

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
	.eyes {
		perspective: 1000upx;
	}

	.box {
		/*设置3D效果*/
		transform-style: preserve-3d;
		/*盒子的大小*/
		width: 200upx;
		height: 200upx;
		// background: #87CEFA;
		/*设置盒子的位置，便于观察*/
		margin: 200upx auto;
		/*复合方式设置动画 三者分别为：动画名 执行一次时间 执行方式*/
		animation: zhuan 3s ease;
		/*令动画无限执行下去*/
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	.box .box-item {
		width: 200upx;
		height: 200upx;
		opacity: 1;
		/*设置过渡*/
		transition: all 1s ease 0s;
		position: absolute;
		top: 0%;
		left: 0%;
	}

	// .box image{
	// 	width: 200upx;
	// 	height: 200upx;
	// }
	/*调整位置，制作成一个六边形*/
	.box .div1 {
		background: green;
		transform: translateZ(100upx);
	}

	.box .div2 {
		background: green;
		transform: translateZ(-100upx);
	}

	.box .div3 {
		background: green;
		transform: rotateX(90deg) translateZ(100upx);
	}

	.box .div4 {
		background: green;
		transform: rotateX(270deg) translateZ(100upx);
	}

	.box .div5 {
		background: green;
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.box .div6 {
		background: green;
		transform: rotateY(90deg) translateZ(100upx);
	}

	/*添加3D旋转效果 让其绕X、Y轴同时旋转90度*/
	@keyframes zhuan {
		from {
			transform: rotateX(0deg) rotateZ(0deg) rotateY(0deg);
		}

		to {
			transform: rotateX(360deg) rotateZ(360deg) rotateY(360deg);
		}
	}

	/*给正方体添加一个hover效果*/
	.box:hover .div1 {
		transform: translateZ(200upx);
	}

	.box:hover .div2 {
		transform: translateZ(-200upx);
	}

	.box:hover .div3 {
		transform: rotateX(90deg) translateZ(200upx);
	}

	.box:hover .div4 {
		transform: rotateX(270deg) translateZ(200upx);
	}

	.box:hover .div5 {
		transform: rotateY(-90deg) translateZ(200upx);
	}

	.box:hover .div6 {
		transform: rotateY(90deg) translateZ(200upx)
	}
</style>
