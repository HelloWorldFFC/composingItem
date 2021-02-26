
## 前言
简介：
1.旋转体效果组件：
	有5个类型：1:旋转2:旋转立方体3:二十面体4:双旋转立方体5:旋转魔方
2.自定义长宽，和显示内容等，开箱即用

## 有疑问
微信搜索“慢慢向好”小程序，找客服反馈，相应问题。
				  

## 素材
[图片资源](https://pixabay.com)

## 示例项目可直接运行 
## 开始使用
下载源码解压，复制`/components` 下的组件至项目根目录的 `/components` 文件夹下

`index.vue`的`script`加入如下部分（自行选择需要展示的部分）：
```
import shutLoose from '@/components/ay-cubic/shut_loose.vue';
	import thDTwo from '@/components/ay-cubic/thD_two.vue';
	import twtySets from '@/components/ay-cubic/twty_sets.vue';
	import shutLooseTwo from '@/components/ay-cubic/shut_loose_two.vue';
	import magicCubeAuto from '@/components/ay-cubic/magic_cube_auto.vue';

	export default {
		components: {
			shutLoose,
			thDTwo,
			twtySets,
			shutLooseTwo,
			magicCubeAuto,

		},
		data() {
			return {
				//改变该值，可以显示不一样的
				type: 4, //1旋转2旋转立方体3二十面体4双旋转立方体5旋转魔方
				list_th: [{
						img: 'https://cdn.pixabay.com/photo/2020/11/22/12/45/flowers-5766495__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/11/22/16/58/road-5767221__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/04/11/14/42/street-5030692__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',

					},
					{
						img: 'https://cdn.pixabay.com/photo/2020/12/01/15/26/lighthouse-5794639__340.jpg',

					},

					{
						img: 'https://cdn.pixabay.com/photo/2020/11/19/15/32/sculpture-5758884__340.jpg',

					},
					{
						img: 'https://cdn.pixabay.com/photo/2020/11/22/12/45/flowers-5766495__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/11/22/16/58/road-5767221__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/04/11/14/42/street-5030692__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',

					},
					{
						img: 'https://cdn.pixabay.com/photo/2020/12/01/15/26/lighthouse-5794639__340.jpg',

					},

					{
						img: 'https://cdn.pixabay.com/photo/2020/11/19/15/32/sculpture-5758884__340.jpg',

					},
				],
				list_two: [{
						img: 'https://cdn.pixabay.com/photo/2020/11/22/12/45/flowers-5766495__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/11/22/16/58/road-5767221__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2020/04/11/14/42/street-5030692__340.jpg',

					},
					{

						img: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',

					},
					{
						img: 'https://cdn.pixabay.com/photo/2020/12/01/15/26/lighthouse-5794639__340.jpg',

					},

					{
						img: 'https://cdn.pixabay.com/photo/2020/11/19/15/32/sculpture-5758884__340.jpg',

					},
				],
				list: [],
				isLoaded: false,
				
				margin_t_b_ma: 200,
				margin_t_b_td: 4,
				bg_img_sl: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',

			}
		},
		onLoad(options) {
			let that = this;


			that.pageShowHander();
			that.loadData()
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			async loadData() {
				let that = this;


			},
			pageShowHander() {
				let that = this;
				

			},

		}
	}

```


`index.vue`的`template`加入如下部分：
```
<view>

		<thDTwo v-if="type==1" :list="list_two" :margin_t_b="margin_t_b_td" :height="180" :width="210" :height_t="200"
		 :width_t="220"></thDTwo>

		<shutLoose v-if="type==2" :list="list_two" :bg_img="bg_img_sl" :height="200" :width="200"></shutLoose>
		<twtySets v-if="type==3"></twtySets>

		<shutLooseTwo v-if="type==4" :list="list_th" :margin_t_b="margin_t_b_ma" :height="200" :width="200" :height_in="100"
		 :width_in="100"></shutLooseTwo>

		<magicCubeAuto v-if="type==5" :w_h="300" :margin_t_b="margin_t_b_ma" :w_h_item="90" :margin_item="5"></magicCubeAuto>

	</view>

```
 

## 参考
[参考链接1](https://www.cnblogs.com/zyrblog/p/11142624.html)
