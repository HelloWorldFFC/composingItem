/** 版面 block 类
 * direct 方向
 * color  颜色
 * size   边长大小
 **/
class Block {
	constructor(direct, color, size) {
		// opts = opts || {}
		// this.page = page

		// this.direct = opts.direct || 0.3
		// this.color = opts.color || 0.3
		// this.size = opts.size || 0.3
		
		this.direct = direct || 0.3
		this.color = color || 0.3
		this.size = size || 0.3

		this.init()
	}

	init() {
		
		// 绘制过的 UI 元素对象
		this.Element = null;

	}
	
	// 在父容器中绘制
	DrawIn(cubeElement){
		var e = this.Element || document.createElement('div');
		e.style.width = this.size + "px";
		e.style.height = this.size + "px";
		
		var top = (this.direct == 'down' ? this.size : 0);
		var left = (this.direct == 'right' ? this.size : 0);
		
		e.style.top = top + "px";
		e.style.left = left + "px";
		e.style.backgroundColor = this.color;
		
		var rx = (this.direct == 'up' || this.direct == 'down' ? -90 : 0);
		var ry = (this.direct == 'left' || this.direct == 'right' ? 90 : 0);;
		var tz = (this.direct == 'back' ? this.size : 0);
		
		e.style["transform"] = "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateZ(-" + tz + "px)";
		e.className = "block";
		this.Element = e;
		cubeElement.appendChild(e);
	}

}

export default Block
