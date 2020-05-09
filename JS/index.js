/*    ABHILASH GUPTA     */


$(function(){								/*    Load Header and Footer     */
    $(".navbar").load("header.html");
	$(".footer").load("footer.html");	  
});

$(window).scroll(function(){								/*  Check for Scroll   */
    if ($(window).scrollTop() >= $(window).height()/4) {
		$("#content_left").animate({marginLeft:'20%',opacity:'1'},1000,function() {			/*   Bring Contents    */
		$("#content_right").animate({marginRight:'20%',opacity:'1'},1000);	
		$(".footerpage").animate({opacity:'1'},2500);
		});
		
		$('.logo_class').attr('class','logo_class changelogo_class');						/*   Change Logo    */
		$('.navbar').attr('class','navbar navbarchange_class');
	}	
    else {
		$('.logo_class').attr('class','logo_class');
		$('.navbar').attr('class','navbar');
	}
});
