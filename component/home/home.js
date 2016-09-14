define(['touch','text!./home.html','css!./home.css'],function(touch,content){
	function render(){
		$('#container').html(content);
	}

	function getData(){
	 	$.ajax({
	 		type:'get',
	 		url:'1.json',
	 		async:true,
	 		success:function(data){
//	 			console.log(data);
	 			setData(data);
	 		},
	 		error:function(err){
	 			console.log(err);
	 		}
	 	})
	 	function setData(data){
			var loopArr = data.slider;
			var listArr = data.arealist;
			var picArr = data.reclist;
//			console.log(loopArr);
			//将图片添加进去
			for (var i = 0; i < loopArr.length; i++) {
				var oImg = $("<a href='javascript:void(0)'><img src='"+ loopArr[i].img +"'/></a>");
				$('.loopbox').append(oImg);
				$('.showbox_bottom .dot li').eq(0).css({
					'background':'gray'
				})
			}
			//添加中间两个图片
			for(var j = 0;j<listArr.length;j++){
				var img = $("<a href='javascript:void(0)'><img src='"+ listArr[j].img +"'/></a>");
				$('.list').append(img);
			}
			//底部的图片列表
			for(var k = 0;k<picArr.length;k++){
				var imgObj = $("<a href='javascript:void(0)'><img src='"+ picArr[k].img +"'/></a>");
				$('.bottom_list').append(imgObj);
			}
			//轮播
			var i = 0;
			var loopTimer = setInterval(loop,2000);
			function loop(){
				i++;
				if(i == 3){
					i = 0;
				}
				loopTitle(i)
			}
			touch.on('.loopbox','swipeleft',function(){
				clearInterval(loopTimer);
				i++;
				if( i >= 3){
					i = 0;
				}
				loopTitle(i);
				loopTimer = setInterval(loop,2000);
			})
			touch.on('.loopbox','swiperight',function(){
				clearInterval(loopTimer);
				i--;
				if( i < 0 ){
					i = 1;
				}
				loopTitle(i);
				loopTimer = setInterval(loop,2000);
			})
		}
		//图片轮播
		function loopTitle(i){
			$('.showbox_bottom .dot li').css({
				'background':'gray'
			})
			$('.showbox_bottom .dot li').eq(i).css({
				'background':'red'
			})
			$('.loopbox').stop().animate({
				'left':-100 * i + '%'
			},300)
		}
	}
	return{
		render:render,
		getData:getData
	}
})