$(function(){

// Navbar Links
	/* to use : 1- add class (my-navbar) to navbar section 
				2- add class (active) to first li
				3- add attribute (data-target) to every li */ 
	$('.my-navbar li').click(function(){
		$('.my-navbar li').removeClass('active');
		$(this).addClass('active');

		if($(this).attr('data-target')){
			$('html , body').animate({
			scrollTop:  $('#'+$(this).data('target')).offset().top - $('.my-navbar').height()
			},1000);
		}
	});


});