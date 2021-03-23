<template>
	<view class="ay-image-upload-list">
		
		<view class="ay-image-upload-Item ay-image-upload-Item-add"  v-for="(item, index) in list" :key="index" >
			<view v-if="item.img.length>0" class="ay-image-upload-Item" style="margin: 0;">
				<image lazy-load=true :src="item.img" @click="imgPreview(index)"></image>
				<view class="ay-image-upload-Item-del" v-if="item.remove" @click="imgDel(index)">×</view>
			</view>
			
			<view v-else class="cf-shuCenter" @click="imgAdd(index)">
				<view class="addRemark">+</view>
				<view class="tips">{{item.name}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	//#ifdef APP-PLUS
	import permit_app from "./permit_app.js";
	// #endif
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			
			sourceType: { //选择照片来源 【ps：H5就别费劲了，设置了也没用。不是我说的，官方文档就这样！！！】
				type: Array,
				default: () => ['album', 'camera'],
			},
			
		},
		data() {
			return {
				
			}
		},
		
		methods: {
			imgDel(index) {
				let that = this ;
				uni.showModal({
					title: '提示',
					content: '您确定要删除么?',
					success: (res) => {
						if (res.confirm) {
							that.list[index].img = '' ;
						} else if (res.cancel) {}
					}
				});
			},
			imgPreview(index) {
				let that = this ;
				//console.log('imgPreview', index)
				let uploadLists = [] ;
				that.list.forEach(item=>{
					if(item.img.length>0){
						uploadLists.push(item.img)
					}
					
				})
				uni.previewImage({
					urls: uploadLists,
					current: index,
					loop: true,
				});
			},
			imgAdd(index) {
				let that = this ;
				let thisNum = 1 ; //可选数量
				// #ifdef APP-PLUS
				if (this.sourceType.length > 1) {
					uni.showActionSheet({
						itemList: ['拍摄', '从手机相册选择', '取消'],
						success: (res) => {
							if (res.tapIndex == 1) {
								this.appGallery(thisNum,index);
							} else if (res.tapIndex == 0) {
								this.appCamera(index);
							}
						},
						fail: (res) => {
							console.log(res.errMsg);
							that.$api.msg('失败！请重新选择');
						}
					});
				}
				if (this.sourceType.length == 1 && this.sourceType.indexOf('album') > -1) {
					this.appGallery(thisNum,index);
				}

				if (this.sourceType.length == 1 && this.sourceType.indexOf('camera') > -1) {
					this.appCamera(index);
				}
				// #endif
				//#ifndef APP-PLUS
				uni.chooseImage({
					count: thisNum,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: this.sourceType,
					success: (res) => {
						//this.chooseSuccessMethod(res.tempFilePaths)
						this.chooseSuccessMethod(res.tempFilePaths,index)
					}
				});
				// #endif
			},
			async appCamera(index) {
				var cmr = plus.camera.getCamera(1);
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				//console.log("Resolution: " + res + ", Format: " + fmt);
				
				try {
					let isAndroid = false ;
				    const res = uni.getSystemInfoSync();
				    if(res.platform == 'android'){
						isAndroid = true ;
					}else{
						isAndroid = false ;
					}
					var iscan = await permit_app.req_Permit_any(isAndroid,permit_app.p_ID_anrd.camera,permit_app.p_ID_ios.camera,'相机')
					if(iscan){
						cmr.captureImage((path)=> {
								console.log("Capture image success: " + path);
								this.chooseSuccessMethod([path],index)
							},
							(error) =>{
								console.log("Capture image failed: " + error.message);
								that.$api.msg('失败！请重新选择');
							}, {
								resolution: res,
								format: fmt
							}
						);
					}
					
				} catch (e) {
				    // error
				}
				
			},
			appGallery(maxNum,index) {
				plus.gallery.pick((res) => {
					this.chooseSuccessMethod(res.files,index)
				}, function(e) {
					//console.log("取消选择图片");
					that.$api.msg('取消选择图片');
				}, {
					filter: "image",
					multiple: true,
					maximum: maxNum
				});
			},
			chooseSuccessMethod(filePath,index) {
				let that = this ;
				let list = that.list;
				list[index].img = filePath[0] ;
				this.$emit('imgAdd', list);
			},
		}
	}
</script>

<style>
	.addRemark{
		margin-top: 30upx;
	}
	.tips{
		font-size: 24upx;
		color: #000000;
	}
	.cf-shuCenter {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}
	.ay-image-upload-list {
		display: flex;
		flex-wrap: wrap;
	}
	
	.ay-image-upload-Item {
		/* width: 160rpx; */
		width: 100%;
		height: 240upx;
		margin: 13upx;
		border-radius: 10rpx;
		position: relative;
	}

	.ay-image-upload-Item image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.ay-image-upload-Item-add {
		font-size: 110upx;
		/* line-height: 160rpx; */
		text-align: center;
		border: 1px dashed #d9d9d9;
		color: #d9d9d9;
	}

	.ay-image-upload-Item-del {
		background-color: #f5222d;
		font-size: 24rpx;
		position: absolute;
		width: 35rpx;
		height: 35rpx;
		line-height: 35rpx;
		text-align: center;
		top: 0;
		right: 0;
		z-index: 100;
		color: #fff;
	}
</style>
