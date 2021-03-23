<template>
	<view>
		<view class="box-bg-four">
			<span class="box2-bg-four">{{str[0]}}<br>{{str[1]}}<br>{{str[2]}}<br>{{str[3]}}<br>{{str[4]}}</span>
			<slot />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str:['','','','',''],
			};
		},
		props: {
			state: {
				type: Number,
				default: 1, //1:可用  2:已用 3：过期 
			},
			
			title: {
				type: String,
				default: '新到',
			},
			
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		created:function(){
			let that = this;
			
			let title = that.title ;
			for(let i=0 ; i<title.length ; i++){
				that.str[i]= title.substr(i,1) ;
			}
			
		},
		methods: {

		}
	};
</script>

<style lang="scss">
	
	.box-bg-four {
		display: flex;
		justify-content: center;
		margin-left: 10px;
		width: 94%;
		height: 150px;
		position: relative;
		margin-bottom: 30px;
		background-color: #EEEEEE;
		color: #FFFFFF;
		/* css变量 */
		--main-color: #F47530;
		--f-color: #fff;
	}

	.box-bg-four:nth-child(even) {
		margin-right: 4%;
	}

	@media (max-width:500px) {
		.ribbon {
			width: 100%
		}

		.box-bg-four:nth-child(even) {
			margin-right: 0%;
		}
	}


	.box2-bg-four {
		display: inline-block;
		width: 60px;
		padding: 10px 0;
		background: var(--main-color);
		top: -6px;
		left: 25px;
		position: absolute;
		text-align: center;
		border-top-left-radius: 3px;
	}

	.box2-bg-four:before {
		height: 0;
		width: 0;
		border-bottom: 6px solid #8D5A20;
		border-right: 6px solid transparent;
		right: -6px;
		top: 0;
	}

	.box2-bg-four:before,
	.box2-bg-four:after {
		content: "";
		position: absolute;
	}

	.box2-bg-four:after {
		height: 0;
		width: 0;
		border-left: 30px solid  var(--main-color);
		border-right: 30px solid  var(--main-color);
		border-bottom: 30px solid transparent;
		bottom: -30px;
		left: 0;
	}

	
</style>
