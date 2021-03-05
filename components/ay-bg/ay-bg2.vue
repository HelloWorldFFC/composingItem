<template>
	<view>
		<view class="box">
			<span class="box4" :style="{background:themeColor}">{{title}}</span>
			<slot />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
		methods: {

		}
	};
</script>

<style lang="scss">
	
	.box {
		display: flex;
		justify-content: center;
		margin-left: 10px;
		width: 94%;
		height: 150px;
		position: relative;
		margin-bottom: 30px;
		background-color: #EEEEEE;
		color: #FFFFFF;
		
	}

	.box:nth-child(even) {
		margin-right: 4%;
	}

	@media (max-width:500px) {
		.ribbon {
			width: 100%
		}

		.box:nth-child(even) {
			margin-right: 0%;
		}
	}
	
	.box4 {
		position: absolute;
		left: 0;
		top: 15px;
		padding: 8px 10px;
		box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.5);
	}
	
	.box4:before,
	.box4:after {
		position: absolute;
		content: "";
		display: block;
	}

	.box4:before {
		width: 7px;
		height: 100%;
		padding: 0 0 7px;
		top: 0;
		left: -7px;
		background: inherit;
		border-radius: 5px 0 0 5px;
	}

	.box4:after {
		width: 5px;
		height: 5px;
		background: rgba(0, 0, 0, 0.35);
		bottom: -5px;
		left: -5px;
		border-radius: 5px 0 0 5px;
	}

	
</style>
