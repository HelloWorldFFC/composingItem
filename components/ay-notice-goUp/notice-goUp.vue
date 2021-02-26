<template>
	<view class="box" v-if="list.length>0">
		<view class="list">
			<view class="cc rowup">
				
				<view class="item" v-for="(item, index) in list"  :key="index">
					<view class="itemBox">
						<view class="iconfont icon-tubiaozhizuo-"></view>
						<view class="directOne1">{{item.directOne1}}</view>
						<view class="directOne2">{{item.directOne2}}</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="more">
			<view class="iconfont icon-tubiaozhizuo-" style="font-size: 52upx;" :style="{color: themeColor }" v-if="haveMore"></view>
			<view class="iconfont icon-you"></view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
			components: {
	
			},
			props: {
				//目前发现最好6个以上
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
				haveMore: {
					type: Boolean,
					default: true,
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
	.box {
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0upx 20upx;
		border-radius: 22upx;
	}
	.itemBox{
		font-size: 28upx;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 10upx 0;
		
		.icon-tubiaozhizuo-{
			font-size: 14upx;
		}
		
		.directOne1{
			padding-left: 10upx;
		}
		
		.directOne2{
			padding-left: 10upx;
			color: #D3D3D3;
		}
		
	}
	.more {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@-webkit-keyframes rowup {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -200upx, 0);
			transform: translate3d(0, -200upx, 0);
		}
	}

	@keyframes rowup {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -200upx, 0);
			transform: translate3d(0, -200upx, 0);
		}
	}

	.list {
		width: 100%;
		// border: 1upx solid #999;
		margin: 20upx auto;
		position: relative;
		height: 100upx;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.list .rowup {
		-webkit-animation: 10s rowup linear infinite normal;
		animation: 10s rowup linear infinite normal;
		position: relative;
	}
</style>
