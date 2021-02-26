<template>
	<view>
		<!-- :style="{'background-image': '-webkit-linear-gradient(left, '+txtColor1+', '+txtColor2 +' 10%, '+txtColor3 +' 20%, '+txtColor4 +' 30%, '+ txtColor5 +' 40%, ' +txtColor6 +' 50%, '+ txtColor7+' 60%, '+ txtColor8  +' 70%, '+txtColor9+' 80%, '+txtColor10+' 90%, '+txtColor11+')'}" -->

		<view class="txt" :style="style_box">{{txt}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			txt: {
				type: String,
				default: '人最宝贵的东西是生命', 
			},
			txtColor1: {
				type: String,
				default: '#3498db', 
			},
			txtColor2: {
				type: String,
				default: '#f47920', 
			},
			txtColor3: {
				type: String,
				default: '#d71345', 
			},
			txtColor4: {
				type: String,
				default: '#f7acbc', 
			},
			txtColor5: {
				type: String,
				default: '#ffd400', 
			},
			
			txtColor6: {
				type: String,
				default: '#3498db', 
			},
			txtColor7: {
				type: String,
				default: '#f47920', 
			},
			txtColor8: {
				type: String,
				default: '#d71345', 
			},
			txtColor9: {
				type: String,
				default: '#f7acbc', 
			},
			txtColor10: {
				type: String,
				default: '#ffd400', 
			},
			txtColor11: {
				type: String,
				default: '#3498db', 
			},
		},
		data() {
			return {
				
			}
		},
		computed: {
			style_box() {
				let that = this;
				var style = '';
				style += `background-image: -webkit-linear-gradient(left, ${that.txtColor1}, ${that.txtColor2} 10%, ${that.txtColor3} 20%, ${that.txtColor4} 30%, ${that.txtColor5} 40%, ${that.txtColor6} 50%, ${that.txtColor7} 60%, ${that.txtColor8}  70%, ${that.txtColor9} 80%, ${that.txtColor10} 90%, ${that.txtColor11});`;
				return style;
			},
			
		},
		
	}
</script>

<style lang="scss">
	.txt {
		display: block;
		text-decoration: none;
		text-align: center;
		line-height: 1.5;
		margin: 20px 10px;
		// -webkit-linear-gradient linear-gradient https://www.runoob.com/cssref/func-linear-gradient.html
		// background-image: -webkit-linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%, #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
		color: transparent;
		-webkit-background-clip: text;
		background-size: 200% 100%;
		-webkit-animation: slide1 2s infinite linear;
		animation: slide1 5s infinite linear;
		font-size: 40rpx;
	}
	
	@keyframes slide1 {
		0% {
			background-position: 0 0;
		}
	
		100% {
			background-position: -100% 0;
		}
	}
</style>
