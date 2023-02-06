import Vue from 'vue'
import App from './App'
import Utils from "./common/mt-utils/index";
import urlData from './common/url.js';

Vue.prototype.$mt = new Utils({
	debug: false, // debug模式

	serveMode: 'online', // 当前环境

	serveModeArr: ['default', 'study', 'login', 'server', 'event', 'notification', 'statis', 'normal', 'file',
		'socket', 'gps'
	], // 模块接口前缀列表

	// 环境对象集
	serveModeObj: {
		online: {
			defaultHost: 'http://120.220.3.184:18080/data',
			studyHost: 'http://120.220.3.184:18080/evaluation',
			loginHost: 'http://120.220.3.184:18080/job',
			serverHost: 'http://120.220.3.184:18080/system',
			eventHost: 'http://120.220.3.184:18080/event',
			notificationHost: 'http://120.220.3.184:18080/msg',
			statisHost: 'http://120.220.3.184:18080/statis',
			normalHost: 'http://120.220.3.184:18080',
			fileHost: 'http://120.220.3.184:18080/file',
			socketHost: 'ws://120.220.3.184:18080/msg/',
			gpsHost: 'http://120.220.3.184:18080/gps'
		},
		formal: {
			defaultHost: 'http://120.220.3.184:18080/data',
			studyHost: 'http://120.220.3.184:18080/evaluation',
			loginHost: 'http://120.220.3.184:18080/job',
			serverHost: 'http://120.220.3.184:18080/system',
			eventHost: 'http://120.220.3.184:18080/event',
			notificationHost: 'http://120.220.3.184:18080/msg',
			statisHost: 'http://120.220.3.184:18080/statis',
			normalHost: 'http://120.220.3.184:18080',
			fileHost: 'http://120.220.3.184:18080/file',
			socketHost: 'ws://120.220.3.184:18080/msg/',
			gpsHost: 'http://120.220.3.184:18080/gps'
		}
	},

	// 接口集合
	urlData: urlData,

	hasToken: false, // 是否需要token
	tokenName: 'Authorization', // token的别名
	settings: {} // 水印参数
});


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
