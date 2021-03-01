<template>
	<view>
		<uni-popup id="pop_tips" ref="pop_tips" :type="type" :animation="true">
			<view v-if="type=='bottom'" class="box" >
				<view class="cf-closeBox" >
					<view class="iconfont icon-icon-1 cf-close" @tap="closeModal" :style="{'background-color': themeColor}"></view>
				</view>

				<view>
					<view class="ct-title">{{title}}</view>
					<slot />
					<view v-if="type=='bottom'" :style="{'background-color': themeColor}" class="btn-box-btm" @tap="toConfirm">{{confirmText}}</view>

				</view>
				
				
			</view>
			<view v-if="type=='center'">
				
				<view class="ctr-box" >
					<view class="ct-title ct-title-ctr" >{{title}}</view>
					<view class="ct-one">{{content}}</view>
					<slot />
				</view>
				
				<view class="ctr-btn-box">
					<view  class="ctr-btn" :style="{'color': cancelColor}"  @tap="closeModal">{{cancelText}}</view>
					<view  class="ctr-btn ctr-btn-off" :style="{'color': themeColor}" @tap="toConfirm">{{confirmText}}</view>
				</view>
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from './uni-popup.vue';
	export default {
		components: {
			uniPopup,
		},
		props: {
			type: {
				type: String,
				default: 'center', // 顶部弹出 top // 底部弹出 bottom // 居中弹出center
			},
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			//提示的标题
			title: {
				type: String,
				default: '温馨提示'
			},
			//提示的内容
			content: {
				type: String,
				default: ''
			},
			//是否显示取消按钮，默认为 true
			showCancel: {
				type: Boolean,
				default: false
			},
			//取消按钮的文字，默认为"取消"，最多 4 个字符
			cancelText: {
				type: String,
				default: '取消'
			},
			//取消按钮的文字颜色，默认为"#CCCCCC"
			cancelColor: {
				type: String,
				default: '#CCCCCC'
			},
			//确定按钮的文字，默认为"确定"，最多 4 个字符
			confirmText: {
				type: String,
				default: '确定'
			},
			//确定按钮的文字颜色，H5平台默认为"#007aff"
			confirmColor: {
				type: String,
				default: '#007aff'
			},

		},
		computed: {
			style_w_h() {
				let that = this;
				var height = parseInt(that.height);
				var width = parseInt(that.width);
				var style = '';
				if (height > 0) {
					style = `height:${height}rpx;`;
				}
				if (width > 0) {
					style += `width:${width}rpx;`;
				}

				return style;
			},


		},

		watch: {

		},
		data() {
			return {

			};
		},
		created: function() {

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
			toConfirm() {
				let that = this;

				let data = {

				};
				this.$emit('toConfirm', data);
			},
		},
	}
</script>

<style lang="scss">
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
	.btn-box-btm {
		padding-top: 20upx;
		text-align: center;
		color: #FFFFFF;
		width: 90%;
		border-radius: 6upx;
		margin: 20upx auto;
		padding: 20upx;
		font-size: 36upx;
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
