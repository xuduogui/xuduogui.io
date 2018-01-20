// 商业文化网络金融
$(function () {
	// 本次点击标记
	var flag = 0;
	// 上次点击标记
	var lastFlag = 0;
	// 按钮事件
	$(".rgtTopList li").eq(0).click(shangye);
	$(".rgtTopList li").eq(1).click(culture);
	$(".rgtTopList li").eq(2).click(qiNet);
	$(".rgtTopList li").eq(3).click(financial);
	function shangye(argument) {
		// 标记点击
		flag = 0;
		if (flag==lastFlag) {
			return;
		}
		// 显示块、
		$(".shangye-index").css("display","block");
		// 添加标题按钮样式
		$(".rgtTopList li:eq(0) a").addClass("addListClass");
		// 消失前一块
		disNone();
		lastFlag = flag;
	}
	function culture(argument) {
		// 标记点击
		flag = 1;
		if (flag==lastFlag) {
			return;
		}
		// 显示块、
		$(".movie-index").css("display","block");
		$(".rgtTopList li:eq(1) a").addClass("addListClass");
		// 消失前一块
		disNone();
		lastFlag = flag;
	}
	function qiNet(argument) {
		// 标记点击
		flag = 2;
		if (flag==lastFlag) {
			return;
		}
		// 显示块、
		$(".qiLingNet").css("display","block");
		$(".rgtTopList li:eq(2) a").addClass("addListClass");
		// 消失前一块
		disNone();
		lastFlag = flag;
	}
	function financial(argument) {
		// 标记点击
		flag = 3;
		if (flag==lastFlag) {
			return;
		}
		// 显示块、
		$(".qiFinancial").css("display","block");
		$(".rgtTopList li:eq(3) a").addClass("addListClass");
		// 消失前一块
		disNone();
		lastFlag = flag;
	}
	// 消失
	function disNone(argument) {
		// body...
		switch (lastFlag) {
			case 0: {
				$(".shangye-index").css("display","none");
				$(".rgtTopList li:eq(0) a").removeClass("addListClass");
				break;
			}
			case 1: {
				$(".movie-index").css("display","none");
				$(".rgtTopList li:eq(1) a").removeClass("addListClass");
				break;
			}
			case 2: {
				$(".qiLingNet").css("display","none");
				$(".rgtTopList li:eq(2) a").removeClass("addListClass");
				break;
			}
			case 3: {
				$(".qiFinancial").css("display","none");
				$(".rgtTopList li:eq(3) a").removeClass("addListClass");
				break;
			}
		}
	}
})
// 文化部分轮播图，使用jq
$(function () {
	// 标记左拉右拉left
	var num;
	// 标记鼠标悬浮，false:未悬浮
	var flag = false;
	// 自动轮播间隔计时器
	var autoTime;
	// 标记当前图片，为了加下划线
	var thisImg;
	// 标记上一张图片
	var lastImg;

	// body...
	$(function () {
		// 按条件自动轮播
		autoImg();
		// 按钮触发，停止轮播
		btImg();
	})
	// 自动
	function autoImg(argument) {
		clearTimeout(autoTime);
		// 回调
		autoTime = setTimeout(function (argument) {
			// 左拉右移
			// leftImg();
			rightImg();
			if (flag==false) {
				autoImg();
			}
		},2000);
	}
	// 右拉
	function rightImg(argument) {
		// 右归位
		rbackImg();
		
		// 获得left
		num = $(".cityBox").css("left");
		// 转化数字，方便操作
		num = parseInt(num);
		// 取整，防止多次点击出现卡半图
		num = Math.round(num/530);
		num = 530*num;
		num -= 530;
		$(".cityBox").animate({left:+num+"px"},"fast",btLine);
	}
	// 左拉
	function leftImg(argument) {
		// 左归位
		lbackImg();
		// 获得left
		num = $(".cityBox").css("left");
		// 转化数字，方便操作
		num = parseInt(num);
		// 取整，防止多次点击出现卡半图
		num = Math.round(num/530);
		num = 530*num;
		num += 530;
		$(".cityBox").animate({left:+num+"px"},"fast",btLine);
	}
	// 右回位
	function rbackImg(argument) {
		if (num<-2300) {
			$(".cityBox").css("left","0");
		}
	}
	// 左回位
	function lbackImg(argument) {
		// body...
		if (num>-1) {
			$(".cityBox").css("left","-2650px");
		}
	}
	function btImg(argument) {
		// 设置计时器，放置多次连续点击
		var time;
		// 鼠标移出移入
		$(".cityChose").mouseenter(varFlag);
		$(".cityChose").mouseleave(changeFlag);
		// 左右按键
		$(".cityLr a").eq(0).click(function (argument) {
			clearTimeout(time);
			time = setTimeout(leftImg,100);
			
		});
		$(".cityLr a").eq(1).click(function (argument) {
			clearTimeout(time);
			time = setTimeout(rightImg,100);
		});
		// 首行按键
		$(".cityName a").eq(0).click(function (argument) {
			otherImg(0);
			$(".cityName").animate({left:"0"});
		})
		$(".cityName a").eq(1).click(function (argument) {
			otherImg(1);
		})
		$(".cityName a").eq(2).click(function (argument) {
			otherImg(2);
		})
		$(".cityName a").eq(3).click(function (argument) {
			otherImg(3);
		})
		$(".cityName a").eq(4).click(function (argument) {
			otherImg(4);
			$(".cityName").animate({left:"-5px"});
		})
		// $(".cityName a").eq(5).click(function (argument) {
		// 	otherImg(5);
		// })
	}

	// 标题点击动画
	function otherImg(i) {
		// 首行按键加线
		// btLine();
		var i = i*-530;
		$(".cityBox").animate({left:+i+"px"},btLine);
		
	}
	// 鼠标悬浮标记
	function varFlag(argument) {
		flag = true;
		clearTimeout(autoTime);
	}
	function changeFlag(argument) {
		// body...
		flag = false;
		autoImg();
	}
	// 设置首行点击下划线
	function btLine(thisImg) {
		// body...
		$(".cityName a").eq(lastImg).removeClass("addCityClass");
		var a = $(".cityBox").css("left");
		a = parseInt(a);
		a = -Math.round(a/530);
		a==5?a=0:a;
		thisImg = a;
		$(".cityName a").eq(thisImg).addClass("addCityClass");
		lastImg = thisImg;
	}
})

