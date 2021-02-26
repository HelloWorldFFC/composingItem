<template>
	<view style="background-color: #FFFFFF;height: 100% !important;">
		<view class="context">
			<view style="background-color: #FFFFFF;height: 500upx;text-align: center;padding-top: 100upx;">
				<image lazy-load="true" :src="logoUrl" style="width: 294upx;height: 294upx;border-radius: 50%;"></image>
			</view>
			<view style="background-color: #FFFFFF;height: 150upx;text-align: center;padding: 50upx;">

				<input style="border-bottom: 2upx solid #d5d4d4;text-align: start;margin: 50upx 0;" placeholder="请输入用户名" v-model="username" />
			</view>
			<view style="background-color: #FFFFFF;text-align: center;padding: 50upx;display: flex;">
				<input v-if="!isShow" class="password" password="true" placeholder="请输入密码" v-model="password" />
				<input v-else class="password" placeholder="请输入密码" v-model="password" />

				<view :class="isShow?'icon-icon-eye-open':'icon-icon-eye-close'" class="iconfont changeShow" :style="{color: themeColor }" style="font-size: 60upx;"
				 @tap="isShowPassword"></view>

			</view>
			<view @tap="isRemeberFun" class="cf-hengStart xuanShowBox">
				<view :class="isRemeber?'icon-xuanzhong':'icon-weixuan'" :style="style_xuan"  class="iconfont xuanShow" style="font-size: 50upx;"
				 ></view>
				 <view class="xuanShowTip">记住账号密码</view>
			</view>
			<view style="text-align: center;margin-top: 100upx;" @tap="loginFun">
				<view class="login" :style="{'background-color': themeColor }" >登录</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		props: {
		
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			logoUrl: {
				type: String,
				default: '',
			},
			username_init: {
				type: String,
				default: '',
			},
			password_init: {
				type: String,
				default: '',
			},
			isRemeber_init: {
				type: Boolean,
				default: true
			},
		},
		created:function(){
			let that = this;
			that.username = that.username_init ;
			that.password = that.password_init ;
			that.isRemeber = that.isRemeber_init ;
		},
		computed: {
			style_xuan() {
				let that = this ;
				var themeColor = that.themeColor;
				var isRemeber = that.isRemeber;
				var style = '' ;
				
				if(isRemeber){
					style += `color:${themeColor};`;
				}
				return style ;
			},
		},
		data() {
			return {
				isRemeber: false,
				isShow: false, //是否显示输的密码
				username: '',
				password: '',
			}
		},
		
		methods: {
			isRemeberFun(e) {
				console.log(e)
				let that = this;
				that.isRemeber = !that.isRemeber;

			},
			isShowPassword() {
				let that = this;
				that.isShow = !that.isShow;
			},
			loginFun(){
				let that = this;
				let data = {
					username: that.username,
					password: that.password,
					isRemeber: that.isRemeber,
					
				};
				console.log(data)
				this.$emit('loginFun', data);
			},
		}
	}
</script>

<style lang="scss">
	page,
	.content {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	view{
		box-sizing: border-box;
	}
	.cf-hengStart{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}
	.xuanShowBox{
		padding-left: 40upx;
		.icon-weixuan{
			
			color: #eaeeed;
		}
		
		.xuanShowTip{
			padding-left: 10upx;
		}
	}
	
	.password {
		border-bottom: 2upx solid #d5d4d4;
		text-align: start;
		width: 70%;
	}

	.login {
		color: #FFFFFF;
		width: 80%;
		border-radius: 68upx;
		margin: 20upx auto;
		padding: 20upx;
		font-size: 40upx;
	}

	
	.changeShow {
		
		font-size: 36upx;
		position: relative;
		top: -12upx;
		left: 84upx;
	}

	uni-page-wrapper {
		background-color: #FFFFFF;
		height: 100%;
	}

	uni-page-body {
		height: 100%;
	}
</style>
