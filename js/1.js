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
	
// ===============================================
// Страница 2 - выбор фото
$(function(){
	$('#a1').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-1.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a1').addClass('marker2_i1');
		})})
	$('#a2').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-2.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a2').addClass('marker2_i1');
		})   
	$('#a3').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-3.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a3').addClass('marker2_i1');
		})   
	$('#a4').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-4.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a4').addClass('marker2_i1');
		})
	$('#a5').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-5.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a5').addClass('marker2_i1');
		})   
	$('#a6').click(function(){
	$('.b1').hide(250).attr('src', './img/img-i2-6.jpg').show(250);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a6').addClass('marker2_i1');
		})   	

		// ===============================================
// Страница 2 - выбор текста
$(function(){
// запросили t1
	$('#t1').click(function(){
	$('.marker1_i1').removeClass('marker1_i1');
// добавили текущий маркер
	$('#t1').addClass('marker1_i1');
// удалили все четыре текста
	$('.text1_i1').hide(1000);
	$('.text2_i1').hide(1000);
	$('.text3_i1').hide(1000);
	$('.text4_i1').hide(1000);
	$('.text5_i1').hide(1000);
	$('.text6_i1').hide(1000);
// добавили текущий текст
	$('.text1_i1').show(1000);
	})})

$(function(){
	// запросили t2
	$('#t2').click(function(){
		// удалили старый маркер
			$('.marker1_i1').removeClass('marker1_i1');
		// добавили текущий маркер
			$('#t2').addClass('marker1_i1');
		// удалили все четыре текста
			$('.text1_i1').hide(1000);
			$('.text2_i1').hide(1000);
			$('.text3_i1').hide(1000);
			$('.text4_i1').hide(1000);
			$('.text5_i1').hide(1000);
			$('.text6_i1').hide(1000);
		// добавили текущий текст
			$('.text2_i1').show(1000);
	})})

	$(function(){
		// запросили t3
		$('#t3').click(function(){
			// удалили старый маркер
				$('.marker1_i1').removeClass('marker1_i1');
			// добавили текущий маркер
				$('#t3').addClass('marker1_i1');
			// удалили все четыре текста
				$('.text1_i1').hide(1000);
				$('.text2_i1').hide(1000);
				$('.text3_i1').hide(1000);
				$('.text4_i1').hide(1000);
				$('.text5_i1').hide(1000);
				$('.text6_i1').hide(1000);
			// добавили текущий текст
				$('.text3_i1').show(1000);
		})})

	$(function(){
	// запросили t4
	$('#t4').click(function(){
		// удалили старый маркер
			$('.marker1_i1').removeClass('marker1_i1');
		// добавили текущий маркер
			$('#t4').addClass('marker1_i1');
		// удалили все четыре текста
			$('.text1_i1').hide(1000);
			$('.text2_i1').hide(1000);
			$('.text3_i1').hide(1000);
			$('.text4_i1').hide(1000);
			$('.text5_i1').hide(1000);
			$('.text6_i1').hide(1000);
		// добавили текущий текст
			$('.text4_i1').show(1000);
	})})

	$(function(){
		// запросили t5
		$('#t5').click(function(){
			// удалили старый маркер
				$('.marker1_i1').removeClass('marker1_i1');
			// добавили текущий маркер
				$('#t5').addClass('marker1_i1');
			// удалили все четыре текста
				$('.text1_i1').hide(1000);
				$('.text2_i1').hide(1000);
				$('.text3_i1').hide(1000);
				$('.text4_i1').hide(1000);
				$('.text5_i1').hide(1000);
				$('.text6_i1').hide(1000);
			// добавили текущий текст
				$('.text5_i1').show(1000);
		})})
		$(function(){
			// запросили t5
			$('#t6').click(function(){
				// удалили старый маркер
					$('.marker1_i1').removeClass('marker1_i1');
				// добавили текущий маркер
					$('#t6').addClass('marker1_i1');
				// удалили все четыре текста
					$('.text1_i1').hide(1000);
					$('.text2_i1').hide(1000);
					$('.text3_i1').hide(1000);
					$('.text4_i1').hide(1000);
					$('.text5_i1').hide(1000);
					$('.text6_i1').hide(1000);
				// добавили текущий текст
					$('.text6_i1').show(1000);
			})})
// ===============================================
// Страница 2 - выбор блока текста 2
$(function(){
	// Первый блок
	$('.b11_i1').click(function(){
		$('.text11_i1').hide(1000);
		$('.text22_i1').hide(1000);
		$('.text33_i1').hide(1000);
		$('.text44_i1').hide(1000);

		$('.b11_i1').hide();
		$('.b22_i1').show();
		$('.b33_i1').show();
		$('.b44_i1').show();
		$('.text11_i1').show(1000);
		$('.b111_i1').show();
		$('.b222_i1').hide();
		$('.b333_i1').hide();
		$('.b444_i1').hide();


		$('.b111_i1').click(function(){
		$('.text11_i1').hide(1000);
		$('.b111_i1').hide();
		// $('.b222_i1').show();
		// $('.b333_i1').show();
		// $('.b444_i1').show();
		$('.b11_i1').show();
		// $('.b22_i1').hide();
		// $('.b33_i1').hide();
		// $('.b44_i1').hide();
		
})})})

