<template>
	<view>
		<view class="box">
			<view class="wrap"><span class="box6">丝带效果6</span></view>
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

	.wrap {
		width: 100%;
		height: 188px;
		position: absolute;
		top: -8px;
		left: 8px;
		overflow: hidden;
	}

	.wrap:before {
		content: "";
		display: block;
		border-radius: 8px 8px 0px 0px;
		width: 40px;
		height: 8px;
		position: absolute;
		right: 100px;
		background: #4D6530;
	}

	.wrap:after {
		content: "";
		display: block;
		border-radius: 0px 8px 8px 0px;
		width: 8px;
		height: 40px;
		position: absolute;
		right: 0px;
		top: 100px;
		background: #4D6530;
	}

	.box6 {
		display: inline-block;
		text-align: center;
		width: 200px;
		height: 40px;
		line-height: 40px;
		position: absolute;
		top: 30px;
		right: -50px;
		z-index: 2;
		overflow: hidden;
		transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		border: 1px dashed;
		box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
		background: #57DD43;
	}

</style>
