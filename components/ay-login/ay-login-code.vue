<template>
	<view style="background-color: #FFFFFF;">
		<view style="background-color: #FFFFFF;height: 500upx;text-align: center;padding-top: 100upx;">
			<image lazy-load="true" :src="logoUrl" style="width: 294upx;height: 294upx;border-radius: 50%;"></image>
		</view>
		<view style="background-color: #FFFFFF;height: 150upx;text-align: center;padding: 50upx;">
			<input style="border-bottom: 2upx solid #d5d4d4;text-align: start;margin: 50upx 0;" placeholder="请输入手机号" v-model="phone" />
			
		</view>
		<view style="background-color: #FFFFFF;text-align: center;padding: 50upx;">
			<input style="border-bottom: 2upx solid #d5d4d4;text-align: start;width: 70%;" placeholder="请输入验证码" v-model="code" />
			<view v-if="!isSendCode" :style="{color: themeColor }" style="font-size: 36upx;position: relative;top: -60upx;left: 235upx;" @tap="getAuthCode">获取验证码</view>
			<text v-else style="color: #D3D3D3;font-size: 36upx;position: relative;top: -60upx;left: 235upx;">剩余{{restSeconds}}s</text>
		</view>
		<view style="text-align: center;">
			<view :style="{'background-color': themeColor }" style="color: #FFFFFF;width: 80%;border-radius: 68upx;margin: 20upx auto;padding: 20upx;font-size: 40upx;"
			 @tap="loginFun">{{loginTip}}</view>
		</view>
	</view>
	
</template>

<script>
	export default {
			components: {},
			data() {
				return {
					phone: '',
					code: '',
					isSendCode:false ,
					restSeconds: 60,
					timerName: '',
				}
			},
			props: {
			
				themeColor: {
					type: String,
					default: '#33CCCC',
				},
				logoUrl: {
					type: String,
					default: '',
				},
				phone_init: {
					type: String,
					default: '',
				},
				loginTip: {
					type: String,
					default: '登录',
				},
				isSendCode_init: {
					type: Boolean,
					default: false
				},
			},
			watch:{
				isSendCode(e){
					let that = this ;
					if(e){
						let timerName = setTimeout(function() {
							that.timerNameFun();
						}, 1000)
						// 保存定时器name
						that.timerName = timerName;
					}
				},
				isSendCode_init(e){
					let that = this ;
					that.isSendCode = e;
				}
			},
			computed: {
				style_xuan() {
					let that = this ;
					var themeColor = that.themeColor;
					var style = '' ;
					
					if(themeColor.length>0){
						style += `color:${themeColor};`;
					}
					return style ;
				},
			},
			created:function(){
				let that = this;
				that.phone = that.phone_init ;
				that.isSendCode = that.isSendCode_init ;
			},
			methods: {
				//定时器实现60s倒数
				timerNameFun() {
					let that = this;
					//移除定时器
					let timerName = that.timerName;
					if (timerName !== '') {
						clearTimeout(timerName);
					}
					that.restSeconds--;
					
					timerName = setTimeout(function() {
						if (that.restSeconds > 1) {
							that.timerNameFun();
					
						} else {
							clearTimeout(timerName);
							that.isSendCode = false;
							that.canGetCode();
						}
					}, 1000)
					// 保存定时器name
					that.timerName = timerName;
					
				},
				
				getAuthCode(){
					let that = this;
					let data = {
						phone: that.phone,
					};
					this.$emit('getAuthCode', data);
				},
				loginFun(){
					let that = this;
					let data = {
						phone: that.phone,
						code: that.code,
						
					};
					this.$emit('loginFun', data);
				},
				canGetCode(){
					let that = this;
					let data = {
						isSendCode: that.isSendCode,
					};
					this.$emit('canGetCodeEnvet', data);
				},
			}
		}
	
	
</script>

<style lang="scss">
	
</style>
