define(['text!./card.html','css!./card.css'],function(content){
	function render(){
		$('#container').html(content);
	}
	return{
		render:render
	}
})
