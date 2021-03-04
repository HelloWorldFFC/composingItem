<template>
	<view>
		
		<view class="box">
			<span class="box1"><span>特惠价</span></span>
			<view style="margin-top: 66upx;">
				<slot />
			</view>
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

	.box1 {
		position: absolute;
		top: -6px;
		right: 10px;
	}

	.box1:after {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-left: 53px solid transparent;
		border-right: 53px solid transparent;
		border-top: 10px solid #F8463F;
	}

	.box1 span {
		position: relative;
		display: inline-block;
		text-align: center;
		background: #F8463F;
		font-size: 14px;
		line-height: 1;
		padding: 12px 8px 10px;
		border-top-right-radius: 8px;
		width: 90px;
	}

	.box1 span:before,
	.box1 span:after {
		position: absolute;
		content: "";
		display: block;
	}

	.box1 span:before {
		background: #F8463F;
		height: 6px;
		width: 6px;
		left: -6px;
		top: 0;
	}

	.box1 span:after {
		background: #C02031;
		height: 6px;
		width: 8px;
		border-radius: 8px 8px 0 0;
		left: -8px;
		top: 0;
	}

	
	
</style>
