$(".cub").mouseenter( function(){
		$(".cub3").css("visibility", "visible")	
	}
);
$(".cub1").mouseenter( function(){
		$(".cub3").animate({ 
			left: '0'
		}, 1000);
		$(".cub1").animate(1000).addClass("loader");	
	}
);