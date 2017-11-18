// 定义路由
var routes = [
	{path:'/chat',component:chatout},
	{path:'/friends',component: friendsStore},
	{path:'/more',component: findMore},
	{path:'/user',component: information},
	{path: '/', redirect: '/user'}
]
// 创建路由实例
var router = new VueRouter({
	routes: routes
})
// 挂载
var app = new Vue({
	router: router,
	methods: {

	}
}).$mount('#app')