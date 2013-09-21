$(document).ready(function(){

$('.nav li.dropdown').hover(function() {
    $(this).addClass('open');
}, function() {
    $(this).removeClass('open');
});
	
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
		"left":"-290"				
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

$("#tr_big_logo").mouseover(function() {	
	if(!$(this).hasClass("clicked")){		
		$('#tr_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});
	}
}).mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#tr_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
	}
});

$("#vi_big_logo").mouseover(function() {
	if(!$(this).hasClass("clicked")){
		$('#vi_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});
	}
}).mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#vi_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
	}
});

$("#ba_big_logo").mouseover(function() {
	if(!$(this).hasClass("clicked")){
		$('#ba_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});
	}
}).mouseout(function() {
	if(!$(this).hasClass("clicked")){
		$('#ba_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
	}
});

var acHeight = $('#accordionContainer').height();
$('#accordion-slider>li .i').height(acHeight+70);


$(document).on("click", ".countryIcons", function(event){
	var country = $(this).attr('data-type');
	$(".countryIcons").removeClass("clicked");
	$(this).addClass("clicked");
	if(country == "ban"){		

		$('#tr_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
		$('#vi_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});		
		$('#ba_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});	
		
		$('#turkey').toggle(false);
		$('#vietnam').toggle(false);
		$('#bangladesh').toggle(true);
		
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').animate({
			height:"50%"
		});
		
		
	}
	else if(country == "tr"){

		$('#ba_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
		$('#vi_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});		
		$('#tr_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});	
		
		$('#vietnam').toggle(false);
		$('#bangladesh').toggle(false);
		$('#turkey').toggle(true);
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').animate({
			height:"50%"
		});
	}
	else if(country == "viet"){

		$('#tr_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});
		$('#ba_big_logo').animate({
			"margin-left":"-30px",
			"width":"50px"
		});		
		$('#vi_big_logo').animate({
			"margin-left":"-35px",
			"width":"65px"
		});	

		
		$('#turkey').toggle(false);
		$('#bangladesh').toggle(false);
		$('#vietnam').toggle(true);
		$('#facilitiesBottomTextContainer').toggle(true);
		$('#accordionContainer').animate({
			height:"50%"
		});
	}
});

});