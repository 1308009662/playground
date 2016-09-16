//定义路由
define(['backbone'],function(backbone){
	var Router = Backbone.Router.extend({
		routes:{
			'home':'homefunc',
			'card':'cardfunc',
			'go':'gofunc',
			'me':'mefunc'
		},

		//关联各个页面
		homefunc:function(){
			require(['./component/home/home.js'],function(home){
				console.log(home);
				home.render();
				home.getData();
			});
			$('.tabbar a').css({
				"color":"black"
			});
			$('#a1').css({
				"color":"red"
			});
		},
		cardfunc:function(){
			require(['./component/card/card.js'],function(card){
				card.render()
			});
			$('.tabbar a').css({
				"color":"black"
			});
			$('#a3').css({
				"color":"red"
			});
		},
		gofunc:function(){
			require(['./component/go/go.js'],function(go){
				console.log(go);
				go.render();
				go.getData();
			});
			$('.tabbar a').css({
				"color":"black"
			});
			$('#a2').css({
				"color":"red"
			});
		},
		mefunc:function(){
			require(['./component/me/me.js'],function(me){
				me.render()
			});
			$('.tabbar a').css({
				"color":"black"
			});
			$('#a4').css({
				"color":"red"
			});
		}
	})
	//实例化
	var router = new Router();
})