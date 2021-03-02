
## 前言
简介：
1.生成二维码。传入链接，即可使用，可快速扫出链接

## 有疑问
微信搜索“慢慢向好”小程序，找客服反馈，相应问题。

## 属性说明

|属性	|类型	|说明	|
|--	|--	|--	|
|url	|Number	|生成二维码的url链接|
|width	|Number	|宽，单位px|
|height	|Number	|高，单位px|				  

## 素材
[图片资源](https://pixabay.com)
## 示例项目可直接运行 
## 开始使用
下载源码解压，复制`/components` 下的组件至项目根目录的 `/components` 文件夹下

`index.vue`的`script`加入如下部分：
```
import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	export default {
		components: {
			ayQrcode,

		},
		data() {
			return {
				//二维码相关参数
				modal_qr: false,
				url: 'https://pixabay.com/images/search/?order=ec', // 要生成的二维码值
				
			}
		},

		onLoad() {
			let that = this;
			that.showQrcode();//一加载生成二维码
			
		},
		methods: {
			
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			},
		}

	}
```


`index.vue`的`template`加入如下部分：
```
<view style="margin: 40upx;">
			<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300" />
		</view>

```
 
 ## 参考链接
[参考链接](https://www.cnblogs.com/2186009311CFF/p/14261604.html)
[参考链接](https://www.cnblogs.com/chenjianbao/p/13594687.html)
[参考链接](https://www.cnblogs.com/zitjubiz/p/10019789.html)


 