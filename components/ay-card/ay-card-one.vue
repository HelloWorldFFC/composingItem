<template>
	<view>
		<view class="box" :style="{width:width + 'rpx'}">

			<view class="title" :style="{'background-image': 'radial-gradient(circle at ' +(width/2) + 'rpx -16rpx, #fff 40rpx, '+ themeColor + ' 42rpx)'}">
				{{title}}
				<span>{{subtitle}}</span>
				<p class="tips">{{tips}}</p>
			</view>

			<view class="desc">
				<scroll-view style="max-height: 200rpx;" scroll-y="auto">
					<text>{{desc}}</text>
				</scroll-view>
			</view>

			<view class="btn-box" @tap="btnEvent">
				<button :style="{'background-color':themeColor}">立即使用</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			state: {
				type: Number,
				default: 1, //1:可用  2:已用 3：过期 
			},
			width: {
				type: Number,
				default: 600
			},
			title: {
				type: String,
				default: '100元',
			},
			subtitle: {
				type: String,
				default: '优惠券',
			},
			tips: {
				type: String,
				default: '2020-12-31 18:18:18过期',
			},
			desc: {
				type: String,
				default: '1、商城、美食可用\n2、过期作废',
			},
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			btnEvent(e){
				this.$emit('btnEvent', e);
			},
		}
	}
</script>

<style lang="scss">
	.box {
		background-color: #E0E0E0;
		margin: 60upx auto;
		width: 600upx;
		/* css变量 */
		// --main-color: #EC407A;
		--f-color: #fff;

		.title {
			position: relative;
			height: 120px;
			// background-image: radial-gradient(circle at 150px -8px, #fff 20px, var(--main-color) 21px);
			color: #fff;
			font-size: 20px;
			text-align: center;
			padding-top: 40px;
		}

		.title .tips {
			color: var(--f-color);
			font-size: 14px;
			margin-top: 40upx;
		}

		.title span {
			font-size: 14px;
		}

		.title::after {
			position: absolute;
			content: '';
			display: block;
			bottom: -5px;
			width: 100%;
			border-bottom: 10px dotted #E0E0E0;
		}

		.desc {
			color: #333;
			padding: 20px;
			font-size: 14px;
		}
	}





	.btn-box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		padding-bottom: 20upx;
	}

	.btn-box button {
		/* 重置按钮样式 */
		border: none;
		box-shadow: none;
		outline: none;

		color: #fff;
		width: 50%;
		border-radius: 20px;
		line-height: 38px;
		font-size: 15px;
		cursor: pointer;
	}
</style>