// 添加轮播
otherIndex();
// 境外项目轮播，原生js
function otherIndex(argument) {
	// 获得境外轮播box
	var box = document.getElementsByClassName("other-index")[0];
	// 获得图片框
	var imgBox = box.getElementsByTagName('ul')[0];
	// 获得按钮
	var btLeft = document.getElementsByClassName("other-left")[0];
	var btRight = document.getElementsByClassName("other-right")[0];
	// 循环动画计时器
	var timeChange;
	// num存放imgBox的left值
	var num;
	// flag存放自动轮播条件标记，鼠标操作false
	var flag = true;

	// 动画原理：改变ul定位实现动画效果
	
	// 整体逻辑
	autoOther();
	function autoOther(argument) {
		// 自动轮播
		autoImg();
		// 按钮事件
		btChangeImg();
	}
	// 按钮事件
	function btChangeImg(argument) {
		// 鼠标悬浮图片，停止自动
		stopImg();
		// 鼠标移出图片，开始轮播
		newImg();
		// 鼠标点击按钮，不同效果
		btShow();
	}	
	// 动画循环，自动轮播
	function autoImg(argument) {
		// 获取imgBox的left值，初始值设为0		
		if (imgBox.style.left) {
			num = parseInt(imgBox.style.left);
		} else {
			num = 0;
		}
		// 如果鼠标在图片外，停止自动轮播
		if (flag==false) {
			return;
		}
		// 如果num==0，即left值为0，左移，否则右移
		if (num == 0) {
			timeChange = setTimeout(function (argument) {
				changeImgOne();
			},3000)
		} else {
			timeChange = setTimeout(function (argument) {
				changeImgTwo();
			},3000)
		}
	}
	// 左移动画
	function changeImgOne(argument) {
		// 显示右移按钮
		btRight.style.display = "block";
		// 隐藏左移按钮
		btLeft.style.display = "none";
		if (num>-528) {
			setTimeout(function (argument) {
				num -= 528/20;
				imgBox.style.left = +num+"px";
				changeImgOne();
			},10)
		} else {
			imgBox.style.left = -528+"px";
			num = -528;
			// 如果鼠标在图片外，回调
			flag == true? autoImg():flag;
		}
		
	}
	// 右移动画
	function changeImgTwo(argument) {
		// 隐藏右移按钮
		btRight.style.display = "none";
		// 显示左移按钮
		btLeft.style.display = "block";
		if (num<0) {
			setTimeout(function (argument) {
				// body...
				num += 528/20;
				imgBox.style.left = +num+"px";
				changeImgTwo();
			},10)
		} else {
			imgBox.style.left = 0+"px";
			num = 0;
			// 如果鼠标在图片外，回调
			flag == true? autoImg():flag;
		}
	}
	// 鼠标悬浮图片，停止自动
	function stopImg(argument) {
		box.addEventListener("mouseover",function (argument) {
			// body...
			clearTimeout(timeChange);
			flag = false;
		})
	}
	// 鼠标移出图片，开始轮播
	function newImg(argument) {
		box.addEventListener("mouseleave",function (argument) {
			// body...
			flag = true;
			autoImg();
		})
	}
	// 鼠标点击按钮，单次动画
	function btShow(argument) {
		// 点击左移
		btLeft.onclick = function (argument) {
			changeImgOne();
		}
		// 点击右移
		btRight.onclick = function (argument) {
			changeImgTwo();
		}
	}
}
