$(document).ready(function(){
	
	$(".lightbox_link").on("click", function(){

		console.log("Hello, Hi, Welcome!");
		$(".outer-lightbox").show();
		$(".outer-lightbox").on("click", function(){	
		$(".outer-lightbox").hide();
	})

	})
});
