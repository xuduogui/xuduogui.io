"use strict";
// 网站中间大图轮播
bigImgChange();
// 将相关部分全部放进一个函数
function bigImgChange(argument) {
	// 设置自动换图开始的图片标记
	var flag = 3;
	// 前一张图片标记
	var beforeFlag;
	// 轮播条件标记
	var autoFlag = true;
	// 获得图片组
	var imgList1 = document.getElementById('listImg');
	var imgList = imgList1.getElementsByTagName('img');
	// 获得图片和a标签的div
	var pictureBox = document.getElementsByClassName("pictureList")[0];
	// 动画显示计时器
	var setTimeOne;
	// 动画消失计时器
	var setTimeTwo;
	// 圆点鼠标悬浮延时触发计时器
	var setTimeThree;
	// 循环计时器
	var setTimeAll;
	// 移出图片范围重新轮播计时器
	var setTimeFour;
	// 获得包含按钮的div
	var imgPlotList = document.getElementsByClassName('imgPlotList')[0];
	// 获得按钮
	var imgPlot = imgPlotList.getElementsByTagName('a');

	operation();
	// 整体逻辑
	function operation(argument) {
		// 图片自动轮播
		autoImg();
		// 按钮效果
		btChangeImg();
	}

	// 自动循环换图
	function autoImg(argument) {
		// 单次换图
		changeImg();
		// 轮播延时回调,条件是未触发鼠标事件
		if (autoFlag==true) {
			setTimeAll = setTimeout(autoImg,3000)
		}
	}

	// 按钮事件
	function btChangeImg(argument) {
		// 鼠标悬浮a小圆点,跳转指向图片
		showPlot();
		// 鼠标悬浮div事件：停止轮播
		pictureBox.addEventListener("mouseover",disAutoImg);
		// 鼠标移出div开始新循环
		pictureBox.addEventListener("mouseleave",newAutoImg);
	}

	// 单次换图
	function changeImg(argument) {
		// 判断鼠标是否悬浮
		if (autoFlag==false) {
			return;
		}
		// 标记要显示的图片
		flag++;
		// 第四张图后显示第一张
		flag == 4?flag = 0:flag;
		// 图片动画显示效果
		showImg(flag);
		// 图片前一张消失效果
		isNaN(beforeFlag)?beforeFlag:disImg(beforeFlag);
		// 标记当前图片，下次消失
		beforeFlag = flag;
	}

	// 动画出现效果，传参：图片下标
	function showImg(e) {
		// 小圆点的颜色
		imgPlot[e].style.backgroundColor = "blue";
		// 让图片显示
		imgList[e].style.display = "block";
		// 设置透明度为零
		imgList[e].style.opacity = 0;
		// 设置初始透明度相关值
		var num = 0;
		// 透明度逐渐上升
		setTimeOne = setInterval(function (argument) {
				// 20毫秒加一次，加25次，0.5秒
				num++;
				imgList[e].style.opacity = num/25;
				// 如果num>50，结束计时器
				if (num > 25) {
					clearInterval(setTimeOne);
				}
			},20)
	}

	// 动画消失效果,传入参数：图片下标
	function disImg(e) {
		// 小圆点的颜色
		imgPlot[e].style.backgroundColor = "#bbb";
		// 初始透明度
		var num = 25;
		setTimeTwo = setInterval(function (argument) {
				// 20毫秒减一次，减25次，0.5秒
				num--;
				// console.log(num);
				imgList[e].style.opacity = num/25;
				// 如果num<0，结束计时器,设置图片消失
				if (num < 0) {
					imgList[e].style.display = "none";
					clearInterval(setTimeTwo);
				}
			},20)
	}

	// a节点事件,遍历，绑定悬浮事件和离开事件
	function showPlot(argument) {
		// 遍历a节点，绑定事件，延时跳转，瞬间移出无作用
		for (var i = 0; i < imgPlot.length; i++) {
			// 按钮触发对象标记
			imgPlot[i].index = i;
			// 鼠标悬浮事件,图片跳转
			imgPlot[i].onmouseover = function (argument) {
				// 悬浮触发图片标记
				var myFlag = this.index;
				// 设置悬停图片，跳转向悬停
				// 这里将延时设置和动画延时相同，避免冲突
				setTimeThree = setTimeout(function (argument) {
					// 设置要改变的图片标记
					flag = myFlag;
					// 显示当前指向图片
					thisImg();
				},500) 
			}
			// 鼠标离开事件
			imgPlot[i].onmouseleave = function (argument) {
				// 瞬间离开按钮，不改变
				clearTimeout(setTimeThree);
			}
		}
	}
	// 按钮跳转图片
	function thisImg(argument) {
		// 如果悬浮按钮是当前按钮，不处理
		if (flag==beforeFlag) {
			return;
		}
		// 图片动画显示效果
		showImg(flag);
		// 图片前一张消失效果
		isNaN(beforeFlag)?beforeFlag:disImg(beforeFlag);
		// 记录flag
		beforeFlag = flag;
	}

	// 鼠标移出div继续自动换图
	function newAutoImg() {
		// 开始自动循环标记
		autoFlag = true;
		// 移出重新轮播计时器，3秒后开始
		setTimeFour = setTimeout(function (argument) {
			// 轮播开始
			autoImg();
		},3000);
	}

	// 鼠标移入div中断换图
	function disAutoImg(argument) {
		// 停止自动轮播,设置标记
		autoFlag = false;
		// 清除原本自动循环
		clearTimeout(setTimeAll);
		// 清除移出计时器，避免冲突
		clearTimeout(setTimeFour);
	}
}


	// 动画单次动作动画
	// function changeImg(argument) {
	// 	// ul向左
	// 	// if (imgBox.class == "rightMove") {
	// 	// 	imgBox.removeAttribute("class","rightMove");
	// 	// }
	// 	imgBox.setAttribute("class","leftMove");
	// // 	setTimeout(function (argument) {
	// // 		// body...
	// // 		if (imgBox.class == "leftMove") {
	// // 			imgBox.removeAttribute("class","leftMove");
	// // 		}
	// // 		imgBox.setAttribute("class","rightMove");
	// // 	},1000)
	// }
