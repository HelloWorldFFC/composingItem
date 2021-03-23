<template>
	<view>
		<view v-if="list.length>0" class="box-list-subnav" :style="style">
			<view class="title1">{{list[0]}}</view>
			<view class="moreBox-subnav" v-if="list.length>1">
				<view class="title2" @tap="toDetailPage">{{list[1]}}</view>
				<view class="iconfont icon-xiangyou"></view>
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
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			isRadius: {
				type: Boolean,
				default: true,
			},
		},
		computed: {
			style() {
				let that = this;

				var style = '';

				if (that.isRadius) {
					style += `border-top-left-radius: 22rpx;border-top-right-radius: 22rpx;`;
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

		methods: {

			//详情页
			toDetailPage(item) {
				this.$emit('toDetailPage', item);
			},

		}
	}
</script>

<style lang="scss">
	.box-list-subnav {
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 20upx;

		.moreBox-subnav {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.title2 {
				color: #a8a8aa;
				font-size: 24upx;
			}

			.icon-xiangyou {
				color: #a8a8aa;
				font-size: 24upx;
				padding-top: 6upx;
			}
		}

		.title1 {
			font-size: 34upx;
			font-weight: bold;
		}


	}
</style>
