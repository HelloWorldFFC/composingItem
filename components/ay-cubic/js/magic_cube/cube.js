import Block from './block.js'
/** 魔方格 Cube 类
 * blockSize 为魔方格的边长代表大小
 * directColorArray 为指定方向与颜色的数组
 *                  形式为 [direct,color,direct,color,...] 
 * x,y,z 为在魔方中的坐标，未指定时默认为0,0,0
 **/
class Cube {
	constructor(blockSize, directColorArray, x, y, z) {
		// opts = opts || {}
		// this.page = page

		// this.blockSize = opts.blockSize;
		// this.directColorArray = opts.directColorArray;
		// this.x = opts.x | 0;
		// this.y = opts.y | 0;
		// this.z = opts.z | 0;
		
		this.blockSize = blockSize;
		this.directColorArray = directColorArray;
		this.x = x | 0;
		this.y = y | 0;
		this.z = z | 0;

		this.init()
	}

	init() {

		this.blocks = [];
		/* 根据参数建立 Block 对象 */
		for (var i = 0; i < this.directColorArray.length / 2; i++) {
			this.blocks.push(new Block(this.directColorArray[i * 2], this.directColorArray[i * 2 + 1], this.blockSize));
		}

		// 绘制过的 UI 元素对象
		this.Element = null;

	}
	// 在父容器中绘制
	DrawIn(boxElement, x, y, z){
		this.x = x | this.x;
		this.y = y | this.y;
		this.z = z | this.z;
		var e = this.Element || document.createElement('div');
		e.style.width = this.blockSize + "px";
		e.style.height = this.blockSize + "px";
		e.style["transform"] = this.FormatTransform();
		e.className = "cube";
		
		for (var i = 0; i < this.blocks.length; i++) {
			this.blocks[i].DrawIn(e);
		}
		
		this.Element = e;
		
		boxElement.appendChild(e);
	}
	
	Rotate(axis, turn, dimension){
		if(!this.Element) return;
		        // 重绘魔方格
		        this.ReDrawBlocks(axis, turn);
		        // 转换坐标
		        this.TransCoordinate(axis, turn, dimension);
		         
		        // 先停止动画效果，逆向 90 度，此时外观跟旋转前一致
		        this.Element.style["transition"] = "";
		        var rotateDegs = new Object();
		        rotateDegs[axis] = (turn == 'left' ? -90 : 90); 
		        this.Element.style["transform"] = this.FormatTransform(rotateDegs);
		        // 旋转原点旋转的层都需要以魔方的中心点旋转
		        // 旋转原点是以元素自身来计算的，因所有魔方格都是从(0,0,0)平衡的，因此计算结果都一样
		        var centerX = this.blockSize * dimension / 2;
		        var centerY = this.blockSize * dimension / 2;
		        var centerZ = -this.blockSize * dimension / 2;
		        this.Element.style["transformOrigin"] = centerX + "px " + centerY + "px " + centerZ + "px";
		 
		        // 这样才能触发动画
		        setTimeout(function(obj){
		            return function(){
		                obj.Element.style["transform"] = obj.FormatTransform();
		                obj.Element.style["transition"] = "transform 0.5s";  // 0.3 秒
		            };
		        }(this), 1);
	}
	/** 坐标转换
	 * axis 轴向
	 * turn 转向
	 * dimension 阶数
	 **/
	TransCoordinate(axis, turn, dimension){
		if (axis == 'x') {
			if (turn == 'left') {
				var oriy = this.y;
				this.y = this.z;
				this.z = dimension - 1 - oriy;
			} else {
				var oriz = this.z;
				this.z = this.y;
				this.y = dimension - 1 - oriz;
			}
		} else if (axis == 'y') {
			if (turn == 'right') {
				var orix = this.x;
				this.x = this.z;
				this.z = dimension - 1 - orix;
			} else {
				var oriz = this.z;
				this.z = this.x;
				this.x = dimension - 1 - oriz;
			}
		} else if (axis == 'z') {
			if (turn == 'right') {
				var orix = this.x;
				this.x = this.y;
				this.y = dimension - 1 - orix;
			} else {
				var oriy = this.y;
				this.y = this.x;
				this.x = dimension - 1 - oriy;
			}
		}
	}
	/** 将各 block 调整位置，重绘魔方格
	 * axis 轴向
	 * turn 转向
	 **/
	ReDrawBlocks(axis, turn){
		var xyzDirects = [];
		xyzDirects['x'] = ["front", "up", "back", "down"];
		xyzDirects['y'] = ["front", "right", "back", "left"];
		xyzDirects['z'] = ["up", "right", "down", "left"];
		var curDirects = xyzDirects[axis];
		
		for (var i = 0; i < this.blocks.length; i++) {
			var index = curDirects.indexOf(this.blocks[i].direct);
			if (index > -1) {
				var newIndex = turn == 'left' ? (index + 1) % 4 : (index + 4 - 1) % 4;
				this.blocks[i].direct = curDirects[newIndex];
				this.blocks[i].DrawIn(this.Element);
			}
		}
	}
	// 格式仳 transform 属性
	// css3 把旋转与平移混一起（真不好用）
	FormatTransform(rotateDegs){
		var rotatePart = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
		if (rotateDegs) {
			rotatePart = "rotateX(" + (rotateDegs.x | 0) + "deg) rotateY(" + (rotateDegs.y | 0) + "deg) rotateZ(" + (
				rotateDegs.z | 0) + "deg)";
		}
		
		return rotatePart + " translate3d(" + (this.x * this.blockSize) + "px," + (this.y * this.blockSize) + "px,-" + (
			this.z * this.blockSize) + "px) ";
	}
}

export default Cube
