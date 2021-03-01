<template>
	<view>
		<slot></slot>
		<!-- 选择框 max-height-->
		<scroll-view scroll-y :show-scrollbar="true" v-show="isShow" class="isShowSelect" style="position: absolute;overflow:auto;background-color: #FFFFFF;z-index: 100;" :style="style_scl">
			
			<view v-for="(item,index) in list" :key="index" class="selTipBox"
			 @tap="selectItem({index: index,item:item})">{{item.selTip}}</view>
		
		</scroll-view>
	</view>
</template>

<script>
	export default {
			props:{
				list: {
					type: Array,
					default () {
						return []
					}
				},
				isShow : { //是否显示下拉框
					type : Boolean ,
					default : false 
				},
				marginLeft:{
					type: Number,
					default: 0
				},
				width:{
					type: Number,
					default: 100
				},
				width:{
					type: Number,
					default: 100
				},
				maxheight:{
					type: Number,
					default: 600
				},
			},
			
			computed: {
				style_scl() {
					let that = this ;
					var width = parseInt(that.width);
					var marginLeft = parseInt(that.marginLeft);
					var maxheight =  parseInt(that.maxheight);
					var style = '' ;
					if(width>0){
						style = `width:${width}%;`;
					}
					if(marginLeft>0){
						style += `margin-left:${marginLeft}rpx;`;
					}
					if(maxheight>0){
						style += `max-height:${maxheight}rpx;`;
					}
					
					return style ;
				},
				
			},
			
			data() {
				return {
					
				};
			},
			mounted() {
				
			},
			methods:{
				selectItem(e){
					let that = this ;
					let list = that.list ;
					let index = e.index ;
					let data = {
						curIndex: index,
						item : e.item ,
						list: list
					};
					this.$emit('selectItem', data);
				},
			}
		}
	
</script>

<style lang="scss">
	.isShowSelect {
		//border: 2upx solid #CCCCCC;
		border-left : 2upx solid #F0F0F0;
		border-right : 2upx solid #F0F0F0;
		
	}
	
	.selTipBox{
		border-bottom: 2upx solid #F0F0F0;
		background: #FFFFFF;
		height: 80upx;
		line-height: 80upx;
		font-size:28upx ;
		padding-left: 20upx;
	}
</style>
