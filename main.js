import Vue from 'vue'
import App from './App'

import Json from './Json' //测试用数据

const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const msg_modal = (content,title='温馨提示') => {
	//统一提示方便全局修改
	if (Boolean(content) === false) {
		return;
	}
	uni.showModal({
		title: title,
		content: content,
		confirmText: '确定',
		showCancel: false,
		confirmColor: '#33CCCC',
		success(res) {
			if (res.confirm) {
				
			}
		}
	})
	
}

Vue.prototype.$api = {
	msg,
	json,
	msg_modal,
};
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
