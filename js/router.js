//定义路由
define(['backbone'],function(backbone){
	var Router = Backbone.Router.extend({
		routes:{
			'home':'homefunc',
			'card':'cardfunc',
			'go':'gofunc',
			'me':'mefunc'
		},
		homefunc:function(){
			require(['./component/home/home.js'],function(home){
				console.log(home);
				home.render();
				home.getData();
			});
		},
//		cardfunc:function(){
//			require(['./component/card/card.js'],function(card){
//				card.render()
//			})
//		},
		gofunc:function(){
			require(['./component/go/go.js'],function(go){
				console.log(go);
				go.render();
				go.getData();
			});
		}
	})
	//实例化
	var router = new Router();
})