<template>
	<view>
		<uni-popup id="pop_tips" ref="pop_tips" type="bottom" :animation="true">
			<view  class="box" >
				<view class="cf-closeBox" >
					<view class="iconfont icon-icon-1 cf-close" @tap="closeModal" :style="{'background-color': themeColor}"></view>
				</view>
				
				<view class="box-color">
					<view class="box-color-item" v-for="(item, index) in list" :key="index"
					@tap="toConfirm(item)" 
					>
						<view style="width: 80upx;height:80upx;border-radius: 50%;" :style="'background-color:'+item.val">
							
						</view>
						
					</view>
				</view>
				
				
				
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
	import color from './color.js';
	import uniPopup from './uni-popup.vue';
	export default {
		components: {
			uniPopup,
		},
		props: {
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		computed: {
			

		},

		watch: {

		},
		data() {
			return {
				list : [],
			};
		},
		created: function() {
			this.list =  color.res.data.list.data ;
		},
		methods: {
			open() {
				this.$refs.pop_tips.open(); //弹出确认框
			},
			close() {
				this.$refs.pop_tips.close(); //关闭确认框
			},
			closeModal() {
				let that = this;

				let data = {

				};
				this.$emit('closeModal', data);
			},
			toConfirm(e) {
				let that = this;

				let data = {
					val : e.val ,
				};
				this.$emit('toConfirm', data);
			},
		},
	}
</script>

<style lang="scss">
	.box-color {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 10upx 10upx 20upx 10upx;
		margin: 60upx 0;
		.box-color-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 25upx;
			color: #9e9e9e;
			padding: 10upx 10upx 0upx 10upx;
		}
	}
	.box{
		text-align: center;
		background-color: #FFFFFF;
		padding-bottom: 20upx;
		
	}
	.ctr-btn-box{
		padding-top: 20upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 40upx 40upx;
		.ctr-btn{
			text-align: center;
			
			width: 50%;
			font-size: 34upx;
		}
		
		.ctr-btn-off{
			 border-left:2upx solid #CCCCCC;
		}
	}
	.ct-title-ctr{
		padding-top: 40upx;
	}
	
	.ctr-box{
		border-top-left-radius:20upx;
		border-top-right-radius:20upx;
		text-align: center;
		background-color: #FFFFFF;
		width: 600upx;
		
	}
	
	.ct-title{
		font-size: 36upx;
		text-align: center;
		padding-bottom: 40upx;
	}
	
	.cf-btn-m-box{
		width: 100%;
		text-align: center;
	}
	.cf-btn-m {
		color: #FFFFFF;
		width: 80%;
		border-radius: 68upx;
		margin: 20upx auto;
		padding: 20upx;
		font-size: 40upx;
	}
	.ct-one {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.cf-closeBox {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		font-size: 40upx;

	}

	.cf-close {
		float: right;
		color: #FFFFFF;
		padding: 10upx 20upx;
	}
</style>
