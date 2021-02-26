<template>

	<div class="wrap">
		<div class="zaxis_p"></div>
		<div class="zaxis_n"></div>
	</div>
</template>

<script>
	import MagicBox from './js/magic_cube/magicBox.js'
	export default {
		components: {

		},
		props: {

		},
		computed: {


		},

		watch: {

		},
		data() {
			return {

			};
		},
		created: function() {
			this.onload()
		},
		methods: {
			
			onload() {

				//* 魔方绘制示例
				var magicBox = new MagicBox(3, 50);
				magicBox.DrawIn(document.querySelector(".wrap"));

				var rotates = GenRotateActions(3, 5);
				for (var i = 0; i < rotates.length; i++) {
					setTimeout(function(magicBox, rotate) {
						return function() {
							magicBox.Rotate(rotate.axis, rotate.level, rotate.turn);
						};
					}(magicBox, rotates[i]), 3000 + 800 * i);
				}

				for (var i = 0; i < rotates.length; i++) {
					setTimeout(function(magicBox, rotate) {
						return function() {
							magicBox.Rotate(rotate.axis, rotate.level, (rotate.turn == 'left' ? 'right' : 'left'));
						};
					}(magicBox, rotates[rotates.length - 1 - i]), 1000 + 8800 + 800 * i);
				}
			},

			/** 产生一个指定数量的旋转序列数组
			 * dimension 魔方阶数
			 * count 序列数量
			 **/
			GenRotateActions(dimension, count) {
				var result = [];
				for (var i = 0; i < count; i++) {
					result[i] = {
						axis: ['x', 'y', 'z'][Math.floor(Math.random() * 3)],
						level: Math.floor(Math.random() * dimension),
						turn: ['left', 'right'][Math.floor(Math.random() * 2)]
					};
				}
				return result;
			},
		},
	}
</script>

<style lang="scss">
	.wrap {
		transform-style: preserve-3d;
		width: 300px;
		height: 300px;
		position: relative;
		/* 定位起点元素 */
		border-top: solid 1px gray;
		/* x 轴 */
		border-left: solid 1px gray;
		/* y 轴 */
		/* 倾斜一点方能见立体效果 */
		transform: rotateX(-30deg) rotateY(-30deg);
	}

	/* z 轴正方向 */
	.zaxis_p {
		position: absolute;
		width: 300px;
		height: 1px;
		border-top: solid 1px gray;
		/* xy面上，90度立起来就是 z */
		transform: rotateY(-90deg);
		/* 立起来的旋转点 */
		transform-origin: 0 0 0;
	}

	/* z 轴负方向 */
	.zaxis_n {
		position: absolute;
		width: 300px;
		height: 1px;
		border-top: dashed 1px gray;
		/*（虚线）*/
		transform: rotateY(90deg);
		transform-origin: 0 0 0;
	}

	.block {
		position: absolute;
		margin: 0 auto;
		border: solid 2px black;
		border-radius: 3px;
		/* 宽高包含边框 */
		box-sizing: border-box;
		transform-origin: 0 0 0;
	}

	.cube {
		position: absolute;
		/* 子元素版面是需要三维空间的 */
		transform-style: preserve-3d;
	}

	.magicBox {
		position: absolute;
		transform-style: preserve-3d;
	}
</style>
