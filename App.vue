<script>
	import Vue from 'vue'
	export default {
		globalData: {
			
		},
		onLaunch: function() {
			console.log('App Launch')
			let that = this;
			uni.getSystemInfo({
				success: function(e) {
					console.log('getSystemInfo',e)
					// #ifdef H5
					var u = navigator.userAgent;
					var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
					var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					if (isAndroid) {
						Vue.prototype.isAndroid = true;
					} else {
						Vue.prototype.isAndroid = false;
					}
					// #endif
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;

					} else {
						//alert(e.statusBarHeight + 45)
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					Vue.prototype.vScreenWidth = e.screenWidth;
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif


					if (e.platform == 'android') {
						Vue.prototype.isAndroidOs = true;
					} else {
						Vue.prototype.isAndroidOs = false;
					}
					
					Vue.prototype.vWindowHeight = e.windowHeight;
					Vue.prototype.vScreenHeight = e.screenHeight;
				}
			})
			// #ifdef MP-WEIXIN
			// 打开调试
			// uni.setEnableDebug({
			// 	enableDebug: true
			// })
			// #endif 
			
			
		},
		onShow: function() {
			console.log('App Show')
			let that = this;
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
		}
	}
</script>

<style lang='scss'>
	@import './colorui/main.css';
	@import './colorui/icon.css';
	@import './style/iconfont.css';
	@import './style/comm.css';
	/*每个页面公共css */
	/*
		全局公共样式和字体图标
	*/



	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}

	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}

	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;

		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;

			&.loaded {
				opacity: 1;
			}
		}
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.common-hover {
		background: #f5f5f5;
	}

	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $uni-border-color;
	}

	.b-b:after {
		bottom: 0;
	}

	.b-t:after {
		top: 0;
	}

	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $uni-font-size-lg + 2upx;
		font-weight: normal;

		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}

	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}
</style>
