import Cube from './cube.js'

/** 魔方 MagicBox 类
 * dimension 阶数
 * blockSize 每小格大小
 **/
class MagicBox {
	constructor(dimension,blockSize) {
		//page, opts
		// opts = opts || {}
		// this.page = page

		// this.dimension = opts.dimension || 0.3
		// this.blockSize = opts.blockSize || 0.3
		console.log('constructor')
		this.dimension = dimension || 0.3
		this.blockSize = blockSize || 0.3
		
		this.init();
	}

	init() {

		this.cubes = [];

		// 构造时自动产生初始魔方格
		this.MakeDefaultCubes();
		// 绘制过的 UI 元素对象
		this.Element = null;
		
	}
	// 自动产生初始魔方格
	MakeDefaultCubes(){
		this.cubes = [];
		for (var x = 0; x < this.dimension; x++) {
			for (var y = 0; y < this.dimension; y++) {
				for (var z = 0; z < this.dimension; z++) {
					var cube = this.MakeDefaultCube(x, y, z);
					if (cube) {
						this.cubes.push(cube);
						console.log(this.cubes)
					}
				}
			}
		}
	}
	/* 根据魔方格在阶数中的位置生成魔方格，魔方内部的格子忽略 */
	MakeDefaultCube(x, y, z){
		var max = this.dimension - 1;
		var dc = [];
		if (x == 0) dc.push("left", "orange");
		else if (x == max) dc.push("right", "red");
		if (y == 0) dc.push("up", "yellow");
		else if (y == max) dc.push("down", "white");
		if (z == 0) dc.push("front", "blue");
		else if (z == max) dc.push("back", "green");
		if (dc.length == 0) return null;
		var cube = new Cube(this.blockSize, dc, x, y, z);
		return cube;
	}
	// 在父容器中绘制
	DrawIn(domElement){
		console.log(domElement)
		var e = this.Element || document.createElement('div');
		e.style.width = (this.dimension * this.blockSize) + "px";
		e.style.height = (this.dimension * this.blockSize) + "px";
		e.className = "magicBox";
		
		for (var i = 0; i < this.cubes.length; i++) {
			this.cubes[i].DrawIn(e);
		}
		this.Element = e;
		domElement.appendChild(e);
	}
	/** MagicBox.Rotate 旋转
	 * axis 轴向
	 * level 层
	 * turn 转向
	 **/
	Rotate(axis, level, turn){
		for (var i = 0; i < this.cubes.length; i++) {
			if (this.cubes[i][axis] == level) { // 该轴该层的才旋转
				this.cubes[i].Rotate(axis, turn, this.dimension);
			}
		}
	}
}

export default MagicBox
