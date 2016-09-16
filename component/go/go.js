define(['text!./go.html','css!./go.css'],function(content){
	function render(){
		$('#container').html(content);
	}
	function getData(){
		$.ajax({
			type:'get',
//			url:"2.json",
			url:"http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城",
			async:true,
			success:function(res){
				setData(JSON.parse(res));
			}
		})
		function setData(arr){
			var narr = arr.data;
			for(var i = 0;i<narr.length;i++){
				var oimg = $('<li><div class="f">享</div><a href="javascript:void(0)"><img src="'+ narr[i].img +'" class="first"/></a><p class="shopname">'+ narr[i].name +'</p><p class="erar">'+ narr[i].address+'</p><sapn class="dis">'+ narr[i].dist +'公里</sapn><span class="fa fa-map-marker"></span></li>');
				$("#classify_list").append(oimg);	
			}
		}
		$('.firstli a').on('click',function(){
			$('#mytype').toggle(1500);
		});
		$('.secondli a').on('click',function(){
			$('#myall').toggle(1500);
		});
		$('.thirdli a').on('click',function(){
			$('#mylist').toggle(1500);
		});
	}
	return{
		render:render,
		getData:getData
	}
})