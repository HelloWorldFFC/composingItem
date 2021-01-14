<template>
	<view class="search-box" :style="style">
		<view class="iconfont icon-sousuo search-input-icon"></view>
		<input class="search-input" placeholder-style="color:#919090" type="text" :placeholder="preholder" @focus="toSearch" />

		<view v-if="isToAll" class="iconfont icon-gengduo2 search-to-more" :style="[{ color: themeColor,'border-color': themeColor}]"
		 @tap="toAll"></view>
	</view>
</template>

<script>
	export default {
		props: {

			preholder: {
				type: String,
				default: '搜索关键字',
			},

			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			isToAll: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			style() {
				let that = this;
				var style = '';
				
				let padding = 40 ;
				if(that.isToAll){
					padding = 80 ;
				}
				style += `padding: 20rpx ${padding}rpx 10rpx 20rpx;`;
				
				//console.log('style'+style);
				return style;
			},

		},

		watch: {

		},
		data() {
			return {

			};
		},

		methods: {
			toSearch(e) {
				this.$emit('toSearch', e);
			},
			toAll(e) {

				this.$emit('toAll', e);
			},
		}
	}
</script>

<style lang="scss">
	view,
	input{
		box-sizing: border-box;
	}
	
	.search-box {
		width: 100%;
		// padding: 20upx 80upx 10upx 20upx;
		position: relative;

		input::-webkit-input-placeholder,
		textarea::-webkit-input-placeholder {
			color: #303133;
			font-size: 18px;
		}

		input:-moz-placeholder,
		textarea:-moz-placeholder {
			color: #303133;
			font-size: 18px;
		}

		input::-moz-placeholder,
		textarea::-moz-placeholder {
			color: #303133;
			font-size: 18px;
		}

		input:-ms-input-placeholder,
		textarea:-ms-input-placeholder {
			color: #303133;
			font-size: 18px;
		}

		.search-input-icon {
			position: absolute;
			top: 34upx;
			left: 56upx;
		}

		.search-to-more {
			position: absolute;
			top: 28upx;
			right: 20upx;
			font-size: 48upx;

		}

		.icon-sousuo {
			font-size: 40upx;
			color: #999999;
		}

		.search-input {
			font-weight: 400;
			flex: 1;
			height: 72upx;
			line-height: 72upx;
			padding-left: 100upx;
			font-size: 26upx;
			border-radius: 20px;
			background: #f0f0f0;
		}
	}
</style>