$(function(){
	// Второй блок
	$('.b22_i1').click(function(){
		$('.text11_i1').hide(1000);
		$('.text22_i1').hide(1000);
		$('.text33_i1').hide(1000);
		$('.text44_i1').hide(1000);

		$('.b22_i1').hide();
		$('.b33_i1').show();
		$('.b44_i1').show();
		$('.b11_i1').show();
		$('.text22_i1').show(1000);
		$('.b222_i1').show();
		$('.b333_i1').hide();
		$('.b444_i1').hide();
		$('.b111_i1').hide();

		$('.b222_i1').click(function(){
		$('.text22_i1').hide(1000);
		$('.b222_i1').hide();
		$('.b22_i1').show();
})})})

$(function(){
	// Третий блок
	$('.b33_i1').click(function(){
		$('.text11_i1').hide(1000);
		$('.text22_i1').hide(1000);
		$('.text33_i1').hide(1000);
		$('.text44_i1').hide(1000);

		$('.b33_i1').hide();
		$('.b44_i1').show();
		$('.b11_i1').show();
		$('.b22_i1').show();
		$('.text33_i1').show(1000);
		$('.b333_i1').show();
		$('.b444_i1').hide();
		$('.b111_i1').hide();
		$('.b222_i1').hide();

		$('.b333_i1').click(function(){
		$('.text33_i1').hide(1000);
		$('.b333_i1').hide();
		$('.b33_i1').show();
})})})

$(function(){
	// Четвертый блок
	$('.b44_i1').click(function(){
		$('.text11_i1').hide(1000);
		$('.text22_i1').hide(1000);
		$('.text33_i1').hide(1000);
		$('.text44_i1').hide(1000);

		$('.b44_i1').hide();
		$('.b11_i1').show();
		$('.b22_i1').show();
		$('.b33_i1').show();
		$('.text44_i1').show(1000);
		$('.b444_i1').show();
		$('.b111_i1').hide();
		$('.b222_i1').hide();
		$('.b333_i1').hide();



		$('.b444_i1').click(function(){
		$('.text44_i1').hide(1000);
		$('.b444_i1').hide();
		$('.b44_i1').show();
})})})

// ===============================================
// Страница 3 - фильтр показания ползунков
// Мощность
$('.result').html($('#range1').val());
$(document).on('input change', '#range1', function() {
  $('.result').html($(this).val());
});
// Световой поток LED
$('.result2').html($('#range2').val());
$(document).on('input change', '#range2', function() {
  $('.result2').html($(this).val());
});
// Угол рассеивания
$('.result3').html($('#range3').val());
$(document).on('input change', '#range3', function() {
  $('.result3').html($(this).val());
});
// Минимальная цена
$('.result4').html($('#range4').val());
$(document).on('input change', '#range4', function() {
  $('.result4').html($(this).val());
});
// ===================================================
// Выпадающее меню 2
$(function(){
	let flag2=false
$('.podborka__oval_i3').click(function() {
	if(!flag2){
		$('.menu__element_i3').slideDown();
	}else{
		$('.menu__element_i3').slideUp();
	}
	flag2=!flag2;
	})})

// ===============================================
// Страница 4 - выбор текста
$(function(){
	// запросили t1_i4
		$('#t1_4').click(function(){
		$('.marker1_i4').removeClass('marker1_i4');
	// добавили текущий маркер
		$('#t4').addClass('marker1_i4');
	// удалили все четыре текста
		$('.text1_i4').hide(1000);
		$('.text2_i4').hide(1000);
		$('.text3_i4').hide(1000);
		$('.text4_i4').hide(1000);
		
	// добавили текущий текст
		$('.text1_i4').show(1000);
		})})
	
	$(function(){
		// запросили t2_i4
		$('#t2_i4').click(function(){
			// удалили старый маркер
				$('.marker1_i4').removeClass('marker1_i4');
			// добавили текущий маркер
				$('#t2_i4').addClass('marker1_i4');
			// удалили все четыре текста
				$('.text1_i4').hide(1000);
				$('.text2_i4').hide(1000);
				$('.text3_i4').hide(1000);
				$('.text4_i4').hide(1000);
				$('.text5_i4').hide(1000);
				$('.text6_i4').hide(1000);
			// добавили текущий текст
				$('.text2_i4').show(1000);
		})})
	
		$(function(){
			// запросили t3_i4
			$('#t3_i4').click(function(){
				// удалили старый маркер
					$('.marker1_i4').removeClass('marker1_i4');
				// добавили текущий маркер
					$('#t3_i4').addClass('marker1_i4');
				// удалили все четыре текста
					$('.text1_i4').hide(1000);
					$('.text2_i4').hide(1000);
					$('.text3_i4').hide(1000);
					$('.text4_i4').hide(1000);
					
				// добавили текущий текст
					$('.text3_i4').show(1000);
			})})
	
		$(function(){
		// запросили t4_i4
		$('#t4').click(function(){
			// удалили старый маркер
				$('.marker1_i4').removeClass('marker1_i4');
			// добавили текущий маркер
				$('#t4_i4').addClass('marker1_i4');
			// удалили все четыре текста
				$('.text1_i4').hide(1000);
				$('.text2_i4').hide(1000);
				$('.text3_i4').hide(1000);
				$('.text4_i4').hide(1000);
				
			// добавили текущий текст
				$('.text4_i4').show(1000);
		})})
	
	// ===============================================