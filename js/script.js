
$(document).ready(function() {

/* 	$("#bgVid").get(0).play(); */
		
	$(document).scroll(function() {
		if($(window).scrollTop() > $("#previewVid").offset().top - 300 
		&& $(window).scrollTop() < $("#previewVid").offset().top - 300 + $("#previewVid").height()) {
			$("#previewVid").get(0).setAttribute("controls", "");
			$("#previewVid").get(0).play();
			
		} else {
			$("#previewVid").get(0).pause();
			$("#previewVid").get(0).removeAttribute("controls");
		}
	});


	/*
$(document).scroll(function() {
		if($(window).scrollTop() > $("#mofVid").offset().top - 200 
		&& $(window).scrollTop() < $("#mofVid").offset().top - 200 + $("#mofVid").height()) {
			$("#mofVid").get(0).setAttribute("controls", "");
			$("#mofVid").get(0).play();
			
		} else {
			$("#mofVid").get(0).pause();
			$("#mofVid").get(0).removeAttribute("controls");
		}
	});
*/

		
})