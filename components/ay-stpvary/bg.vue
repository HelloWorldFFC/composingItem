<template>
	<view>
		<view :style="style_box" :class="'t'+(type)"><slot /></view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number,
				default: 1, //1:  2: 3：4 
			},
			height: {
				type: Number,
				default: 200
			},
			width: {
				type: Number,
				default: 600
			},
			borderRadius: {
				type: Number,
				default: 10
			},
		},
		computed: {
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
				
				style += `border-radius:${that.borderRadius}rpx;`;
				
				return style;
			},
		},
		data() {
			return {
				
			};
		},
		methods: {}
	}
</script>

<style lang="scss">
	
	.t1 {
		position: relative;
		width: 600rpx;
		height: 200rpx;
		margin: 0rpx auto;
		border-radius: 10rpx;
		background: linear-gradient(90deg, #F0E68C 0%, #FF8C00 100%);
		animation: gC1 3s infinite;
	}

	@keyframes gC1 {
		100% {
			background: linear-gradient(90deg, #e91e1e 0%, #6f27b0 100%);
		}
	}

	.t2 {
		position: relative;
		width: 600rpx;
		height: 200rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
		background: #FFDEAD;
		animation: gC2 3s infinite alternate;
	}

	@keyframes gC2 {
		100% {
			background: #e91e1e;
		}
	}

	.t3 {
		position: relative;
		width: 600rpx;
		height: 200rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
		background: linear-gradient(90deg, #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
		background-size: 200% 100%;
		background-position: 0 0;
		animation: gC3 2s infinite linear alternate;
	}


	@keyframes gC3 {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: 100% 0;
		}
	}

	.t4 {
		position: relative;
		width: 600rpx;
		height: 200rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
		background: linear-gradient(90deg, #ffc700 0%, #e91e1e 33%, #6f27b0 66%, #00ff88 100%);
		background-position: 100% 0;
		animation: gC4 5s infinite ease-in-out alternate;

	}

	@keyframes gC4 {
		0% {
			background-size: 300% 100%;
		}

		100% {
			background-size: 100% 100%;
		}
	}


	.t5 {
		position: relative;
		overflow: hidden;
		width: 600rpx;
		height: 200rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;

		&::before {
			content: "";
			position: absolute;
			top: -100%;
			left: -100%;
			bottom: -100%;
			right: -100%;
			background: linear-gradient(45deg, #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
			background-size: 100% 100%;
			animation: gC5 8s infinite linear alternate;
			z-index: -1;
		}
	}


	@keyframes gC5 {
		0% {
			transform: translate(30%, 30%);
		}

		25% {
			transform: translate(30%, -30%);
		}

		50% {
			transform: translate(-30%, -30%);
		}

		75% {
			transform: translate(-30%, 30%);
		}

		100% {
			transform: translate(30%, 30%);
		}
	}
</style>
