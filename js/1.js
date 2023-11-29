// Скрытый блок 1
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


// Скрытый блок 2
// $(function(){
// 	$('.uslugi__img__rectangle').click(function(){
// 		$('.uslugi__text__none').slideToggle(300, function(){
// 			if ($(this).is(':hidden')) {
// 				console.log('1');
// 				$('.uslugi__img__x').addClass('.img__x__block');
// 				var Pr1=$('.uslugi__img__rectangle').hide();
// 				var Pr2=$('.uslugi__img__x').show();
// 				console.log(Pr1);
//                 $('.uslugi__img__rectangle').addClass('.img__rectangle__none');
// 				   Pr1=$('.uslugi__img__rectangle')
// 				console.log(Pr1);
			
//                 $('.uslugi__text__none').addClass('.uslugi__text__block');
// 			} else {
//                 $('.uslugi__text__none').removeClass('.uslugi__text__block');
// 				$('.uslugi__img__x').removeClass('.img__x__block');
// 				$('.uslugi__img__rectangle').removeClass('.img__rectangle__none');
// 				console.log('2');
// 			}							
// 		});
// 		return false;
// 	});
// });
 $(function(){
 	$('.uslugi__img__rectangle').click(function(){
 		$('.uslugi__text__none').slideToggle(300, function(){
			$('.uslugi__text__none').addClass('.uslugi__text__block');
		})
		var Pr1=$('.uslugi__img__rectangle').hide();
		var Pr2=$('.uslugi__img__x').show();
	})
	$('.uslugi__img__x').click(function(){
		$('.uslugi__text__none').slideToggle(300, function(){
		$('.uslugi__text__none').removeClass('.uslugi__text__block');
		})
		Pr1=$('.uslugi__img__rectangle').show();
		Pr2=$('.uslugi__img__x').hide();
	})
})
