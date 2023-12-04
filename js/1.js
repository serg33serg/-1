// КАТАЛОГ
//блок 1
$(document).ready(function(){
	
	$('.content_toggle').click(function(){
		$('.content_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
                $('.content_toggle').removeClass('on__yellow');
                $('.content_toggle').addClass('on__black');
			} else {
                $('.content_toggle').removeClass('on__black');
                $('.content_toggle').addClass('on__yellow');
			}							
		});
		return false;
	});
});

// ========================================================
// УСЛУГИ
// блок 1
 $(function(){
 	$('#r1').click(function(){
 		$('.uslugi__text__none').slideToggle(300, function(){
			$('.uslugi__text__none').addClass('.uslugi__text__block');
		})
		var Pr1=$('#r1')
		Pr1.hide();
		var Pr2=$('.uslugi__img__x')
		Pr2.show(500);
	})
	$('.uslugi__img__x').click(function(){
		$('.uslugi__text__none').slideToggle(300, function(){
		$('.uslugi__text__none').removeClass('.uslugi__text__block');
		})
		Pr2=$('.uslugi__img__x')
		Pr1=$('#r1')
		Pr2.hide();
		Pr1.show();
		
	})
})

// ================================================================
// footer ссылки
$(function(){
	$('.footer a, .header__nav__nav > li > a').mouseenter(function(){
	$(this).css("color", "#FFC94F")})})
	$('.footer a, .header__nav__nav > li > a').mouseleave(function(){
		$(this).css("color", "#FFF")})

// ================================================================
// Выпадающее меню
$(function(){
	let flag=false
$('.podborka__oval').click(function() {
	if(!flag){
		$('.menu__element').slideDown();
	}else{
		$('.menu__element').slideUp();
	}
	flag=!flag;
	})})

	// =======================================
	// Бургер меню выезжает
	$(function(){
$('.header__burger').click(function(){
$('.nav__block2').show(500);
$('.header__nav').hide(500);

})
$('.nav__close').click(function(){
	$('.nav__block2').hide(500);
	$('.header__nav').show(500);
})
	
})
$(window).resize(function() {
	 	if (window.innerWidth >= 860) {
			$('.nav__block2').hide(500);
			$('.header__nav').show(500);
	}})
	

