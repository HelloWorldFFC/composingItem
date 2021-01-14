<template>
	<view class="box" :style="style" >

		<view class="box-item" :style="{width: itemWidth +'%' }" @click="toDetailPage({index: index,id:item.id})" v-for="(item, index) in list"
		 :key="index">
			<image :src="item.img"></image>
			<text>{{item.name}}</text>
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
				default: 5,
			},
			backgroundColor: {
				type: String,
				default: '',
			},

			boxshadow: {
				type: Boolean,
				default: true,
			},
			
			borderRadius: {
				type: Boolean,
				default: true,
			},
		},
		watch: {

		},
		computed: {
			style() {
				let that = this ;
				
				var style = '' ;
				
				if(that.backgroundColor.length>0){
					style = `background-color:${that.backgroundColor};`;
				}
				
				if(that.boxshadow){
					//style += `box-shadow: 0px 15px 10px -15px #999;`;//下面
					
					style += `box-shadow:2px 2px 5px #999;`;//右下面
				}
				
				if(that.borderRadius){
					style += `border-radius: 22rpx`;
				}
				
				return style ;
			},
			itemWidth() {
				let that = this;
				var itemWidth = 20;
				itemWidth = 100 / that.hengNumber;
				return itemWidth;
			},
			
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
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 10upx 10upx 20upx 10upx;

		.box-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 25upx;
			color: #9e9e9e;
			padding: 10upx 10upx 0upx 10upx;
			// height: 160upx;
		}

		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 10upx;
			border-radius: 50%;
			// opacity: .7;
			//box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}

	}
</style>
