//配置模块路径
require.config({
	paths:{
		jquery:'./lib/jquery-1.12.3',
		underscore:'./lib/underscore',
		backbone:'./lib/backbone',
		bootstrap:'./lib/bootstrap',
		router:'./js/router',
		text:'./lib/text',
		css:'./lib/css',
		touch:'./js/touch',
		baiduTemplate:'./lib/baiduTemplate'//百度模板
	},
	shim: {
	    backbone: ['jquery','underscore'],
	    bootstrap: ['jquery']
	}
})
require(['jquery','backbone','router','touch'],function($,backbone,router,touch){
	
	touch.on('.tabbar a span','tap',function(){
		$('.tabbar a').removeClass('bluecolor');
		$(this).parent().addClass('bluecolor');
	});
	//设置监听地址栏锚点的变化
	backbone.history.start();
})