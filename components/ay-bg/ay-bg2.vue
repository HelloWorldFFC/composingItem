<template>
	<view>
		<view class="box">
			<span class="box2">丝<br>带<br>效<br>果<br>2</span>
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
		--main-color: #F47530;
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


	.box2 {
		display: inline-block;
		width: 60px;
		padding: 10px 0;
		background: --main-color;
		top: -6px;
		left: 25px;
		position: absolute;
		text-align: center;
		border-top-left-radius: 3px;
	}

	.box2:before {
		height: 0;
		width: 0;
		border-bottom: 6px solid #8D5A20;
		border-right: 6px solid transparent;
		right: -6px;
		top: 0;
	}

	.box2:before,
	.box2:after {
		content: "";
		position: absolute;
	}

	.box2:after {
		height: 0;
		width: 0;
		border-left: 30px solid --main-color;
		border-right: 30px solid --main-color;
		border-bottom: 30px solid transparent;
		bottom: -30px;
		left: 0;
	}

	
</style>
