$(document).ready(function(){

$('.jump').click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
});

$('.openText').click(function(){
	var dis = $(this);
	var that = $(this).parents(".pabsolute");
	that.animate({
		"left":"0"				
	}, 500,function(){
		dis.toggle(false);
		that.find('.closeText').toggle(true);
	});
	return false;
});

$('.closeText').click(function(){
	var dis = $(this);
	var that = $(this).parents(".pabsolute");
	that.animate({
		"left":"-200"				
	}, 500,function(){
		dis.toggle(false);
		that.find('.openText').toggle(true);
	});
	return false;
});


$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/1company.jpg')").fadeIn(800);
    }  
}, '#companyLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/2showroom.jpg')").fadeIn(800);
    }   
}, '#showroomLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/3facilities_DSC4526a.jpg')").fadeIn(800);
    }   
}, '#facilitiesLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/4services.jpg')").fadeIn(800);
    }   
}, '#servicesLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/5Clients_DSC4419a.jpg')").fadeIn(800);
    }   
}, '#clientLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/6contact.jpg')").fadeIn(800);
    }   
}, '#contactLink');

$(document).on({
    mouseenter: function () {
    	$('#mainBackgroundImage').hide().css("background-image", "url('/public/images/anasayfa/7career.jpg')").fadeIn(800);
    }   
}, '#careerLink');




});