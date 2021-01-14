<template>
	<view>
		<view v-if="list.length==2" class="box-list" >
			<view class="title1">{{list[0]}}</view>
			<view class="title2">{{list[1]}}</view>
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
					this.$emit('toDetailPage', item);
				},
				
			}
		}
	
</script>

<style lang="scss">
	.box-list{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 20upx;
		border-top-left-radius: 22upx;
		border-top-right-radius: 22upx;
		.title1{
			font-size: 36upx;
			font-weight: bold;
		}
		
		.title2{
			color: gray;
			font-size: 24upx;
		}
	}
</style>
