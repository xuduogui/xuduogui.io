// 视频中心
// 这里使用jq

$(document).ready(function (argument) {
	// 标记轮播当前标号
	var flag = 0;
	// 标记轮播前一个标号
	var lastFlag;
	// 标记是否鼠标操作
	var mouseFlag = false;
	// 轮播间隔计时器
	var timeOne;
	// 重新轮播间隔计时器
	var timeTwo;

	// 自动轮播、按键事件
	aotuVideo()
	function aotuVideo(argument) {
		// 自动轮播
		mouseFlag == false? aotuImg():mouseFlag;
		// 按钮事件
		btAll();
	}
	// 轮播
	function aotuImg(argument) {
		switch (flag) {
			case 0:{
				top();
				break;
			}
			case 1:{
				middle();
				break;
			}
			case 2:{
				bottom();
				break;
			}
		}
		flag++;
		flag == 3? flag=0:flag;
		// 回调
		timeOne = setTimeout(function () {
			mouseFlag == false? aotuImg():mouseFlag;
		},2000);
	}
	// 单次事件
	function btAll() {
		$(".indexVideoSmall a:eq(0)").hover(function () {
			if (flag==0) {
				return;
			}
			flag = 0;
			top();
		});
		$(".indexVideoSmall a:eq(1)").hover(function () {
			if (flag==1) {
				return;
			}
			flag = 1;
			middle();
		});
		$(".indexVideoSmall a:eq(2)").hover(function () {
			if (flag==2) {
				return;
			}
			flag = 2;
			bottom();
		});
		$(".videoBox").hover(function () {
			clearTimeout(timeOne);
			clearTimeout(timeTwo);
			mouseFlag = true;
		})
		$(".videoBox").mouseleave(function () {
			mouseFlag = false;
			flag++;
			timeTwo = setTimeout(aotuImg,2000);
		})
	}
	// 动画事件
	function top() {
		imgShow();
		$(".video-border").animate({top:"0px"},100);
		var value = $(".indexVideoBig a:eq(0)").attr("href");
		$(".videoButton").attr("href","value");
	}
	function middle() {
		imgShow();
		$(".video-border").animate({top:"72px"},100);
		var value = $(".indexVideoBig a").eq(1).attr("href");
		$(".videoButton").attr("href","value");
	}
	function bottom() {
		imgShow();
		$(".video-border").animate({top:"144px"},100);
		var value = $(".indexVideoBig a:eq(2)").attr("href");
		$(".videoButton").attr("href","value");
	}
	// 大图动画
	function imgShow(argument) {
		$(".indexVideoBig li:eq("+flag+")").css("z-index","0").animate({opacity:"1"});
		$(".indexVideoBig li:eq("+lastFlag+")").css("z-index","-1").animate({opacity:"0"});
		lastFlag = flag;
	}

})