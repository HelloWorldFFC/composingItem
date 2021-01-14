<template>
	<view class="container">
		<view class="dot"></view>
		<view class="wave"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.container {
		position: relative;
		width: 100px;
		height: 100px;
		margin: 0 auto;
	}

	.dot {
		position: absolute;
		left: 15px;
		top: 15px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
	}

	.wave {
		position: absolute;
		left: 2px;
		top: 300px;
		width: 100px;
		height: 100px;
		border: 6px solid #FFFFFF;
		border-radius: 50%;
		opacity: 0;
		animation: waveCircle 3s ease-out;
		animation-iteration-count: infinite;
	}

	@-webkit-keyframes waveCircle {
		0% {
			transform: scale(0);
			opacity: 0;
		}

		10% {
			transform: scale(0.1);
			opacity: 0.1;
		}

		20% {
			transform: scale(0.2);
			opacity: 0.2;
		}

		30% {
			transform: scale(0.3);
			opacity: 0.3;
		}

		75% {
			transform: scale(0.6);
			opacity: 0.5;
		}

		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
