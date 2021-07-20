jQuery(window).load(function() {
	"use strict";
	//PRELOADER
	jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
});


jQuery(document).ready(function($){
    'use strict';
	$('.img-holder').imageScroll();
	
	// Scrollbar 
	// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	// window.onmousewheel = document.onmousewheel = wheel;
	 
	// function wheel(event) {
	// 	var delta = 0;
	// 	if (event.wheelDelta) delta = event.wheelDelta / 120;
	// 	else if (event.detail) delta = -event.detail / 3;
	 
	// 	handle(delta);
	// 	if (event.preventDefault) event.preventDefault();
	// 	event.returnValue = false;
	// }
	 
	// function handle(delta) {
	// 	var time = 800; // delay time
	// 	var distance = 350; // delta point 
	// 	// Dom where it will apply 
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(window).scrollTop() - (distance * delta)
	// 	}, time );
	// }
	
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(document).ready(function($){
	'use strict';
	$('.Main_Menu').singlePageNav({
		offset: 60,
		updateHash: false,
	});
});

$(window).on("scroll touchmove", function () {
    $('#header_nav').toggleClass('navbar-shrink', $(document).scrollTop() > 0);
});

// Highlight the top nav as scrolling occurs
jQuery(document).ready(function($){
	'use strict';
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});
	// Modal
	// $('#myModal1').on('hidden.bs.modal', function (e) {
		// $('body').removeClass('modal-open');
	// });
});

// Closes the Responsive Menu on Menu Item Click
jQuery(document).ready(function($){
	'use strict';
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
});


// Image Popup
jQuery(document).ready(function($){
	"use strict";
	$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
});



/*  Family member carosel 1 */
jQuery(document).ready(function($) {
	  "use strict";
	  $("#family_member1").owlCarousel({
		  autoPlay: false, //Set AutoPlay to 3 seconds
		  items : 2,
		  itemsDesktop : [1199,1],
		  itemsDesktopSmall : [979,1],
		  itemsTablet :	[768,1],
		  itemsMobile :	[479,1]
	  });
	 
});	
/*  Family member carosel 2 */
jQuery(document).ready(function($) {
   "use strict";
  $("#family_member2").owlCarousel({
	  autoPlay: false, //Set AutoPlay to 3 seconds
	  items : 2,
	  itemsDesktop : [1199,1],
	  itemsDesktopSmall : [979,1],
	  itemsTablet :	[768,1],
	  itemsMobile :	[479,1]
  });
 
});	

/*  Family member carosel 3 */
jQuery(document).ready(function($) {
	  "use strict";
	  $(".family_mem_caro_3").owlCarousel({
		  autoPlay: true, //Set AutoPlay to 3 seconds
		  items : 1,
		  itemsDesktop : [1199,1],
		  itemsDesktopSmall : [979,1],
		  itemsTablet :	[768,1],
		  itemsMobile :	[479,1]
	  });
	 
});	

/* Love story carosel */
jQuery(document).ready(function($) {
   "use strict";
  $("#love_carosel").owlCarousel({
	  autoPlay: false, //Set AutoPlay to 3 seconds
	  singleItem: true
  });
 
});	
//Mixit up
jQuery(document).ready(function($){
		"use strict";
		$('.photo-container').mixItUp();
});	
// Back to Top
jQuery(document).ready(function($){
	"use strict";
	$(window).scroll(function(){
		if ($(this).scrollTop() > 450) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});

//CountDown timer

// Countdown
jQuery(document).ready(function($){
	'use strict';
	var weddingDate = new Date();
	var weddingDate = new Date(weddingDate.getFullYear() + 1, 1 - 1, 1);
	$(".countdown").countdown({
		until: new Date(2021, 6, 29, 8, 0, 0),
		padZeroes: true,
		format: 'ODHMS'
	});
});

// Smooth Slider
jQuery(window).load( function() {
	'use strict';
	if(jQuery('.ss-slides').length) {
	$(document).smoothSlides({
	duration: 5000,
	captions: false,
	effect:'zoomOut',
	pagination:false,
	nextText:'<i class="fa fa-angle-right"></i>',
	prevText:'<i class="fa fa-angle-left"></i>'
	/* options seperated by commas */
	});
	};
});

// Flex Slider		
jQuery(document).ready(function($){
	'use strict';
	if(jQuery('.flexslider').length) {
	 $('.flexslider').flexslider({
		animation: "slide", 
		controlNav: false,
		slideshow: true,
               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		easing: "linear",           
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		prevText: '<i class="fa fa-angle-left"></i>',           //String: Set the text for the "previous" directionNav item
		nextText:  '<i class="fa fa-angle-right"></i>'              //String: Set the text for the "next" directionNav item
 	    
	});
	};
});
	  
//Tab js
jQuery(document).ready(function($) {
	"use strict";
	$('.family_tab_4 ul li:first-child a').on('shown.bs.tab', function (e) { 
		var target = $(this).attr('href');

		$(target).css('left','-'+$(window).width()+'px');   
		var left = $(target).offset().left;
		$(target).css({left:left}).animate({"left":"0px"}, "slow");
	});
	$('.bmaid_sec ul li a').on('shown.bs.tab', function (e) { 
		var target = $(this).attr('href');

		$(target).css('left','-'+$(window).width()+'px');   
		var left = $(target).offset().left;
		$(target).css({left:left}).animate({"left":"0px"}, 800);
	});
	$('.gmen_sec ul li a').on('shown.bs.tab', function (e) { 
		var target = $(this).attr('href');

		$(target).css('right','-'+$(window).width()+'px');   
		var right = $(target).offset().right;
		$(target).css({right:right}).animate({"right":"0px"}, 800);
	});
	$('.family_tab_4 ul li:last-child a').on('shown.bs.tab', function (e) { 
		var target = $(this).attr('href');

		$(target).css('right','-'+$(window).width()+'px');   
		var right = $(target).offset().right;
		$(target).css({right:right}).animate({"right":"0px"}, "slow");
	});
});







//<![CDATA[
jQuery(document).ready(function($){
     "use strict";
	if(jQuery('#jquery_jplayer_1').length) {
	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			});
		},
		swfPath: "../../dist/jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
	};
});
//]]>

// Pagination Script
jQuery(document).ready(function($){
  $(".blog_main_sec .pagination > li > a").click(function(){
	$(this).parent().addClass("active disabled");
	$(".blog_main_sec .pagination > li").removeClass("active disabled");
  });
});

jQuery(document).ready(function($){
  $(".blog_main_sec .pagination > li:nth-child(2) > a").click(function(){
	$(".blog_main_sec .pagination > li:nth-child(1)").addClass("hide");
  });
  $(".blog_main_sec .pagination > li:not(:nth-child(2)) > a").click(function(){
	$(".blog_main_sec .pagination > li:nth-child(1)").removeClass("hide");
  });
  $(".blog_main_sec .pagination > li:nth-last-child(2) > a").click(function(){
	$(".blog_main_sec .pagination > li:last-child").addClass("hide");
  });
  $(".blog_main_sec .pagination > li:not(:nth-last-child(2)) > a").click(function(){
	$(".blog_main_sec .pagination > li:last-child").removeClass("hide");
  });
});
