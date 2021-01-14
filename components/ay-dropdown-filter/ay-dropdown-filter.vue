<template>
	<view style="position: relative;">
		<view class="filter-wrapper" :style="{ height: height + 'rpx', top: top,'border-top':border?'1rpx solid #f2f2f2':'none' }"
		 @touchmove.stop.prevent="discard">
			<view class="inner-wrapper">
				<view class="mask" :class="showMask ? 'show' : 'hide'" @tap="tapMask"></view>
				<view class="navs">
					<view class="c-flex-aligncenter" :class="{ 'c-flex-center': index > 0, actNav: index === actNav }" v-for="(item, index) in navData" :style="index === actNav ? style_themeColor:''"
					 :key="index" @click="navClick(index)">
						<view v-for="(child, childx) in item" :key="childx" v-if="child.select">{{ child.text }}</view>
						<view v-if="index === actNav" class="iconfont icon-xia" ></view>
						<view v-else class="iconfont icon-shang3" ></view>
					</view>
		
				</view>
				<scroll-view scroll-y="true" class="popup" :class="popupShow ? 'popupShow' : ''">
					<view class="actNavname" v-if="composeList[actNav] ||false">
						{{ composeList[actNav].name.length>0?composeList[actNav].name:''  }}
					</view>
					
					<view :class="composeList[actNav] ? 'c-flex-column' : ''">
						<view v-if="(composeList[actNav] ||false)" class="item-opt c-flex-column item-opt-column" :class="item.select ? 'actOpt' : ''" :style="item.select ?style_themeColor: ''"
						 v-for="(item, index) in navData[actNav]" :key="index" @click="handleOpt(index)">
							{{ item.text }}
						</view>
		
						<view v-if="!(composeList[actNav] ||false)" class="item-opt c-flex-align" :class="item.select ? 'actOpt' : ''" :style="item.select ?style_themeColor: ''" v-for="(item, index) in navData[actNav]"
						 :key="index" @click="handleOpt(index)">
							{{ item.text }}
						</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
		
	</view>
	

</template>

<script>
	export default {
		props: {
			height: {
				type: Number,
				default: 108
			},
			top: {
				type: String,
				//default: 'calc(var(--window-statsu-bar) + 44px)'
				default: '0px',
			},
			border: {
				type: Boolean,
				default: false
			},
			filterData: {
				//必填
				type: Array,
				default: () => {
					return [];
				}
			},
			defaultIndex: {
				//默认选中条件索引,超出一类时必填
				type: Array,
				default: () => {
					return [0];
				}
			},
			composeList: {
				//默认选中条件索引,超出一类时必填
				type: Array,
				default: () => {
					return [{
						name: '',
						isHen: false,
					}
					];
				}
			},
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		computed: {
			style_themeColor() {
				let that = this ;
				
				var style = '' ;
				
				if(that.themeColor.length>0){
					style = `color:${that.themeColor};`;
				}
				
				return style ;
			},
		},
		data() {
			return {
				navData: [],
				popupShow: false,
				showMask: false,
				actNav: null,

				selIndex: [] ,//选中条件索引
			};
		},
		created() {
			this.navData = this.filterData;
			this.selIndex = this.defaultIndex;
			this.keepStatus();
		},
		mounted() {
			// this.selDate = getCurDateTime().formatDate;
		},
		methods: {
			keepStatus() {
				this.navData.forEach(itemnavData => {
					itemnavData.map(child => {
						child.select = false;
					});
					return itemnavData;
				});
				for (let i = 0; i < this.selIndex.length; i++) {
					let selindex = this.selIndex[i];
					this.navData[i][selindex].select = true;
				}
			},
			navClick(index) {
				if (index === this.actNav) {
					this.tapMask();
					return;
				}
				this.popupShow = true;
				this.showMask = true;
				this.actNav = index;
			},
			handleOpt(index) {
				this.selIndex[this.actNav] = index;
				this.keepStatus();
				setTimeout(() => {
					this.tapMask();
				}, 100);
				let data = [];
				let res = this.navData.forEach(item => {
					let sel = item.filter(child => child.select);
					data.push(sel);
				});
				console.log(data);
				this.$emit('onSelected', data);
			},

			tapMask() {
				this.showMask = false;
				this.popupShow = false;
				this.actNav = null;
			},

			discard() {}
		}
	};
</script>

<style lang="scss" scoped>
	.actNavname {
		font-size: 30upx;
		margin: 10upx;
		padding: 10upx;
	}

	.c-flex-column {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 16upx;
	}

	.c-flex-aligncenter {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.c-flex-align {
		display: flex;
		align-items: center;
	}

	.c-flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.filter-wrapper {
		font-size: 28rpx;
		position: absolute;
		left: 0;
		width: 750rpx;
		z-index: 9999;

		.inner-wrapper {

			// position: relative;
			.navs {
				position: relative;
				height: 90rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #fff;
				border-bottom: 2rpx solid #f5f6f9;
				// color: #8b9aae;
				z-index: 999;
				box-sizing: border-box;

				&>view {
					flex: 1;
					height: 100%;
					flex-direction: row;
					z-index: 999;
				}

				.date {
					justify-content: flex-end;
				}

				.actNav {
					// color: $uni-color-theme;
					font-weight: bold;
				}
			}

			.mask {
				z-index: 666;
				position: fixed;
				top: calc(var(--status-bar-height) + 44px);
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0);
				transition: background-color 0.15s linear;

				&.show {
					background-color: rgba(0, 0, 0, 0.4);
				}

				&.hide {
					display: none;
				}
			}

			.popup {
				position: relative;
				max-height: 500rpx;
				background-color: #fff;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				overflow: scroll;
				z-index: 999;
				transition: all 1s linear;
				opacity: 0;
				display: none;

				.item-opt {
					height: 100rpx;
					padding: 0 40rpx;
					// color: #8b9aae;
					border-bottom: 2rpx solid #f5f6f9;
				}

				.item-opt-column {
					margin-left: 5px;
					margin-top: 5px;
					text-align: center;
					line-height: 30px;
					width: 80px;
					height: 30px;
					border: 1px solid #ccc;
					border-radius: 2px;
				}

				.actOpt {
					// color: $uni-color-theme;
					font-weight: bold;
					position: relative;

					&::after {
						// content: '✓';
						font-weight: bold;
						font-size: 36rpx;
						position: absolute;
						right: 40rpx;
					}
				}
			}

			.popupShow {
				display: block;
				opacity: 1;
			}
		}

		.icon-triangle {
			width: 16rpx;
			height: 16rpx;
			margin-left: 10rpx;
		}
	}
</style>

<!--参考插件： https://ext.dcloud.net.cn/plugin?id=2315 -->