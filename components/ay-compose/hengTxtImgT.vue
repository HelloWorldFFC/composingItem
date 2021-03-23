<template>
	<view>
		<view class="list-comp-htit" >
			<view v-for="(item,index) in list" :key="index" class="item-comp-htit" @click="toDetailPage({index: index,id:item.id})">

				<view class="g-item" style="position: relative;">
					<view class="">
						<view class="vTitleBox">{{item.subtitle}}</view>
						<view class="vDirectionBox">
							<view class="iconfont icon" :class="item.directOne1.length>0  ? item.directOne1: ''"></view>
							<view class="vDContentBox">{{item.directOne2}}</view>
						</view>
						<view class="vDirectionBox">
							<view class="directTwo">
								<view class="iconfont icon" :class="item.directTwo1.length>0  ? item.directTwo1: '' "></view>
							</view>
							<view>{{item.directTwo2}}</view>
						</view>
						<view class="vDirectionBox" style="font-size:20upx;">
							<view class="vvDirectionBox">
								<view class="vvvDirectionBox" :style="{color: themeColor }">
									<view>{{item.directTh1}}</view>
									<view style="font-size:36upx" v-if="item.directTh2">{{item.directTh2}}</view>
								</view>

								<view style="margin-left:34upx;color:gray;text-decoration: line-through;" v-if="item.directTh3">{{item.directTh3}}</view>

							</view>

						</view>

					</view>
				</view>

				<view class="imageBox">
					<image lazy-load="true" :src="item.img" @error="onImageError(item,index)" mode="aspectFill"></image>
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
			themeColor: {
				type: String,
				default: '#33CCCC',
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
				let that = this ;
				let list = that.list ;
				let index = item.index ;
				let data = {
					curIndex: index,
					item : list[index] ,
					list: list
				};
				this.$emit('toDetailPage', data);
			},

			onImageError(item, index) {
				//虽触发，但不会显示默认的图片				
				this.error = null; //这个暂没有发现作用

				let obj = {
					index: index,
					list: this.List
				};
				this.$emit('Error', obj);
			},

		}
	}
</script>

<style lang="scss">
	/* 列表 */
	.list-comp-htit {
		// flex-wrap:wrap;
		// margin-bottom: 100upx;
		flex-direction: column;
		padding: 0 20upx;
		background: #fff;

		.item-comp-htit {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding-bottom: 16upx;
			padding-top: 16upx;
			border-bottom: 4upx solid #f9f9f9;

			.imageBox {
				width: 40%;
				height: 190upx;
				margin-top: 16upx;
				// border-radius: 3px;
				//overflow: hidden;

				image {
					width: 100%;
					height: 190upx;
					// border-radius: 6upx;
					opacity: 1;
				}
			}

			.g-item {
				width: 60%;
				padding-left: 20upx;
			}


			.vTitleBox {
				font-family: PingFang SC;
				color: #383838;
				font-size: 30upx;
				font-weight: bold;
				// overflow: hidden;
				// white-space: nowrap;
				// text-overflow: ellipsis
			}

			.vDirectionBox {
				width: 100%;
				margin-top: 10upx;
				display: flex;
				color: $uni-text-color-disable;
				font-size: 28upx;
				align-items: center;

				.directTwo {
					width: 40upx;
					height: 40upx;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.vvDirectionBox {
					width: 100%;
					font-size: 28upx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 10upx;

					.vvvDirectionBox {
						display: flex;
						flex-direction: row;
						align-items: center;
					}
				}

				.icon {
					margin-right: 10upx;

				}
			}



			.addDot {
				/*多余显示省略号*/
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

	}
</style>
