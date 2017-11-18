// 聊天入口组件构造器
var chatout = Vue.extend({
	template: '#chat-out',
	data: function (argument) {
		// body...
		return {
			lists: []
		}
	},
	mounted: function (argument) {
		// 挂载上后获取数据
		this.getData()
		varHeight()
	},
	methods: {
		getData: function (argument) {
			// 成功请求，需在服务器环境运行
			// this.$http.get('msg.json').then(function (response) {
			// 	// body...
			// 	
			// 	})
			this.lists = chatOutMsg
		},
	}
})

// 好友页面
var friendsStore = Vue.extend({
	template: '#friends-bus',
	data: function (argument) {
		// body...
		return {
			lists: [],
			headlists: friendsHead
		}
	},
	mounted: function (argument) {
		// 挂载上后获取数据
		this.getData()
		varHeight()
		// this.lists = sortMyData(chatOutMsg)
	},
	methods: {
		getData: function (argument) {
			// 成功请求，需在服务器环境运行
			// this.$http.get('msg.json').then(function (response) {
			// 	// body...
			// 	
			// 	})
			// var arr = 
			this.lists = friendsMsg.sort(function (a,b) {
				// 这里想实现拼音排序，失败
				return a.ID.localeCompare(b.ID)
			})
		},
		
	}
})

// 主页
var information = Vue.extend({
	template: '#information',
	data: function (argument) {
		// body...
		return {
			list: myInformation
		}
	},
	mounted: function (argument) {
		// 挂载上后获取数据
		varHeight()
	},
})

// 发现
var findMore = Vue.extend({
	template: '#findMore',
	data: function (argument) {
		// body...
		return {
			lists: findMsg
		}
	},
	mounted: function (argument) {
		// 挂载上后获取数据
		varHeight()
	},
})

// 尝试
Vue.component('test',{
	template: '#test'
})
