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
		that.find('.sliderText').toggle(true);
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
		that.find('.sliderText').toggle(false);
		that.find('.openText').toggle(true);
	});
	return false;
});


$('#mainPageImages').cycle({
	fx:     'fade', 
    speed:  '500', 
    timeout: 0, 
    next:   '#fotolar', 
});

$(document).on({
    mouseenter: function () {    	    	        
    	$('#fotolar').trigger("click");
    }  
}, '.jump');

$("#tr_small_logo").mouseover(function() {	
	if(!$(this).hasClass("clicked")){
		$('#tr_small_logo').toggle(false);
		$('#tr_big_logo').toggle(true);
	}
});

$('#tr_big_logo').mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#tr_small_logo').toggle(true);
		$('#tr_big_logo').toggle(false);
	}
});

$("#vi_small_logo").mouseover(function() {
	if(!$(this).hasClass("clicked")){
		$('#vi_small_logo').toggle(false);
		$('#vi_big_logo').toggle(true);
	}
});

$('#vi_big_logo').mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#vi_small_logo').toggle(true);
		$('#vi_big_logo').toggle(false);
	}
});

$("#ba_small_logo").mouseover(function() {
	if(!$(this).hasClass("clicked")){
		$('#ba_small_logo').toggle(false);
		$('#ba_big_logo').toggle(true);
	}
});

$('#ba_big_logo').mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#ba_small_logo').toggle(true);	
		$('#ba_big_logo').toggle(false);
	}
});

var acHeight = $('#accordionContainer').height();
$('#accordion-slider>li .i').height(acHeight+70);


$(document).on("click", ".countryIcons", function(event){
	var country = $(this).attr('data-type');
	$(this).toggleClass("clicked");
	if(country == "ban"){		
		$('#tr_small_logo').toggle(true);
		$('#tr_big_logo').toggle(false);
		$('#vi_small_logo').toggle(true);
		$('#vi_big_logo').toggle(false);
		
		$('#turkey').toggle(false);
		$('#vietnam').toggle(false);
		$('#bangladesh').toggle(true);
		
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').css("height","50%");
	}
	else if(country == "tr"){
		$('#ba_small_logo').toggle(true);
		$('#ba_big_logo').toggle(false);
		$('#vi_small_logo').toggle(true);
		$('#vi_big_logo').toggle(false);
		
		$('#vietnam').toggle(false);
		$('#bangladesh').toggle(false);
		$('#turkey').toggle(true);
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').css("height","50%");
	}
	else if(country == "viet"){
		$('#ba_small_logo').toggle(true);
		$('#ba_big_logo').toggle(false);
		$('#tr_small_logo').toggle(true);
		$('#tr_big_logo').toggle(false);
		
		$('#turkey').toggle(false);
		$('#bangladesh').toggle(false);
		$('#vietnam').toggle(true);
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').css("height","50%");
	}
});

});