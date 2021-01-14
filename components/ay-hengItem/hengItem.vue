<template>
	<view class="box">
		<view class="itemBox" v-for="(item, index) in list" :key="index" @click="toDetailPage({index: index,id:item.id})">
			<view v-if="item.img">
				<image :src="item.img" style="width: 50upx;height: 50upx;"></image>
			</view>
			<view class="name">{{item.name}}</view>
			<view class="toRightBox">
				<view class="iconfont icon-you"></view>
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
			}
		}
	
</script>

<style lang="scss">
	.box {
		background-color: #FFFFFF;
		.toRightBox{
			padding-left: 40upx;
		}
		.icon-you{
			font-size: 44upx;
			color: #323232;
		}
		.itemBox {
			display: flex;
			padding: 18upx 20upx;
			border-bottom: 2upx solid #EEEEEE;
			align-items: center;
	
			.name {
				font-size: 34upx;
				line-height: 60upx;
				margin-left: 20upx;
				color: #323232;
				width: 78%;
				font-family: PingFang SC;
			}
	
			.toright {
				width: 35upx;
				height: 35upx;
				margin-left: 30upx;
			}
		}
	}
	
</style>
