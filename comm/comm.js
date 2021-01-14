
const getitemPara = (itemList) => {
	
	let that = this;
	let itemWidth = 30;
	let itemHeight = 140 ;
	let itemNum = itemList.length;
	switch (itemNum) {
		case 1:
			itemWidth = 97;
			itemHeight = 200 ;
			break;
		case 2:
			itemWidth = 46;
			itemHeight = 200 ;
			break;
		case 3:
			itemWidth = 30;
			itemHeight = 200 ;
			break;
	
		case 4:
			itemWidth = 46;
			itemHeight = 140 ;
			break;
	}
	return  {
		'itemWidth': itemWidth,
		'itemHeight': itemHeight
	};
}

module.exports = {
	getitemPara,
}