// function disAutoA(argument) {
// 	if (event.target.TagName == "DIV") {
// 		return;
// 	}
// 	disAutoImg();
// 	// 清除图片
// 	imgList[flag].style.display = "none";
// 	// imgList[beforeFlag].style.display = "none";
	
// 	// 改变轮播初始值
// 	switch (event.target.id) {
// 		case "imgBtOne":{
// 			flag = 0;
// 			break;
// 		}
// 		case "imgBtTwo":{
// 			flag = 1;
// 			break;
// 		}
// 		case "imgBtThree":{
// 			flag = 2;
// 			break;
// 		}
// 		case "imgBtFour":{
// 			flag = 3;
// 			break;
// 		}
// 	}
// 	// console.log(flag,beforeFlag);
// 	// // 设置悬停图片
// 	thisImg();
// 	// autoImg();

// }



// function pictureChange(argument) {
// 	// body...

// }
// var showId;
// var disId ;
// var disIds = new Array();
// var showIds =[];

// onlyBt();
// //单个按钮事件
// function onlyBt(argument) {
// 	// 获得含按钮的div
// 	var imgPlot = document.getElementsByClassName('imgPlotList')[0];
// 	// 获得图片
// 	var imgList1 = document.getElementById('listImg');
// 	var imgList = imgList1.getElementsByTagName('img');
// 	// 设置一个标记记录上次图片
// 	var flag;
// 	// 设置图片自动标记
// 	var i = 3;
// 	// 设置监听是否有鼠标操作
// 	var isFlag = false;
// 	// 实现自动循环
// 	console.log(i,flag,isFlag);
// 	autoImg();
// 	function autoImg(argument) {
// 		// body...
// 		console.log(isFlag)
// 		// 如果有按钮操作，循环终止
// 		if (isFlag == true) {
// 			console.log("断了？")
// 			return;
// 		}
// 		// 如果按钮序号为4，则重新回到开始
// 		i == 4?(i=0):i;
// 		console.log(i,flag,isFlag);
// 		// flag == i-1?i++:flag;
// 		isNaN(flag)&&i==flag? flag:anDis(imgList[flag]);
// 		anShow(imgList[i]);
// 		flag = i;
// 		i++;
// 		setTimeout(function (argument) {
// 			// body...
// 		autoImg();
// 		},3000)
// 	}
	

// 	var imgPlotLev = imgPlot.getElementsByTagName('a');
// 	function leavePlot(argument) {
// 		// 遍历a节点，绑定事件
// 		for (var j = 0; j < imgPlotLev.length; j++) {
// 			imgPlotLev[j].onmouseleave = function (argument) {
// 				// 开始自动循环
// 				isFlag = false;
// 				autoImg();
// 			}
// 		}
// 	}

	// 事件
