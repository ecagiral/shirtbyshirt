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
		that.find('#companyText').toggle(true);
		that.find('.closeText').toggle(true);
	});
	return false;
});

$('.closeText').click(function(){
	var dis = $(this);
	var that = $(this).parents(".pabsolute");
	that.animate({
		"left":"-260"				
	}, 500,function(){
		dis.toggle(false);
		that.find('#companyText').toggle(false);
		that.find('.openText').toggle(true);
	});
	return false;
});


$('#mainPageImages').cycle({
	fx:     'fade', 
    speed:  '500', 
    timeout: 0, 
    next:   '#yarak', 
});

$(document).on({
    mouseenter: function () {    	    	        
    	$('#yarak').trigger("click");
    }  
}, '.jump');




});