
## 前言
简介：
1.生成二维码。传入链接，即可使用，可快速扫出链接
2.可一个页面生成多个二维码
3.可定义中间图片（头像）

## 有疑问
微信搜索“慢慢向好”小程序，找客服反馈，相应问题。

## 属性说明

|属性	|类型	|说明	|
|--	|--	|--	|
|url	|Number	|生成二维码的url链接|
|width	|Number	|宽，单位px|
|height	|Number	|高，单位px|		
|themeColor	|String	|二维码颜色，默认#333333|
|qrcode_id	|String	|二维码的id，默认qrcode_id,用于一个页面生成多个码|
|is_themeImg	|Boolean	|是否有中间图片（头像等），默认没有|
|themeImg	|String	|中间图片地址，默认https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg|
|width_img	|Number	|宽，单位px|
|height_img	|Number	|高，单位px|

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


`index.vue`的`template`加入如下部分(任选之一)：

(1)默认黑色二维码：
```
<view style="margin: 40upx;">
			<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300" />
		</view>
		
```

(2)定义了颜色的二维码：
 ```

 <view style="margin: 40upx;">
 			<ayQrcode ref="qrcode" qrcode_id="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300" 
 			themeColor="#33CCCC"/>
 		</view>
 	
 		
 ```
  
(3)定义了颜色、中心图片（头像）的二维码：
 
  ```
  		<view style="margin: 40upx;">
  			<ayQrcode ref="qrcode3" qrcode_id="qrcode3" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300"
  			 themeColor="#dd524d" 
  			 :is_themeImg="true"
  			  themeImg="https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg"
  			  :height_img="40" 
  			  :width_img="40"
  			  />
  		</view>
  		
  ```

## 汇总组件
[组件汇总](https://ext.dcloud.net.cn/plugin?id=4276)


 ## 参考链接
[参考链接](https://www.cnblogs.com/2186009311CFF/p/14261604.html)
[参考链接](https://www.cnblogs.com/chenjianbao/p/13594687.html)
[参考链接](https://www.cnblogs.com/zitjubiz/p/10019789.html)
[参考链接](https://blog.csdn.net/iamzhizhang/article/details/88715634)
[参考链接](https://developers.weixin.qq.com/community/develop/article/doc/00002064e6c920917be96c1ed56013)
 