// 	imgPlot.addEventListener("mouseover",function (e) {
// 		//绑定鼠标移出事件
// 		leavePlot();
// 		//清除计时器
		
// 		switch (e.target.id) {
// 			case "imgBtOne":{
// 				// 判断是否和上次点击相同
// 				if (flag==0) {
// 					isFlag = true;
// 					break;
// 				}
// 				// 中断自动循环
// 				isFlag = true;
// 				// 判断是否第一次点击，是：没有消失效果
// 				isNaN(flag)?flag:anDis(imgList[flag]);
// 				// 逐渐显示效果
// 				anShow(imgList[0]);
// 				// 标记“上一次”按钮序号
// 				flag = 0;
// 				// 设置自动循环重新开始位置
// 				i = 1;
// 			//	leavePlot();
// 				break;
// 			}
// 			case "imgBtTwo":{
// 				if (flag==1) {
// 					isFlag = true;
// 					break;
// 				}
// 				isFlag = true;
// 				isNaN(flag)?flag:anDis(imgList[flag]);
// 				anShow(imgList[1]);
// 				flag = 1;
// 				i = 2;
// 				isFlag = false;
// 				// leavePlot();
// 				break;
// 			}
// 			case "imgBtThree":{
// 				if (flag==2) {
// 					isFlag = true;
// 					break;
// 				}
// 				isFlag = true;
// 				isNaN(flag)?flag:anDis(imgList[flag]);
// 				anShow(imgList[2]);
// 				flag = 2;
// 				i = 3;
// 				isFlag = false;
// 				// leavePlot();
// 				break;
// 			}
// 			case "imgBtFour":{
// 				if (flag==3) {
// 					isFlag = true;
// 					break;
// 				}
// 				isFlag = true;
// 				isNaN(flag)?flag:anDis(imgList[flag]);
// 				anShow(imgList[3]);
// 				flag = 3;
// 				i = 0;
// 				isFlag = false;
// 				// leavePlot();
// 				// i += 3;
// 				break;
// 			}
// 		}
// 	})

// }


// // 设置计时器清除
// var setTimeOne;
// var setTimeTwo;
// 动画效果setInterval
// 显示效果
// function anShow(argument) {
// 	// body...


// }

// 动画效果
// function anShow(img) {
// 	if(showIds.length==3){
// 		clearTimeout(showIds[0]);
// 		disIds.splice(0,1);
// 	}
// 	// 逐渐显示效果
// 	var num = 0;
// 	img.style.display = "block";
// 	// img.style.backgroundColor = "blue";
// 	img.style.opacity=0;
// 	function showImg(argument) {
// 		if (num<50) {
// 			showId = setTimeout(function (argument) {
// 				// 20毫秒执行一次，50次，1s
// 				num++;
// 				img.style.opacity = num/50;
// 				showImg();
// 			},20);
// 			showIds.push(showId);
// 		}
// 	}
// 	showImg();
// }


// function anDis(img) {
// 	console.log(disIds+"b");
// 	// 消失效果
// 	// img.style.backgroundColor = "white";
// 	if(disIds.length==3){
// 		clearTimeout(disIds[0]);
// 		disIds.splice(0,1);
// 	}
// 	var num = 50;
// 	function showImg(argument) {
		
// 		if (num>0) {
// 			disId = setTimeout(function (argument) {
// 				// 20毫秒执行一次，50次，1s
// 				num--;
// 				img.style.opacity = num/50;
// 				if (img.style.opacity == 0) {
// 					img.style.display = "none";
// 				}
// 				showImg();
// 			},20);
// 			disIds.push(disId);
// 		}
// 	}
// 	showImg();
// }
// 消除事件冲突




// function pictureChange(argument) {
// 	// 获得按钮和图片的div
// 	var boxs = document.getElementsByClassName('pictureList')[0];
// 	//获得按钮组和图片组
// 	var imgPlot = document.getElementsByClassName('imgPlot');
// 	var imgList = document.getElementsByClassName('listImg');
// 	console.log(imgPlot);
// 	var flag = 0;
// 	var flag2;
// 	var tmm;
// 	function plotinner(i,ev,aim) {
// 		//添加悬浮按钮事件
// 		console.log(ev,aim);
		
