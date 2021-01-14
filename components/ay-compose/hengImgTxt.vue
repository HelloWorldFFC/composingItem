<template>
	<view>
		<view class="list">
				<view v-for="(item, index) in list" :key="index" class="item" @click="toDetailPage({index: index,id:item.id})">
					<view class="imageBox">
						<image :src="item.img" @error="onImageError(item,index)" mode="aspectFill"></image>
					</view>
					<view class="g-item" style="position: relative;">
						<view class="">
							<view class="vTitleBox">{{item.subtitle}}</view>
							<view class="vdirectOneBox">
								<view>{{item.directOne1}}</view>
							</view>
							<view class="vdirectTwoBox">
								<view class="vvdirectTwoBox" :style="{color: themeColor }">
									<view>{{item.directTwo1}}</view>
								</view>
								
							</view>
							<view class="vdirectThBox">
								<view>{{item.directTh1}}</view>
								<view class="directTh">{{item.directTh2}}</view>
							</view>
							
						</view>
						<view class="isRemarkBox" style="position: absolute;top:10upx;left: 35upx;" v-if="item.isRemark">
							<image :src="item.remarkImg" ></image>
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
			themeColor :  {
				type:  String,
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
	.list {
		margin-bottom: 40upx;
		flex-direction: column;
		padding: 0 15upx;
		background: #fff;

		.item {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding-bottom: 16upx;
			padding-top: 16upx;
			border-bottom: 4upx solid #f9f9f9;

			.imageBox {
				width: 45%;
				height: 190upx;
				border-radius: 3px;
				//overflow: hidden;

				image {
					width: 100%;
					height: 190upx;
					border-radius: 6upx;
					opacity: 1;
				}
			}

			.g-item {
				width: 55%;
				padding-left: 20upx;
			}


			.vTitleBox {
				font-family: PingFang SC;
				color: #383838;
				font-size: 38upx;
				//font-weight: 400;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis
			}

			.vdirectOneBox {
				//padding: 2upx;
				display: flex;
				color: $uni-text-color-disable;
				font-size: $uni-font-size-sm;

				.vDContentBox {
					display: flex;

					.vDContentSplit {
						color: #ababab;
						//font-size: 26upx;
						//margin-top: 8upx;
					}
				}

			}

			.vdirectTwoBox {
				font-family: PingFang SC;
				display: flex;
				//padding: 2upx;

				.vvdirectTwoBox {
					font-size: $uni-font-size-lg;
					
					display: flex;
					justify-content: center;
					align-items: center;
					padding-right: 40upx;
					//font-weight: 400;
				}

			}

			.vdirectThBox {
				color: #ababab;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				font-size: 27upx;
				margin-top: 2upx;
				.directTh{
					text-decoration:line-through;
				}
			}

			.isRemarkBox{
				
				image {
					width: 300upx;
					height: 150upx;
					//opacity: 1;
				}
			}

		}

	}
	
</style>
