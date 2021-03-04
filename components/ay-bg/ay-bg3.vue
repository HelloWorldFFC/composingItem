<template>
	<view>
		<view class="box">
			<span class="box3">丝带效果3</span>
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
	.box3 {
		display: inline-block;
		position: absolute;
		width: 150px;
		height: 50px;
		line-height: 50px;
		padding-left: 15px;
		background: #59324C;
		left: -8px;
		top: 20px
	}

	.box3:before,
	.box3:after {
		content: "";
		position: absolute;
	}

	.box3:before {
		height: 0;
		width: 0;
		border-bottom: 8px solid black;
		border-left: 8px solid transparent;
		top: -8px;
		left: 0;
	}

	.box3:after {
		height: 0;
		width: 0;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 15px solid #59324C;
		right: -15px;
	}

	
</style>
