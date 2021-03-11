<template>
	<view v-show="show" class="box" :style="style">
		
		<view class="cf-closeBox" >
			<view class="iconfont icon-guanbi3" @tap="close" :style="{color: themeColor}"></view>
		</view>
		
		<image @tap="toDetailPage" lazy-load="true" class="help-img"  :src="img"></image>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		computed: {
			style() {
				let that = this ;
				var style = '' ;
				style = `bottom:${that.bottom}rpx;`;
				
				style += `right:${that.right}rpx;`;
				
				return style ;
			},
		},
		props: {
			//是否显示
			show: {
				type: Boolean,
				default: true
			},
			img: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',
			},
			themeColor: {
				type: String,
				default: '#969698',
			},
			bottom: {
				type: Number,
				default: 180
			},
			right: {
				type: Number,
				default: 20
			},
		},
		methods: {
			
			//点击事件
			toDetailPage(){
				var that = this;
				let data = {} ;
				this.$emit('toDetailPage', data);
			},
			close(){
				let data = {} ;
				this.$emit('close', data);
			},
		}
	}
</script>

<style lang="scss">
	.cf-closeBox{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		font-size: 40upx;
	}
	.icon-guanbi3{
		font-size: 40upx;
	}
	.box{
		position: fixed;
		bottom: 180upx;
		right: 20upx;
		padding-top: 4upx;
		padding-left: 10upx;
		z-index: 997;
		
		.help-img{
			// position: absolute;
			// top: 0;
			// left: 0;
			// bottom: 0;
			// right: 0;
			height: 80upx;
			width: 80upx;
			margin: auto;
			// border-radius: 50%;
		}
	}
	
</style>
