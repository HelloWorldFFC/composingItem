<template>
	<view>
		<view style="background-color: #FFFFFF;text-align: center;padding: 50upx;display: flex;">
			<input v-if="!isShow" class="password" password="true" @input="inputFun" :placeholder="pwd_tip" v-model="password" />
			<input v-else class="password" :placeholder="pwd_tip" @input="inputFun" v-model="password" />

			<view :class="isShow?'icon-icon-eye-open':'icon-icon-eye-close'" class="iconfont changeShow" :style="{color: themeColor }"
			 style="font-size: 60upx;" @tap="isShowPassword"></view>

		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				password: '',
				isShow: false,
			}
		},
		props: {

			themeColor: {
				type: String,
				default: '#33CCCC',
			},

			pwd_init: {
				type: String,
				default: '',
			},
			pwd_tip: {
				type: String,
				default: '请输入密码',
			},

		},
		watch: {

		},
		computed: {
			style_xuan() {
				let that = this;
				var themeColor = that.themeColor;
				var style = '';

				if (isRemeber) {
					style += `color:${themeColor};`;
				}
				return style;
			},
		},
		created: function() {
			let that = this;
		},
		methods: {
			isShowPassword() {
				let that = this;
				that.isShow = !that.isShow;
			},
			inputFun(e) {
				let val = e.detail;
				let that = this;
				let data = {
					val: that.password,
				};
				//console.log('that.password'+that.password)
				this.$emit('inputFun', data);
			}
		}
	}
</script>


</script>

<style lang="scss">
	.password {
		border-bottom: 2upx solid #d5d4d4;
		text-align: start;
		width: 73%;
	}

	.changeShow {

		font-size: 36upx;
		position: relative;
		top: -12upx;
		left: 84upx;
	}
</style>
