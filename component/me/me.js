define(['text!./me.html','css!./me.css'],function(content){
	function render(){
		$('#container').html(content);
	}
	return{
		render:render
	}
})
