<template>
	<view class="example">
		<view class="dot"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.example {
		position: relative;
		margin: 150px auto;
		width: 50px;
		height: 50px;
	}

	.dot:before {
		content: ' ';
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
		background-color: #FFFFFF;
		border-radius: 50%;
	}

	.dot:after {
		content: ' ';
		position: absolute;
		z-index: 1;
		width: 10px;
		height: 10px;
		background-color: #FFFFFF;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0, 0, 0, .3) inset;
		-webkit-animation: waveCircle 1s ease infinite normal;
		/*-webkit-animation-name: ripple;
		     -webkit-animation-duration: 1s;
		     -webkit-animation-timing-function: ease;
		     -webkit-animation-delay: 0s;
		     -webkit-animation-iteration-count: infinite;
		     -webkit-animation-direction: normal;*/
	}

	@keyframes waveCircle {
		0% {
			left: 5px;
			top: 5px;
			width: 0;
			height: 0;
		}

		100% {
			left: -20px;
			top: -20px;
			opacity: 0;
			width: 50px;
			height: 50px;
		}
	}
</style>
