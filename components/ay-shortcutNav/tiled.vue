<template>
	  <!-- :style="style" -->
	<view >
		<view class="box">
			<block v-for="(item,index) in list"  :key="index" >
				<view class="box-item" :class="img_last" :style="style_item"  @tap="toDetailPage({index: index,id:item.id})">
					<image lazy-load="true"  :src="item.img"></image>
					<view class="name" :style="style_name" >{{item.name}}</view>
				</view>
			</block>
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
			hengNumber: {
				type: Number,
				default: 3,
			},
			backgroundColor: {
				type: String,
				default: '#E6E6FA',//#91b0b3
			},
			nameColor: {
				type: String,
				default: '#000000',
			},
			img_last: {
				type: String,
				default: 'small',
			},
			borderRadius: {
				type: Number,
				default: 10,
			},
		},
		watch: {

		},
		computed: {
			
			style_name() {
				let that = this ;
				
				var style = '' ;
				
				if(that.nameColor.length>0){
					style = `color:${that.nameColor};`;
				}
				
				return style ;
			},
			
			style_item() {
				let that = this ;
				
				var style = '' ;
				
				if(that.backgroundColor.length>0){
					style = `background-color:${that.backgroundColor};`;
				}
				// border-radius: 10rpx;
				style += `border-radius:${that.borderRadius}rpx;`;
				
				// box-shadow: 1rpx 2rpx 16rpx 1rpx rgba(89, 89, 89, 0.1);
				
				let obj = that.item_W_H();
				style += `width:${obj.itemWidth}rpx;`;
				style += `height:${obj.itemHeight}rpx;`;
				
				return style ;
			},
			
		},
		data() {
			return {

			};
		},

		methods: {
			
			item_W_H() {
				let that = this;
				var itemWidth = 230;
				let cha = 10 ;
				var itemHeight = itemWidth + cha;
				
				itemWidth = (340 *2 )/ that.hengNumber;
				itemHeight = itemWidth + cha;
				
				return {
					itemWidth : itemWidth,
					itemHeight : itemHeight,
				};
			},
			
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
		flex-wrap: wrap;
		display: flex;
		justify-content: center;
		width: 100%;
		
		.box-item {
			padding: 20rpx 0;
			margin: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			
			box-shadow: 1rpx 2rpx 16rpx 1rpx rgba(89, 89, 89, 0.1);
			
		}
		.small image{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
		}
		.small .name {
			padding: 20rpx 0;
			font-size: 24rpx;
		}
		
		
		.mid image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
		}
		.mid .name {
			padding: 20rpx 0;
			font-size: 24rpx;
		}
		
		
		.lg image {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
		}
		.lg .name {
			padding: 20rpx 0;
			font-size: 24rpx;
		}
		
		.lgg image {
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
		}
		.lgg .name {
			padding: 20rpx 0;
			font-size: 24rpx;
		}
	}
</style>
