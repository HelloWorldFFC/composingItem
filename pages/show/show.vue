<template>
	<view>
		<thDTwo v-if="type=='thDTwo'" :list="turn_thD_list" :margin_t_b="margin_t_b_td" :height="180" :width="210" :height_t="200"
		 :width_t="220"></thDTwo>

		<shutLoose v-if="type=='shutLoose'" :list="turn_thD_list" :bg_img="bg_img_sl" :height="200" :width="200"></shutLoose>
		<twtySets v-if="type=='twtySets'"></twtySets>

		<shutLooseTwo v-if="type=='shutLooseTwo'" :list="list_th" :margin_t_b="margin_t_b_ma" :height="200" :width="200"
		 :height_in="100" :width_in="100"></shutLooseTwo>

		<magicCubeAuto v-if="type=='magicCubeAuto'" :w_h="300" :margin_t_b="margin_t_b_ma" :w_h_item="90" :margin_item="5"></magicCubeAuto>

		<!-- #ifdef H5 -->
		<!-- #endif -->

		<scTxt v-if="type=='scTxt'" :txt="txt_sc" txtColor1="#00BFFF" txtColor2="#FF00FF" txtColor3="#d71345" txtColor4="#f7acbc"
		 txtColor5="#ADFF2F" txtColor6="#3498db" txtColor7="#f47920" txtColor8="#d71345" txtColor9="#f7acbc" txtColor10="#DDA0DD"
		 txtColor11="#3498db"></scTxt>


		<scBg v-if="type=='scBg'" :type="index+1" v-for="(item,index) in 4" :key="index" :height="200" :width="600">
			<view>
				<radar colorName="gold" :height="200" :width="200"></radar>
			</view>
		</scBg>

		<!-- 雷达和文字效果在组件里不行，直接在页面就可以 -->
		<radar v-if="type=='radar'" colorName="aqua" :height="400" :width="400"></radar>
		<radar v-if="type=='radar'" colorName="hotPink" :height="400" :width="400"></radar>
		<radar v-if="type=='radar'" colorName="lime" :height="400" :width="400"></radar>
		<radar v-if="type=='radar'" colorName="gold" :height="400" :width="400"></radar>
		<radar v-if="type=='radar'" colorName="orangeRed" :height="400" :width="400"></radar>


		<fireworkSati v-if="is_fkSati&&type=='fireworkSati'" :show_fw_re="is_fkSati" />

		<blow v-if="type=='blow'" canvasId="canvasId1" :height="200" :width="600" refs="card" style="margin: 0 40upx;"
		 @complete="seatShow" :disabled="false" title="刮文本" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow"
		 :result_txt="result_blow" themeColor="#33CCCC" :txtFontSize="txtFontSize_blow" :txtColor="txtColor_blow">
		</blow>

		<!-- <blowAny v-if="type==41" canvasId="canvasId1" :height="200" :width="600" refs="card" style="margin: 0 40upx;"
		 @complete="seatShow" :disabled="false" title="刮文本" watermark="刮一刮" @init="init_blow">
			<view class="blow" v-if="is_show_blow" style="height:200rpx;width:600rpx;position: absolute;">
				<view class="box" :style="{background: themeColor }">
					<view class="result" :style="[{'font-size':txtFontSize_blow+'rpx'},{color: txtColor_blow }]">
						<text>{{result_blow}}</text>
					</view>
		
				</view>
		
			</view>
		</blowAny> -->

		<blowImg v-if="type=='blowImg'" canvasId="canvasId2" :height="200" :width="600" refs="card" style="margin: 0 40upx;"
		 @complete="seatShow" :disabled="false" title="刮图片" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow"
		 :result_img="result_img_blow"></blowImg>

		<!-- <blowAny  v-if="type==42" canvasId="canvasId2" :height="200" :width="600" refs="card" style="margin: 0 40upx;" @complete="seatShow"
		 :disabled="false" title="刮图片" watermark="刮一刮" @init="init_blow">
			<view style="position: absolute;" v-if="is_show_blow" >
			
				<view>
					<image style="height:200rpx;width:600rpx;"  :src="result_img_blow"></image>
				</view>
			
			</view>
			
		
		</blowAny> -->

		<blowAny v-if="type=='blowAny'" canvasId="canvasId3" :height="200" :width="600" refs="card" style="margin: 0 40upx;"
		 @complete="seatShow" :disabled="false" title="刮自定义" watermark="刮一刮" @init="init_blow">
			<view style="position: absolute;" v-if="is_show_blow">
				<!-- 自定义内容 -->
				<view>
					<scBg :height="200" :width="600">
						<view>
							<radar colorName="hotPink" :height="200" :width="200"></radar>
						</view>
					</scBg>
				</view>

			</view>


		</blowAny>
		
		
		<wave1 v-if="type=='wave'" :width='600' :height='600' ></wave1>
		<wave2 v-if="type=='wave'"></wave2>
		<wave3 v-if="type=='wave'"></wave3>
		<wave4 v-if="type=='wave'"></wave4>
		
		
		<firework v-if="type=='firework'" :top_height='200'></firework>
		
		<firework v-if="type=='firework'" :top_height='300'></firework>
		
		<firework v-if="type=='firework'" :top_height='400'></firework>
		
		
		<aylottery :type="1" v-if="type=='aylottery1'" themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98"
		 un_seled_Color="#00BFFF" un_seled_t_Color="#33CCCC" :result_txt="result_turn" @show="show_turn" @again="again_turn"
		 :show_again="true" again_txt="重新开始" :tips_init="tips_init_turn" :no_z_init="no_z_init_turn"></aylottery>
		
		
		<aylottery :type="2" v-if="type=='aylottery2'" :list="lottery_list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun"
		 @toDetailPage="toDetailPage"></aylottery>
		
		<aylottery :type="2" v-if="type=='aylottery2'" :list="lottery_list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#F4A460" @result="resultFun"
		 @toDetailPage="toDetailPage" theme_img_bg="https://cdn.pixabay.com/photo/2021/02/17/12/04/winter-6024017__340.jpg" :is_img_bg="true" box_shadow_Color="#F0F8FF" bg_img="https://cdn.pixabay.com/photo/2018/05/12/03/18/love-3392348__340.jpg"></aylottery>
		 
		
		<aylottery :type="3" v-if="type=='aylottery3'" :list="list_r" :height="600" :width="600" :chance_num_init="chance_num_init" @result="resultFun_chance"
		 @toDetailPage="toDetailPage" :stay_index="stay_index_r"></aylottery>
		
		
		<aylottery :type="4" v-if="type=='aylottery4'" canvasId="canvasId1" :height="200" :width="600" refs="card" style="position: relative;margin: 20upx 40upx;"
		 @complete="seatShow" :disabled="false" title="刮文本" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow" :result_txt="result_blow" themeColor="#33CCCC" :txtFontSize="txtFontSize_blow" :txtColor="txtColor_blow">
		</aylottery>
		
		<aylottery :type="5" v-if="type=='aylottery5'" canvasId="canvasId2" :height="200" :width="600" refs="card" style="position: relative;margin: 0 40upx;" @complete="seatShow"
		 :disabled="false" title="刮图片" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow" :result_img="result_img_blow">
		 
		</aylottery>
		
		<aylottery :type="6" v-if="type=='aylottery6'" canvasId="canvasId3" :height="200" :width="600" refs="card" style="margin: 0 40upx;"
		 @complete="seatShow" :disabled="false" title="刮自定义" watermark="刮一刮" @init="init_blow">
			<view style="position: absolute;" v-if="is_show_blow">
				<!-- 自定义内容 -->
				<view>
					<scBg :height="200" :width="600">
						<view>
							<radar colorName="hotPink" :height="200" :width="200"></radar>
						</view>
					</scBg>
				</view>
		
			</view>
		
		
		</aylottery>
		
		<view style="margin-top: 130upx;" v-if="type=='ayturn3'">
			<!-- 3d的会影响闪动一下，但不影响单独使用 -->
			<ayturn :type="3" :height="400" :width="300" :cover="cover_auto"  :list="list_page_auto"></ayturn>
		</view>
		
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200"  :list="turn_thD_list"></ayturn>
		
		
		
		
		
		<ayturn v-if="type=='ayturn2'" :type="2" :height="640" :width="400" :list="list_page">
			
		</ayturn>
		
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		<ayturn v-if="type=='ayturn1'" :type="1" :height="100" :width="200" :marginTop="10" :list="turn_thD_list"></ayturn>
		
		<view style="margin-top: 130upx;" v-if="type=='ayturn4'">
			<ayturn v-if="type=='ayturn4'" :type="4"  :height="150" :width="150" :pros_img="pros_img" :cons_img="cons_img"></ayturn>
		</view>
		
		
		
		<ay-image-upload v-if="type=='ayImageUpload'"  :list="uploadTipList" @imgAdd="imgAddFun"></ay-image-upload>
		
		<view v-if="type=='ayQrcode'" style="margin-top: 26upx;margin: 40upx;">
			<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300"/>
		</view>
		
		<ayDropdownList v-if="type=='ayDropdownList'" :maxheight="700" :marginLeft="152" :width="70" :isShow="isShow_ddList" :list="seleTypeList" @selectItem="selectItem_ddList">
			<view style="margin-left: 40upx;" @tap="showDropdownList">自定义触发有下拉框的内容</view>
		</ayDropdownList>
		
		<ayPopTips id="popup1" ref="popup1" v-if="type=='ayPopTips_center'" type="center" @closeModal="closeModal_tips" @toConfirm="toConfirm_tips" >
			<view >
				<view >自定义内容</view>
			</view>
		</ayPopTips>
		
		<ayPopTips id="popup1" ref="popup1" v-if="type=='ayPopTips_bottom'" type="bottom" @closeModal="closeModal_tips" @toConfirm="toConfirm_tips" >
			<view >
				<view >自定义内容</view>
				<view  style="color: #FF0000;">自定义内容</view>
			</view>
		</ayPopTips>
		
		<ayCardOne v-if="type=='ayCardOne'">
			
		</ayCardOne>
		<ayCardTwoList v-if="type=='ayCardOneList'" :list="card_list">
			
		</ayCardTwoList>
		<ayCardOneList v-if="type=='ayCardOneList'" :list="card_list">
			
		</ayCardOneList>
		
		<cartsBall v-if="type=='cartsBall'" ref="cartsBall" :ballColor="'#fff'" :zIndex="6" :endPos="{
		        x: 150, y: 650
		    }"
		 :bg_img="'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg'"></cartsBall>
		<view v-if="type=='cartsBall'" @click="drop_cartsBall($event)">
			<text>跳出来</text>
		</view>
		
		<fadeInOut v-if="type=='fadeInOut'"  :list="lottery_list"></fadeInOut>
		
		<aybg v-if="type=='aybg'" :list="mark_list">
			
			<view>自定义内容</view>
		</aybg>
	</view>

