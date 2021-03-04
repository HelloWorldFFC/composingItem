<template>
	<view>
		<view ref="ani" :animation="animationData" class="message round bg-gradual-orange flex justify-start shadow" style="padding: 3px;"
		 :style="style" v-if="show">
			<view class="cu-avatar cu-a-sm round" :style="{ backgroundImage: `url(${content.img})` }">
				<!-- #ifdef APP-NVUE -->
				<image :src="content.img" class="avatarimg"></image>
				<!-- #endif -->
			</view>
			<view class="padding-lr-sm flex align-center">
				<text class="text-sm">{{ content.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const animation = uni.requireNativePlugin('animation');
	// #endif
	export default {
		name: 'fadeInOut',
		props: {
			//持续时间
			duration: {
				type: Number,
				default: 2600
			},
			//停留时间
			wait: {
				type: Number,
				default: 3000
			},
			//顶部距离px
			top: {
				type: Number,
				default: 350
			},
			//左边距离px
			left: {
				type: Number,
				default: 10
			},
			//动画半径
			radius: {
				type: Number,
				default: 30
			},
			//是否循环显示
			loop: {
				type: Boolean,
				default: true
			},
			//数据列表
			list: {
				type: [Array, Object],
				default: () => {
					return []
				}
			},
			//追加数据列表
			concat: {
				type: [Array, Object],
				default: () => {
					return []
				}
			},
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			themeColor_dan: {
				type: String,
				default: '#AFEEEE',
			},
			themeColor_dan_RGB: {
				type: String,
				default: '175,238,238',
			},
		},
		
		data() {
			return {
				animationData: {},
				content: [],
				show: true,
				lists: this.list
			};
		},
		computed: {
			style() {
				let that = this ;
				var top = parseInt(that.top);
				var left = parseInt(that.left);
				var style = '' ;
				
				if(top>0){
					style = `top:${top*2}rpx;`;
				}
				if(left>0){
					style += `left:${left*2}rpx;`;
				}
				
				style += `background-image: linear-gradient(45deg, ${that.themeColor_dan}, ${that.themeColor}); `;
				
				style += `box-shadow: 4px 4px 5px rgba(${that.themeColor_dan_RGB}, 0.2); `;
				
				/* #ifndef APP-NVUE */
				//background-image: linear-gradient(45deg, #ff9700, #ed1c24);
				/* #endif */
				/* #ifdef APP-NVUE */
				//background-image: linear-gradient(to bottom right, #ff9700, #ed1c24);
				/* #endif */
				
				return style ;
			},
			
		},
		mounted() {
			this.listsChange();
		},
		watch: {
			concat(list) {
				
				this.lists = this.lists.concat(list);
			},
			list(e) {
				
				this.lists = e;
				this.show = true;//数据初始化，不然没有效果
				this.listsChange();
			}
		},
		methods: {
			listsChange(){
				if (this.lists.length == 0) {
					this.show = false;
					return;
				}
				
				let count = 0;
				this.content = this.lists[0];
				this.donghua();
				
				let timer = setInterval(() => {
					if (!this.loop && count >= this.lists.length - 2) clearInterval(timer);
					if (count >= this.lists.length - 1) {
						count = -1;
						this.$emit("finish", true);
					}
					if (this.lists.length > 0 && count <= this.lists.length) {
						count++;
						this.content = this.lists[count];
						this.donghua();
					}
				}, this.wait + this.duration);
			},
			donghua() {
				//进入
				// #ifndef APP-NVUE
				this.animationData = uni
					.createAnimation({
						duration: this.duration / 2,
						timingFunction: 'ease'
					})
					.top(this.top - this.radius)
					.opacity(0.9)
					.step()
					.export();
				// #endif

				// #ifdef APP-NVUE
				if (!this.$refs['ani']) return;
				animation.transition(
					this.$refs['ani'].ref, {
						styles: {
							transform: `translateY(-${this.radius/2}px)`,
							opacity: 1
						},
						duration: this.duration / 2,
						timingFunction: 'linear',
						needLayout: false,
						delay: 0
					}
				);
				// #endif

				//停留
				setTimeout(() => {
					//消失
					// #ifndef APP-NVUE
					this.animationData = uni
						.createAnimation({
							duration: this.duration / 2,
							timingFunction: 'ease'
						})
						.top(this.top - this.radius * 2)
						.opacity(0)
						.step()
						.export();
					// #endif

					// #ifdef APP-NVUE
					if (!this.$refs['ani']) return;
					animation.transition(
						this.$refs['ani'].ref, {
							styles: {
								transform: `translateY(-${this.radius*2}px)`,
								opacity: 0
							},
							duration: this.duration / 2,
							timingFunction: 'linear',
							needLayout: false,
							delay: 0
						}
					);
					// #endif

					//复位
					setTimeout(() => {
						// #ifndef APP-NVUE
						this.animationData = uni
							.createAnimation({
								duration: 0,
								timingFunction: 'ease'
							})
							.top(this.top)
							.opacity(0)
							.step()
							.export();
						// #endif

						// #ifdef APP-NVUE
						animation.transition(
							this.$refs['ani'].ref, {
								styles: {
									transform: `translateY(${this.radius/2}px)`
								},
								duration: 0,
								timingFunction: 'linear',
								needLayout: false,
								delay: 0
							}
						);
						// #endif
					}, this.duration / 2);
				}, this.wait);
			}
		}
	};
</script>

<style scoped>
	.message {
		position: fixed;
		z-index: 99999;
		opacity: 0;
	}

	.round {
		border-radius: 5000px;
	}

	.bg-gradual-orange {
		
		
		color: #ffffff;
	}


	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.justify-start {
		justify-content: flex-start;
	}

	.cu-avatar {
		/* #ifndef APP-NVUE */
		font-variant: small-caps;
		display: inline-flex;
		white-space: nowrap;
		background-size: cover;
		background-position: center;
		vertical-align: middle;
		/* #endif */
		margin: 0;
		padding: 0;
		text-align: center;
		justify-content: center;
		align-items: center;
		background-color: #ccc;
		color: #ffffff;
		position: relative;
		width: 30px;
		height: 30px;
		font-size: 1.5em;
	}

	/* #ifdef APP-NVUE */
	.avatarimg {
		width: 30px;
		height: 30px;
		border-radius: 50px;
	}

	/* #endif */

	.cu-a-sm {
		width: 30px;
		height: 30px;
		font-size: 1em;
	}

	.padding-lr-sm {
		padding-left: 20upx;
		padding-right: 20upx;
	}

	.align-center {
		align-items: center;
	}

	.margin-left-xs {
		margin-left: 10upx;
	}

	.text-bold {
		font-weight: bold;
	}

	.margin-lr-sm {
		margin-left: 20upx;
		margin-right: 20upx;
	}

	.text-sm {
		font-size: 15px;
		color: #ffffff;
	}
</style>