// 		ev.onmouseenter = function () {
// 			// 通过鼠标悬浮给图片添加样式
// 			console.log(flag2,flag,i);
// 			imgList[0].childNodes[flag*2+1].setAttribute("class","opacityImgdis");
// 			console.log(flag);
// 			if (flag2) {
// 				imgList[0].childNodes[flag2*2+1].style.display = "none";
// 			};
// 				// clearTimeout(tmm);
// 			// }
// 			tmm = setTimeout(function (argument) {
// 				// body...
// 				imgList[0].childNodes[flag*2+1].style.display = "none";
// 				console.log(flag,i);
// 			},3000);
			
			
// 			aim.style.display = "block";
// 			aim.setAttribute("class","opacityImg");
// 			// aim.style.opacity = "1";
// 			flag2 = flag;
// 			flag = i;
// 			console.log(flag);
// 		}
		
// 		ev.onmouseenter = function (argument) {
// 			// body...
// 			imgList[0].childNodes[flag*2+1].style.display = "none";
// 		}
// 	}

// 	function plotOut(i,ev,aim) {
// 		// 鼠标移出事件
// 		ev.onmouseout = function () {
// 			// body...
// 			aim.setAttribute("class","opacityImgdis");
// 			setTimeout(function (argument) {
// 				// body...
// 				aim.style.display = "none";
// 			},3000)
// 		}
// 	}



// 	// function autoChange(ev) {
// 	// 	// 通过模拟鼠标事件来实现
// 	// 	ev.onmouseout = function (argument) {
// 	// 		// body...

// 	// 	}

// 	// }

// 	// 添加事件
// 	function plotChange(ev) {
// 		// body...
// 		for (var i = 0; i < imgPlot.length; i++) {
// 			setTimeout((function () {
// 				// body...
// 				console.log(i);
// 				plotinner(i,imgPlot[i],imgList[0].childNodes[i*2+1]);
// 				// plotOut(i,imgPlot[i],imgList[0].childNodes[i*2+1]);
// 			})(i),3000)
// 		}
// 	}
// 	plotChange();



// }
// pictureChange();
// 网站中间大图轮播
// $(document).ready(function (argument) {
// 	// body...
// 	$("")
// })

// 网站首行链接鼠标效果
var h = document.getElementsByClassName("aList1");
var hide = document.getElementsByClassName("hLinkOne");
//绑定head部 两组元素 点击的h与隐藏的hide
hAndHide(h,hide);
function hAndHide(ev,aim) {
	// 遍历节点，在每个节点附加事件
	for (var i = 0; i < ev.length; i++) {
		// console.log(1);
		var a = i;
		clickEv(ev[a],aim[a]);
	}
}
hAndHide(h,hide);
// var hdc1 = document.getElementById('headClcOne');
// var hhd1 = document.getElementById("headHideOne");
// console.log(hdc1,hhd1);
function clickEv(ev,aim) {
	// console.log(ev,aim);
	// 传入两个参数，鼠标点击的目标，隐藏块
	var flag = false;
	ev.addEventListener("mouseover",function () {
		//鼠标悬浮效果
		ev.style.color = "#252525";
	})
	ev.onmouseout = function (argument) {
		// 鼠标离开效果
		ev.style.color = "#a5a5a5";
		aim.style.display = "none";
	}

	ev.onclick = eve;
	function eve(argument) {
		// 鼠标点击效果
		var flag = true;
		//span区域加框
		ev.parentNode.style.border = "1px solid #ddd";
		ev.parentNode.style.borderBottom = "none";
		aim.style.display = "block";
		ev.parentNode.onmouseover = function (argument) {
			// span区域内移动
			flag == true ? (aim.style.display = "block"):flag;
		}
		ev.parentNode.onmouseleave = function () {
			// span区域移出 这里曾经使用onmouseout事件，发现离开任何元素就一直触发
			ev.parentNode.style.border = "none";
			aim.style.display = "none";
			return flag = false;
		}
	}
	aim.onmouseover = function (argument) {
		// 隐藏块的悬停效果
		ev.style.color = "#252525";
		aim.style.display = "block";
		ev.parentNode.style.border = "1px solid #ddd";
		ev.parentNode.style.borderBottom = "none";
	}
	aim.onmouseout = function (argument) {
		// 鼠标离开隐藏块效果
		aim.style.display = "none";
		ev.style.color = "#a5a5a5";
	}
}

