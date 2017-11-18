// 这里获取浏览器高度，给view加样式
function varHeight(argument) {
	// body...
	var h = document.documentElement.clientHeight;
	var view = document.getElementById('routerHeight');
	
	var allindex = document.getElementsByClassName('allIndex')[0];
	var h1 = h-h*0.07;
	allindex.style.top = h1 + 'px';
	view.style.height = h1 + 'px';
}
varHeight()


// 好友栏头部数据
var friendsHead = [
	
	{
		img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2464596972,2078822383&fm=27&gp=0.jpg',
		msg: '新的朋友',
		hrf: 'newf'
	},
	{
		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1616922491,4266617311&fm=15&gp=0.jpg',
		msg: '群聊',
		hrf: 'newq'
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1453939683,177879591&fm=27&gp=0.jpg',
		msg: '标签',
		hrf: 'newf'
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3332837919,808266442&fm=15&gp=0.jpg',
		msg: '公众号',
		hrf: 'newf'
	},
]
// 好友栏模拟数据
var friendsMsg = [
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3843469615,2023233766&fm=27&gp=0.jpg',
		ID: '三大股东',
		hrf: '1111',
	},
	{
		img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1633698864,662530431&fm=27&gp=0.jpg',
		ID: '如果',
		hrf: '1111',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4271535934,1419142906&fm=200&gp=0.jpg',
		ID: 'CVS',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1358816972,3645382221&fm=27&gp=0.jpg',
		ID: '问题',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '阿骨打',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '大夫给对方',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '舒服阿萨德',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '覆盖',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: ' 深度覆盖',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '刚刚',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '舒服',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '东方闪电',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '对话方式',
		hrf: '1111',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: 'shhd',
		hrf: '1111',
	},
]

// 聊天栏数据
var chatOutMsg = [
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg',
		ID: '我的名字',
		msg: '这是一段描述',
		hrf: '1111',
		time: '10:11',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3554328810,1268020582&fm=27&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211901079,1443974248&fm=200&gp=0.jpg',
		ID: 'yourname',
		msg: '去你妈的',
		hrf: '22222',
		time: '89:34',
	},
]

// 首页个人信息数据
var myInformation = {
	ID: '许多鬼',
	msg: '1234567865433',
	hrf: 'link',
	img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981322449,3391128927&fm=27&gp=0.jpg',
	img2: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976782369,217827492&fm=27&gp=0.jpg',
}

// 发现栏基础信息
var findMsg = [
	{
		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=248301016,1179966502&fm=27&gp=0.jpg',
		ID: '朋友圈',
		hrf: '1111',
	},
	{
		img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2115983343,2348455858&fm=27&gp=0.jpg',
		ID: '扫一扫',
		hrf: '1111',
	},
	{
		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=935511360,2296499330&fm=27&gp=0.jpg',
		ID: '摇一摇',
		hrf: '1111',
	},
	{
		img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1148126777,363146713&fm=200&gp=0.jpg',
		ID: '附近的人',
		hrf: '1111',
	},
]