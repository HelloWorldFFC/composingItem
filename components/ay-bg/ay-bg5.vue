<template>
	<view>
		<view class="box">
			<span class="box5">丝带效果5</span>
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
		
		methods: {

		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

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
		/* css变量 */
		--main-color: #EC407A;
		--f-color: #fff;
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

	

	.box5 {
		display: inline-block;
		width: calc(100% + 20px);
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin-left: -10px;
		margin-right: -10px;
		background: #EDBA19;
		position: relative;
		top: 20px;
	}

	.box5:before {
		content: "";
		position: absolute;
		height: 0;
		width: 0;
		border-top: 10px solid #cd8d11;
		border-left: 10px solid transparent;
		bottom: -10px;
		left: 0;
	}

	.box5:after {
		content: "";
		position: absolute;
		height: 0;
		width: 0;
		border-top: 10px solid #cd8d11;
		border-right: 10px solid transparent;
		right: 0;
		bottom: -10px;
	}

	
</style>
