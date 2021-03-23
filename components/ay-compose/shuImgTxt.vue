<template>
	<view>
		<view class="list-comp-sit">
			<view v-for="(item, index) in list" :style="{width: itemWidth +'%' }" :key="index" class="item-comp-sit" @click="toDetailPage({index: index,id:item.id})">
				<view class="imageBox">
					<image lazy-load="true" :src="item.img" @error="onImageError(item,index)" mode="aspectFill"></image>
				</view>
				<view class="g-item" style="position: relative;">
					<view class="itemBox">
						<view class="vTitleBox">{{item.subtitle}}</view>

						<view class="vdirectTwoBox">
							<view class="vdirectTwo1 addDot">{{item.directTwo1}}</view>
							<view>{{item.directTwo2}}</view>
						</view>

						<view class="vdirectOneBox">
							<view class="vvdirectOneBox addDot" :style="{color: themeColor }">
								<view>{{item.directOne1}}</view>
							</view>

						</view>

						<view v-if="item.directTh1" class="vdirectThBox" :style="[{ color: themeColor,'border-color': themeColor}]">
							<view>{{item.directTh1}}</view>
						</view>

					</view>
					<view class="isRemarkBox" style="position: absolute;top:10upx;left: 35upx;" v-if="item.isRemark">
						<image lazy-load="true" :src="item.remarkImg"></image>
					</view>
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
		computed: {
			itemWidth() {
				let that = this;
				var itemWidth = 30;
				itemWidth = that.getItemPara(that.list).itemWidth;
				//console.log('itemWidth'+itemWidth)
				return itemWidth;
			},
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
					list: this.list
				};
				this.$emit('Error', obj);
			},
			getItemPara(itemList) {

				let that = this;
				let itemWidth = 30;
				let itemHeight = 140;
				let itemNum = itemList.length;
				switch (itemNum) {
					case 1:
						itemWidth = 97;
						itemHeight = 200;
						break;
					case 2:
						itemWidth = 46;
						itemHeight = 200;
						break;
					case 3:
						itemWidth = 30;
						itemHeight = 200;
						break;

					case 4:
						itemWidth = 46;
						itemHeight = 140;
						break;
				}
				return {
					'itemWidth': itemWidth,
					'itemHeight': itemHeight
				};
			}
		}
	}
</script>

<style lang="scss">
	/* 列表 */
	.list-comp-sit {
		// margin-bottom: 40upx;
		display: flex;
		flex-wrap: wrap;
		// flex-direction: column;
		padding: 0 15upx;
		background: #fff;
		text-align: center;
		// margin: 0 10upx 0upx 10upx;
		width: 100%;

		.item-comp-sit {
			display: flex;
			flex-direction: column;

			margin: 10upx;
			height: 100%;
			width: 100%;

			.imageBox {
				width: 100%;
				height: 190upx;
				border-radius: 3px;

				image {
					width: 100%;
					height: 190upx;
					border-radius: 6upx;
					opacity: 1;
				}
			}

			.g-item {


				width: 100%;
				// padding-left: 20upx;

				.itemBox {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
				}
			}


			.vTitleBox {

				font-family: PingFang SC;
				color: #383838;
				font-size: 30upx;
				padding: 6upx 0;
			}



			.vdirectOneBox {
				font-family: PingFang SC;
				display: flex;
				width: 100%;
				padding: 6upx 0;

				.vvdirectOneBox {
					font-size: 30upx;
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}

			}

			.vdirectTwoBox {
				width: 100%;
				display: flex;
				color: $uni-text-color-disable;
				font-size: $uni-font-size-sm;

				.vdirectTwo1 {
					width: 75%;
				}
			}


			.vdirectThBox {
				color: #ababab;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				font-size: 26upx;
				margin: 0 0 10upx 0;
				border: 2upx solid #999;
				border-radius: 22upx;
				padding: 6upx 8upx;

				.directTh {
					text-decoration: line-through;
				}
			}

			.isRemarkBox {

				image {
					width: 300upx;
					height: 150upx;
					//opacity: 1;
				}
			}


		}

		.addDot {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
