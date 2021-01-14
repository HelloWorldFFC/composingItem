<template>
	<view>
		<view style="text-align: center;" >
			<view  class="topBox" :style="style_top" ></view>
			<view  class="fireWorkBox" ></view>
		</view>
		
	</view>
</template>

<script>
	export default {
			components: {
	
			},
	
			data() {
				return {
					
				}
			},
			props: {
				
				top_height: {
					type: Number,
					default: 0
				},
				
				themeColor: {
					type: String,
					default: '',
				},
			},
			computed: {
				style_top() {
					let that = this ;
					var top_height = that.top_height;
					
					var style = '' ;
					if(top_height > 0){
						style = `height:${top_height}rpx;`;
					}
					return style ;
				},
				
			},
			methods: {
				
			}
		}
	
</script>

<style lang="scss">
	.topBox{
		// text-align: center;
		height: 400upx;
	}
	.fireWorkBox {
	        content: '';
	        width: 10upx;
	        height: 10upx;
	        display: inline-block;
	        animation-name: fireWork;
	        animation-duration: 1s;
	        animation-iteration-count: infinite;
	    }
	
	    @keyframes fireWork {
	        from {
	            box-shadow: none;
	        }
	
	        10% {
	            box-shadow: 10upx     0upx 0 #FF00FF, -10upx     0upx 0 #FF00FF;
	        }
	
	        20% {
	            box-shadow: 40upx   -30upx 0 #FF7F50, 70upx   -10upx 0 #00FFFF, 130upx -20upx 0 #9932CC, 230upx   0 0 #00FFFF,
	                    -40upx   -30upx 0 #FF7F50, -70upx   -10upx 0 #00FFFF,-130upx -20upx 0 #9932CC, -230upx   0 0 #00FFFF;
	        }
	
	        30% {
	            box-shadow: 
	                    80upx   -70upx 0 #00FF00,100upx   -40upx 0 #FF00FF, 190upx -30upx 0 #FF00FF,
	                    -80upx   -70upx 0 #00FF00,-100upx   -40upx 0 #FF00FF, -190upx -30upx 0 #FF00FF;
	        }
	
	        40% {
	            box-shadow:130upx -110upx 0 #FF00FF,150upx   -60upx 0 #ADFF2F,
	                      -130upx -110upx 0 #FF00FF,-150upx   -60upx 0 #ADFF2F;
	        }
	
	        70% {
	            box-shadow: 200upx  -80upx 0 #00FFFF, 
	                    -200upx  -80upx 0 #00FFFF;
	        }
	
	        80% {
	            box-shadow: 250upx  -30upx 0 #FF7F50, 
	                       -250upx  -30upx 0 #FF7F50;
	        }
	
	        90% {
	            box-shadow:280upx   20upx 0 #FF00FF,
	                      -280upx   20upx 0 #FF00FF;
	        }
	    }
</style>
