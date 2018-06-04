
// body
	var navbar_height = $(".upper-navbar").innerHeight() + $(".lower-navbar").innerHeight();
	$("body").css({
		"margin-top":navbar_height
	});
	$(window).resize(function(){
		var navbar_height = $(".upper-navbar").innerHeight() + $(".lower-navbar").innerHeight();
		$("body").css({
			"margin-top":navbar_height
		})
	})

//Navbar
	// language selection
	$(".lower-navbar .second-col .dropdown .dropdown-menu .dropdown-item").click(function(){
		$(".lower-navbar .second-col .dropdown span.language-selected").text($(this).text());
	});

	// 
	var upper_nav_height = $(".upper-navbar").innerHeight();
	$('.lower-navbar').css({
		top: upper_nav_height
	});

	$(window).resize(function(){
		var upper_nav_height = $(".upper-navbar").innerHeight();
	$('.lower-navbar').css({
		top: upper_nav_height
	});
	})


// Videos Button
	$(".why-update .video ,.how-update .video , .built-in-navigation .video").click(function(){
		$(".video-window").css("display","block")
	});
	$(".video-window .video span").click(function(){
		$(".video-window").css("display","none")
	});
	$(".video-window").click(function(){
		$(this).css("display","none")
	})























