$(document).ready(function(){
	
	$(".lightbox_link").on("click", function(e){
		console.log(this);
		e.preventDefault()

		$(".outer-lightbox").show();
		$("#this-image").attr("src","images/cherry-pie.png");
		$(".outer-lightbox").on("click", function(){	
		$(".outer-lightbox").hide();
	})
})
	$(".lightbox").on("click", function(e){
		e.preventDefault()
		console.log(this);

		$(".outer-lightbox").show();
		$("#this-image").attr("src","images/NYCDA-logo.jpg");
		$(".outer-lightbox").on("click", function(){	
		$(".outer-lightbox").hide();
		})
	})
});
