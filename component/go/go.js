define(['text!./go.html','css!./go.css'],function(content){
	function render(){
		$('#container').html(content);
	}
	function getData(){
		$.ajax({
			type:'get',
			url:"2.json",
			async:true,
			success:function(res){
				setData(res.data);
			}
		})
		function setData(arr){
			for(var i = 0;i<arr.length;i++){
				var oimg = $('<li><a href="javascript:void(0)"><img src="'+ arr[i].img +'"/></a></li>');
				$("#classify_list").append(oimg);	
			}
		}
	}
	return{
		render:render,
		getData:getData
	}
})