</template>

<script>
	import aybg from '../../components/ay-bg/ay-bg.vue'
	import fadeInOut from '../../components/ay-springing/fadeInOut.vue'
	import cartsBall from '../../components/ay-springing/cartsBall.vue'
	import ayCardTwoList from "@/components/ay-card/ay-card-two-list.vue"
	import ayCardOne from "@/components/ay-card/ay-card-one.vue"
	import ayCardOneList from "@/components/ay-card/ay-card-one-list.vue"
	import ayPopTips from "@/components/ay-pop/ay-pop-tips.vue"
	import ayDropdownList from "@/components/ay-dropdown-filter/ay-dropdown-list.vue"
	
	import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	
	import ayImageUpload from '@/components/ay-img-upload/ay-img-upload.vue'
	
	import ayturn from '@/components/ay-turn/ay-turn.vue';
	
	import aylottery from '@/components/ay-lottery/ay-lottery.vue';
	
	import firework from '@/components/ay-firework/firework.vue';
	
	
	import wave1 from '@/components/ay-wave/wave1.vue';
	import wave2 from '@/components/ay-wave/wave2.vue';
	import wave3 from '@/components/ay-wave/wave3.vue';
	import wave4 from '@/components/ay-wave/wave4.vue';
	
	
	import shutLoose from '@/components/ay-cubic/shut_loose.vue';
	import thDTwo from '@/components/ay-cubic/thD_two.vue';
	import twtySets from '@/components/ay-cubic/twty_sets.vue';
	import magicCube from '@/components/ay-cubic/magic_cube.vue';
	import shutLooseTwo from '@/components/ay-cubic/shut_loose_two.vue';
	import magicCubeAuto from '@/components/ay-cubic/magic_cube_auto.vue';

	import scTxt from '@/components/ay-stpvary/txt.vue';
	import scBg from '@/components/ay-stpvary/bg.vue';
	import radar from '@/components/ay-stpvary/radar.vue';

	import fireworkSati from '@/components/ay-firework/firework_sati.vue'

	import blow from '@/components/ay-lottery/blow.vue';
	import blowAny from '@/components/ay-lottery/blow_any.vue';
	import blowImg from '@/components/ay-lottery/blow_img.vue';



	import menu from '@/js/show.js';
	export default {
		components: {
			shutLoose,
			thDTwo,
			twtySets,
			magicCube,
			shutLooseTwo,
			magicCubeAuto,
			scTxt,
			scBg,
			radar,

			fireworkSati,
			firework,

			blow,
			blowAny,
			blowImg,
			
			wave1,
			wave2,
			wave3,
			wave4,
			
			aylottery,
			ayturn,
			ayImageUpload,
			ayQrcode,
			
			ayDropdownList,
			ayPopTips,
			
			ayCardOne,
			ayCardOneList,
			ayCardTwoList,
			
			cartsBall,
			fadeInOut,
			
			aybg,
		},
		data() {
			return {
				fade_list: [
					
				],
				mark_list:[],
				card_list:[],
				//下拉框
				isShow_ddList : false ,
				seleTypeList:[
					{
						selTip:'测试',
						text:'======',
					},
					{
						selTip:'测试2',
						text:'======',
					},
					{
						selTip:'测试23',
						text:'======',
					},
					{
						selTip:'测试',
						text:'======',
					},
					{
						selTip:'测试2',
						text:'======',
					},
					{
						selTip:'测试23',
						text:'======',
					},
					{
						selTip:'测试',
						text:'======',
					},
					{
						selTip:'测试2',
						text:'======',
					},
					{
						selTip:'测试23',
						text:'======',
					},
					{
						selTip:'测试',
						text:'======',
					},
					{
						selTip:'测试2',
						text:'======',
					},
					{
						selTip:'测试23',
						text:'======',
					},
				],
				//二维码相关参数
				modal_qr: false,
				url: 'https://ext.dcloud.net.cn/plugin?id=3870', // 要生成的二维码值
				
				//凭证
				themeColor: '#33CCCC',
				uploadTipList: [{
						name: '凭证1',
						img: '',
						remove: true,
					},
					{
						name: '凭证2',
						img: '',
						remove: true,
					},
					{
						name: '凭证3',
						img: '',
						remove: true,
					},
				],
				
				//翻转
				turn_thD_list: [],
				list_page:[],
				list_page_auto:[],
				cover_auto:{},
						
				pros_img:'https://cdn.pixabay.com/photo/2020/03/13/08/34/south-station-4927286__340.jpg',
				cons_img:'https://cdn.pixabay.com/photo/2021/01/11/18/41/snowfall-5909261__340.jpg',
				
				//抽奖
				stay_index_r_init: 4,
				stay_index_r: 1,
				tips_init_turn: '点击',
				no_z_init_turn: '点击',
				result_turn: '好运降临',
				
				chance_num_init: 6,
				lottery_list: [],
				list_r: [],
				
				//刮一刮
				result_img_blow: 'https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg',
				themeColor: '#33CCCC',
				txtFontSize_blow: 50,
				txtColor_blow: '#FFFFFF',
				is_show_blow: false, //防止画布画好前闪烁
				result_blow: '谢谢参与',



				//list_menu : [],
				isLoaded: false,
				type: '', ////1旋转2旋转立方体3二十面体4双旋转立方体5旋转魔方

				colorName_rd: 'orangeRed', //aqua hotPink lime gold orangeRed
				list_th: [],
				turn_thD_list: [],
				list: [],
				isLoaded: false,
				type: 1, ////1旋转2旋转立方体3二十面体4双旋转立方体5旋转魔方
				margin_t_b_ma: 200,
				margin_t_b_td: 4,
				bg_img_sl: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',
				txt_sc: '',
				is_fkSati: false,
			}
		},
		onLoad(options) {
			let that = this;

			let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			//console.log(JSON.stringify(data))
			console.log(data)
			if (data) {
				that.setDate_init(data);
			}


			that.loadData();
			
			
		},
		onReady() {
			let that = this;

			//礼花播放
			that.play_fw();
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			//加入购物车效果
			drop_cartsBall() {
				this.$refs.cartsBall.drop({
					x: 5,
					y: 200
				})
			},
			//弹出框
			toConfirm_tips(){
				this.$refs.popup1.close();
			},
			closeModal_tips(){
				this.$refs.popup1.close();
			},
			//下拉框
			showDropdownList(){
				let that = this;
				that.isShow_ddList = !that.isShow_ddList ;
			},
			selectItem_ddList(e){
				let that = this;
				console.log('选中了'+ JSON.stringify(e.item) )
				this.$api.msg_modal('选中了'+ JSON.stringify(e.item))
				that.isShow_ddList = false ;
			},
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
				}, 50)
			},
			//凭证
			imgAddFun(e) {
				let that = this;
				console.log(e)
				that.uploadTipList = e;
			},
			//抽奖
			
			toDetailPage(e) {
				let list = e.list;
				let idx = e.curIndex;
				let list_img = [];
				let item = e.item;
			
				list.forEach(item => {
					list_img.push(item.img)
				})
				if (list_img && list_img.length > 0) {
					uni.previewImage({
						current: list_img[idx], //  传 Number H5端出现不兼容
						urls: list_img,
						indicator: "number",
						loop: true,
					});
				}
			},
			
			again_turn(e) {
				let that = this;
				that.result_turn = '';
				that.no_z_init_turn = that.tips_init_turn;
			},
			show_turn(e) {
				let that = this;
				if (e.result == 1) {
			
					that.result_turn = that.getShowTxt();
				} else {
					that.no_z_init_turn = '谢谢参与';
				}
			
			},
			getShowTxt() {
				let that = this;
				//随机获取list的值
				let num = Math.floor(Math.random() * 10); //可均衡获取0到9的随机整数
				let legth = that.lottery_list.length || 0;
				let index = num < legth ? num : (legth - 1);
				return that.lottery_list[index].name || '哈哈'
			},
			resultFun(e) {
				let that = this;
				let item = e.item;
				this.$api.msg_modal("抽中了" + item.name, '恭喜您')
			
			},
			resultFun_chance(e) {
				let that = this;
			
				let item = e.item;
				let index = e.curIndex;
				let list = e.list;
			
				//定义下一次转的位置
				that.stay_index_r = Math.round(Math.random() * (list.length - 1)); //随机数
			
				if (e.isAward) {
					this.$api.msg_modal('获得' + (item.name), '恭喜')
					let type = item.type;
					if (type == 1) {
						that.chance_num_init += item.val;
					}
				}
			
			},
			//刮一刮
			init_blow() {
				this.is_show_blow = true;
			},
			reset: function() {
				this.$refs.card.init();
			},

			seatShow: function() {

			},
			//礼花播放
			play_fw() {
				let that = this;


				this.$nextTick(() => { //后面记得销毁哈，不使用时设置为false
					setTimeout(() => {
						this.is_fkSati = true;
					}, 50)
				})

			},
			setDate_init(data) {
				let that = this;

				uni.setNavigationBarTitle({
					title: data.name
				})

				that.type = data.type;
			},
			async loadData() {
				let that = this;

				uni.showLoading({
					title: '加载中',
					mask: true,
				})

				let res_home = await menu.res_home;
				//console.log(res_home)
				let data = res_home.data;

				that.list = data.list.data;

				that.turn_thD_list = data.turn_thD_list.data;
				that.list_th = data.list_th.data;

				that.txt_sc = data.turn_page_txt.ct;
				
				that.lottery_list = data.lottery_list.data;
				that.list_r = data.lottery_r_list.data;
				
				that.result_blow = that.getShowTxt();
				
				//第一次转盘停的位置
				that.stay_index_r = that.stay_index_r_init;
				//that.result_blow = that.getShowTxt(data.lottery_list.data);
				//that.result_img_blow = that.getShowImg(data.list_th.data);
				
				//翻转
				that.turn_thD_list = data.turn_thD_list.data;
				that.list_page = data.turn_page_list.data;
				that.list_page_auto = data.turn_pageAuto_list.data;
				
				uni.hideLoading();

				that.isLoaded = true;
				
				that.card_list = data.card_list.data;
				that.fade_list = data.fade_list.data;
				that.mark_list  = data.mark_list.data;
				
				if(that.type=='ayQrcode'){
					that.showQrcode();//一加载生成二维码
				}else if(that.type.substr(0,10)=='ayPopTips_'){
					this.$refs.popup1.open();//弹出确认框
				}
			},

		},
	}
</script>

<style lang="scss">
	
</style>