//导航部分鼠标效果
// 获取两个操作数组
var linkA = document.getElementsByClassName("naviga-a-index");
var linkPsiton = document.getElementsByClassName("naviPosition");
function aAndPositon(ev,aim) {
	// 遍历两个数组
	for (var i = 0; i < ev.length; i++) {
		overHead(ev[i],aim[i]);
	}
}
aAndPositon(linkA,linkPsiton);
function overHead(ev,aim) {
	var flagTwo;
	var tim;
	// 鼠标效果
	ev.onmouseover = function (argument) {
		// 经过按钮数组
		ev.style.color = "#9015ff";
		aim.style.display = "block";
		// setTimeout(aim.style.display = "block",1000);
	}
	ev.onmouseout = function (argument) {
		// 离开按钮
		
		tim = setTimeout(function (argument) {
			// body...
			ev.style.color = "#fff";
			aim.style.display = "none";
		},50); 
	}
	aim.onmouseover = function (argument) {
		// 经过目标
		clearTimeout(tim);
		ev.style.color = "#9015ff";
		aim.style.display = "block";
	}
	aim.onmouseout = function (argument) {
		// 离开目标
		ev.style.color = "#fff";
		aim.style.display = "none"
	}

}



// 中间轮播大图效果
// function imgChange(argument) {
// 	// 中间大图
// 	var listImg = document.getElementById('listImg');
// 	var img = listImg.getElementsByTagName('img');
// 	var aLink = document.getElementsByClassName("imgPlot");
// 	console.log(aLink);
// 	var i;
// 	var a;
// 	var flagOne = true;
// 	var timeT;
// 	//自动换图
// 	function autoImg(argument) {
// 		// aBt();
// 		if (flagOne) {
// 			i++;
// 			i<img.length ? i:i=0;
// 			i<(img.length-1) ? a=i+1:a=0;
// 			console.log(i);
// 			img[i].style.display = "block";
// 			img[i].style.zIndex = "99";
// 			img[i].setAttribute("class","opacityImg");
// 			// img[a].setAttribute("class","opacityImgdis");
// 			img[a].style.display = "block";
// 			img[a].style.opacity = "0";
// 			timeT = setTimeout(function (argument) {
// 				// body...
// 				i<img.length ? i:i=0;
// 				img[i].setAttribute("class","opacityImgdis");
// 				img[i].style.zIndex = "0";
// 				img[i].style.opacity = "0";
// 				img[a].setAttribute("class","opacityImg");
// 				img[a].style.opacity = "1";
// 				autoImg();
// 			},4000)
			
// 		}
// 	}
// 	// imgOver();
// 	// //图片事件
// 	// function imgOver() {
// 	// 	// body...
// 	// 	for (var j = 0; j < img.length; j++) {
// 	// 		img[j].index = j;
// 	// 		clearTimeout(timeT);
// 	// 		img[j].onmouseover = function (argument) {
// 	// 			// body...
// 	// 			console.log(this.index);
// 	// 			img[this.index].style.opacity = "1";
// 	// 			return flagOne = false;
// 	// 		}
// 	// 		img[j].onmouseout = function (argument) {
// 	// 			// body...
// 	// 			flagOne = true;
// 	// 			img[i].setAttribute("class","opacityImgdis");
// 	// 			autoImg();
// 	// 		}
		
// 	// 	}

// 	// }


// 	//按钮事件
// 	// function aBt(argument) {
// 	// 	// body...
// 	// 	for (var j = 0; j < aLink.length; j++) {
// 	// 		aLink[j].index = j;
// 	// 		console.log(i);
// 	// 		aLink[j].onmouseover = function (argument) {
// 	// 			// body...
// 	// 			console.log(this);
// 	// 			clearTimeout(timeT);
// 	// 			aLink[this.index].onmouseleave = function (argument) {
// 	// 				// body...
// 	// 				flagOne = true;
// 	// 				autoImg();
// 	// 			}
// 	// 			if (i == this.index) {
// 	// 				// clearTimeout();
// 	// 				return flagOne=false;
// 	// 			} else {
// 	// 				console.log(i);
// 	// 				// clearTimeout();
// 	// 				img[i].setAttribute("class","opacityImgdis");
// 	// 				img[i].style.opacity = "0";
// 	// 				img[i].style.zIndex = "0"
// 	// 				i = this.index;
// 	// 				img[i].style.display = "block";
// 	// 				img[i].setAttribute("class","opacityImg");
// 	// 				img[i].style.opacity = "1";
// 	// 				img[i].style.zIndex = "99";
// 	// 				console.log(i);
// 	// 				return flagOne = false;
// 	// 			}
// 	// 		}
			
// 	// 	}
// 	// }
// 	// aBt();
// autoImg();
// }
// imgChange();