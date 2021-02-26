<template>
	<view class="box-view">
		<view style="position: relative;" class="box-view">
			<view class="box box-view">
				<view v-for="(item,index) in 6" :key="index" class="box-view">
					<span v-for="(item,index) in 5" :key="index"></span>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
</script>

<style lang="scss">
	

	.box {
		animation: ani 4s linear infinite;
	}

	.box-view {
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotate3d(0, 1, 0, 72deg);
		position: absolute;
		left: 50%;
		top: 50%;
	}

	span {
		/*利用边框做一个三角形*/
		border-color: transparent transparent rgba(255, 255, 255, 0.5) transparent;
		/*每个span下方设置颜色，其余边透明*/
		border-width: 173.2upx 100upx;
		border-style: solid;
		width: 0;
		height: 0;
		position: absolute;
		left: 50%;
		margin-left: -100upx;
		top: 50%;
		margin-top: -346.4upx;
	}

	span:before {
		/*利用边框在span中做一个三角形，实现嵌套，让span变成边框,span:before变成要显示的东西*/
		content: '';
		border-color: transparent transparent rgba(255,105,180, 0.5) transparent;
		/*设置每面的颜色*/
		border-width: 165.2upx 92upx;
		border-style: solid;
		width: 0;
		height: 0;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin-top: 4upx;
	}

	view span:nth-child(1) {
		transform: rotate3d(0, 1, 0, 72deg) rotate3d(1, 0, 0, 51.5deg);
	}

	view span:nth-child(2) {
		transform: rotate3d(0, 1, 0, 144deg) rotate3d(1, 0, 0, 51.5deg);
	}

	view span:nth-child(3) {
		transform: rotate3d(0, 1, 0, 216deg) rotate3d(1, 0, 0, 51.5deg);
	}

	view span:nth-child(4) {
		transform: rotate3d(0, 1, 0, 288deg) rotate3d(1, 0, 0, 51.5deg);
	}

	view span:nth-child(5) {
		transform: rotate3d(0, 1, 0, 360deg) rotate3d(1, 0, 0, 51.5deg);
	}

	.box view:nth-child(1) {
		transform: translateY(51upx) rotateY(108deg) rotateX(116deg) translateZ(31upx);
	}

	.box view:nth-child(2) {
		transform: translateY(51upx) rotateY(180deg) rotateX(116deg) translateZ(31upx);
	}

	.box view:nth-child(3) {
		transform: translateY(51upx) rotateY(252deg) rotateX(116deg) translateZ(31upx);
	}

	.box view:nth-child(4) {
		transform: translateY(51upx) rotateY(324deg) rotateX(116deg) translateZ(31upx);
	}

	.box view:nth-child(5) {
		transform: translateY(51upx) rotateY(396deg) rotateX(116deg) translateZ(31upx);
	}

	@keyframes ani {
		100% {
			transform: rotateY(360deg);
		}
	}
</style>
