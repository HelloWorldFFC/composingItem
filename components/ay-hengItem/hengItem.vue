<template>
	<view class="box">
		<view class="itemBox" v-for="(item, index) in list" :key="index" @click="toDetailPage({index: index,id:item.id})">
			<view v-if="item.img">
				<image lazy-load=true :src="item.img" style="width: 50upx;height: 50upx;border-radius: 50%;"></image>
			</view>
			
			<!-- #ifdef MP-WEIXIN -->
			
			<view  v-if="item.isKefu" class="kefuBtnBox">
				<button open-type="contact" @contact="handleContactFun"></button>
			</view>
			
			<!-- #endif -->
			<view class="name">{{item.name}}</view>
			
			<view v-if="!item.img">
				<view style="width: 50upx;height: 50upx;border-radius: 50%;"></view>
			</view>
			
			<view>
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
				// #ifdef MP-WEIXIN
				//客服
				handleContactFun(e){
					var that = this;
					//that.$api.msg('联系客服成功！');
					//console.log(e.detail.path)
					//console.log(e.detail.query)
				},
				// #endif
			}
		}
	
</script>

<style lang="scss">
	.box {
		background-color: #FFFFFF;
		
		.itemBox {
			position: relative;
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
	
			.icon-you {
				color: #323232;
				font-size: 50upx;
				margin-left: 30upx;
			}
		}
	}
	
	.kefuBtnBox button::after {
		border: none;
	}
	
	.kefuBtnBox {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.kefuBtnBox button {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	
		/* 防止按钮点击不生效 */
		opacity: 0.1;
		z-index: 2;
	}
</style>
