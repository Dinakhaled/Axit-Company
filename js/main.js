$(function(){

	// Trigger nice scroll

	$('html').niceScroll({
		cursorcolor: "#ff8b38",
		cursorwidth: "4px",
		cursorborder: "1px solid #ff8b38",
		cursorborderradius :0
	});

	//smooth scroll

	$(".navbar-nav li a").click(function(){

		$('html,body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		},1000);

	});

	// links Add Active Class	

	$('.navbar-nav li').click(function() {

    $('.navbar-nav li.active').removeClass('active'); 

    $(this).addClass('active'); 

    });

    //Hide navbar on mobile screen

	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});

	// Tabs
	$(".tab-switch li").click(function(){
		$(this).addClass("tab-active").siblings().removeClass("tab-active");

		$(".tabs .tab-content > div").hide();

		$("." + $(this).data("class")).fadeIn(1000);
	});



});