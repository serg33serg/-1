// КАТАЛОГ
//блок 1 - аккордеон списка 1
$(document).ready(function(){

// первый элемент списка
$('.svet1').click(function(){
	$('.on__yellow').removeClass('on__yellow').addClass('on__black2');
	$('.svet22').hide();
	$('.svet33').hide();
	$('.svet44').hide();
	$('.svet55').hide();
	$('.svet11').slideToggle(300, function(){
		if ($(this).is(':hidden')) {
			$('.svet1').removeClass('on__yellow');
			$('.svet1').addClass('on__black2');
		} else {
			$('.svet1').removeClass('on__black2');
			$('.svet1').addClass('on__yellow');
		}							
	});
	return false;
});
// второй элемент списка
$('.svet2').click(function(){
	$('.on__yellow').removeClass('on__yellow').addClass('on__black2');
	$('.svet11').hide();
	$('.svet33').hide();
	$('.svet44').hide();
	$('.svet55').hide();
	$('.svet22').slideToggle(300, function(){
		if ($(this).is(':hidden')) {
			$('.svet2').removeClass('on__yellow');
			$('.svet2').addClass('on__black2');
		} else {
			$('.svet2').removeClass('on__black2');
			$('.svet2').addClass('on__yellow');
		}							
	});
	return false;
});

// третий элемент списка
$('.svet3').click(function(){
	$('.on__yellow').removeClass('on__yellow').addClass('on__black2');
	$('.svet11').hide();
	$('.svet22').hide();
	$('.svet44').hide();
	$('.svet55').hide();
	$('.svet33').slideToggle(300, function(){
		if ($('.svet33').is(':hidden')) {
			$('.svet3').removeClass('on__yellow');
			$('.svet3').addClass('on__black2');
		} else {
			$('.svet3').removeClass('on__black2');
			$('.svet3').addClass('on__yellow');
		}							
	});
	return false;
});
// четвертый элемент списка
$('.svet4').click(function(){
	$('.on__yellow').removeClass('on__yellow').addClass('on__black2');
	$('.svet11').hide();
	$('.svet22').hide();
	$('.svet33').hide();
	$('.svet55').hide();
	$('.svet44').slideToggle(300, function(){
		if ($(this).is(':hidden')) {
			$('.svet4').removeClass('on__yellow');
			$('.svet4').addClass('on__black2');
		} else {
			$('.svet4').removeClass('on__black2');
			$('.svet4').addClass('on__yellow');
		}							
	});
	return false;
});

// пятый элемент списка
$('.svet5').click(function(){
	$('.on__yellow').removeClass('on__yellow').addClass('on__black2');
	$('.svet11').hide();
	$('.svet22').hide();
	$('.svet33').hide();
	$('.svet44').hide();
	$('.svet55').slideToggle(300, function(){
		if ($(this).is(':hidden')) {
			$('.svet5').removeClass('on__yellow');
			$('.svet5').addClass('on__black2');
		} else {
			$('.svet5').removeClass('on__black2');
			$('.svet5').addClass('on__yellow');
		}							
	});
	return false;
});
});
// ========================================================
// УСЛУГИ (раскрывающийся список аккордеон)
// блок 1
 $(function(){
	let flagg1=0;
	let flagg2=0;
	let flagg3=0;
 	$('#r1').click(function(){
		if (flagg1 != 0) {
		$(flagg1).hide(300)
		$(flagg2).hide();
		$(flagg3).show();}
flagg1=$('.uslugi__text__none');
flagg2=$('.uslugi__img__x');
flagg3=$('#r1');
 		$('.uslugi__text__none').slideToggle(300)
		$('#r1').hide();
		$('.uslugi__img__x').show(500);
	})

	$('.uslugi__img__x').click(function(){

		$('.uslugi__text__none').slideToggle(300)
		$('.uslugi__img__x').hide();
		$('#r1').show();
	})

// блок2
$('#r2').click(function(){
	if (flagg1 != 0) {
		$(flagg1).hide(300)
		$(flagg2).hide();
		$(flagg3).show();}
flagg1=$('.uslugi__text__none2');
flagg2=$('.uslugi__img__x2');
flagg3=$('#r2');
	$('.uslugi__text__none2').slideToggle(300)
    $('#r2').hide();
    $('.uslugi__img__x2').show(500);
})

$('.uslugi__img__x2').click(function(){
   $('.uslugi__text__none2').slideToggle(300)
   $('.uslugi__img__x2').hide();
   $('#r2').show();
})

//блок3
$('#r3').click(function(){
	if (flagg1 != 0) {
		$(flagg1).hide(300)
		$(flagg2).hide();
		$(flagg3).show();}
flagg1=$('.uslugi__text__none3');
flagg2=$('.uslugi__img__x3');
flagg3=$('#r3');
	$('.uslugi__text__none3').slideToggle(300)
    $('#r3').hide();
    $('.uslugi__img__x3').show(500);
})

$('.uslugi__img__x3').click(function(){
   $('.uslugi__text__none3').slideToggle(300)
   $('.uslugi__img__x3').hide();
   $('#r3').show();
})

// блок4
$('#r4').click(function(){
	if (flagg1 != 0) {
		$(flagg1).hide(300)
		$(flagg2).hide();
		$(flagg3).show();}
flagg1=$('.uslugi__text__none4');
flagg2=$('.uslugi__img__x4');
flagg3=$('#r4');
	$('.uslugi__text__none4').slideToggle(300)
    $('#r4').hide();
    $('.uslugi__img__x4').show(500);
})

$('.uslugi__img__x4').click(function(){
   $('.uslugi__text__none4').slideToggle(300)
   $('.uslugi__img__x4').hide();
   $('#r4').show();
})

// блок5
$('#r5').click(function(){
	if (flagg1 != 0) {
		$(flagg1).hide(300)
		$(flagg2).hide();
		$(flagg3).show();}
flagg1=$('.uslugi__text__none5');
flagg2=$('.uslugi__img__x5');
flagg3=$('#r5');
	$('.uslugi__text__none5').slideToggle(300)
    $('#r5').hide();
    $('.uslugi__img__x5').show(500);
})

$('.uslugi__img__x5').click(function(){
   $('.uslugi__text__none5').slideToggle(300)
   $('.uslugi__img__x5').hide();
   $('#r5').show();
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
	$('.b1').hide(500).attr('src', './img/img-i2-1.jpg').show(500);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a1').addClass('marker2_i1');
		})})
	$('#a2').click(function(){
	$('.b1').hide(500).attr('src', './img/img-i2-2.jpg').show(500);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a2').addClass('marker2_i1');
		})   
	$('#a3').click(function(){
	$('.b1').hide(500).attr('src', './img/img-i2-3.jpg').show(500);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a3').addClass('marker2_i1');
		})   
	$('#a4').click(function(){
	$('.b1').hide(500).attr('src', './img/img-i2-4.jpg').show(500);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a4').addClass('marker2_i1');
		})
	$('#a5').click(function(){
	$('.b1').hide(500).attr('src', './img/img-i2-5.jpg').show(500);
	$('.marker2_i1').removeClass('marker2_i1');
	$('#a5').addClass('marker2_i1');
		})   
	$('#a6').click(function(){
	$('.b1').hide(500).attr('src', './img/img-i2-6.jpg').show(500);
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
		$('#t1_i4').click(function(){
		$('.marker1_i4').removeClass('marker1_i4');
	// добавили текущий маркер
		$('#t1_i4').addClass('marker1_i4');
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
		$('#t4_i4').click(function(){
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
	// ========== Фото слайдер =========================
	// Обработка левого нажатия
	$(function(){
		let prr=0;
		let Array = [];
		Array=['foto3_i6', 'foto4_i6', 'foto5_i6', 'foto6_i6', 'foto7_i6','foto8_i6', 'foto9_i6', 'foto10_i6', 'foto11_i6' ];
		$('.left').click(function(){
$('.'+ Array[prr]).fadeOut(1000);
prr=prr-1;
if (prr < 0) { 
	prr=8;  }	
	// let xr=$('.'+ Array[prr]);
	$('.'+ Array[prr]).fadeIn(1000);
	return prr;
})
$('.right').click(function(){
	$('.'+ Array[prr]).fadeOut(1000);
	prr=prr+1;
	if (prr > 8) { 
	prr=0;  }	
	// let xr=$('.'+ Array[prr]);
	$('.'+ Array[prr]).fadeIn(500);
		})});

// =======================================================
// Сброс ползунков фильтров
	$('.power4_i3').click(function(){
		$("#range1").val(10);
		$('.result').html($('#range1').val());		
		$("#range2").val(100);
		$('.result2').html($('#range2').val());		
		$("#range3").val(10);
		$('.result3').html($('#range3').val());		
		$("#range4").val(1500);
		$('.result4').html($('#range4').val());		
})

// =======================================================
// Меняем местами элементы грида (каталога)
// и делаем это снова если произошли изменения
// изменения в группе ползунков
let ch=0;
let ch2=2;
$(document).on('input change',  function() {
	ch=1;
	});

$('.button__filtr_i3').click(function(){
if (ch==1) { ch=0;
	if (ch2 % 2 === 0) {

$(".am1_i3").before($(".am2_i3"));
ch2=ch2+1;} else { 
	$(".am1_i3").after($(".am2_i3"));
	ch2=ch2+1;
}
}
})
// изменения в группе кнопок верхнего выбора
let ch11=0;
let ch12=2;
let ch13=0;
$('.nav_i3').click(function(){
	ch11=1;

	if (!$('#t1').hasClass('marker1_i1')) {

if (ch11==1) { ch11=0;
if (ch12 % 2 === 0) {
console.log('ch12=', ch12);
$(".am1_i3").before($(".am2_i3"));
ch12=ch12+1;} else { 
$(".am1_i3").after($(".am2_i3"));
ch12=ch12+1;}
}}
})
// ==================================================
// =========стековое перемещение изображений=========
// ====и поиск определенного элемента среди подобных==
let imgg=$('.m3');
let imgg2=imgg.attr("src");

$('.galk1_i4').click(function(){
	// $(".cont1").last().hide();
	$(".sorti_i4").prepend($(".cont1").last());
	imgg=$(".cont1").eq(2);
	imgg2=imgg.attr("src");
	$(".scale1_i4").attr('src', imgg2);
// рисуем рамку
$('.ramka_i4').removeClass('ramka_i4');
$(imgg).addClass('ramka_i4');
})
$('.galk2_i4').click(function(){
	// $(".cont1").last().hide();
	$(".sorti_i4").prepend($(".cont1").last());
	imgg=$(".cont1").eq(2);
	imgg2=imgg.attr("src");
	$(".scale1_i4").attr('src', imgg2);
	$('.ramka_i4').removeClass('ramka_i4');
$(imgg).addClass('ramka_i4');
})
// =================================================
//информационное окошко 5 сек.
$('.knopka1').click(function(){
$('.window_i7').show().delay(5000).fadeOut();
})
$('.last3_i4').click(function(){
	$('.window2_i7').show().delay(5000).fadeOut();
})
// =================================================
// =======аккордеон мобил===========================
// описание (первый абзац)
let flagg0=0;
$('.ss110_i4').click(function(){	
	if (flagg0==0) {
$('.mobiltext1_i7').hide();
$('.ss110_i4').css('transform', 'rotate(-90deg)');
flagg0=1;
	} else {
		// закрываем три абзаца
		$('.mobiltext2_i7').hide();
		$('.ss111_i4').css('transform', 'rotate(-90deg)');
		flagg1=0;

		$('.mobiltext3_i7').hide();
		$('.ss112_i4').css('transform', 'rotate(-90deg)');
		flagg2=0;

		$('.mobiltext4_i7').hide();
		$('.ss113_i4').css('transform', 'rotate(-90deg)');
		flagg3=0;
		// теперь открываем этот абзац
		$('.mobiltext1_i7').show();
		$('.ss110_i4').css('transform', 'rotate(0)');
		flagg0=0;
}})	

//  тех характеристики (второй абзац)
let flagg1=0;
$('.ss111_i4').click(function(){	
	if (flagg1==0) {
		// закрываем три абзаца
		$('.mobiltext1_i7').hide();
		$('.ss110_i4').css('transform', 'rotate(-90deg)');
		flagg0=0;

		$('.mobiltext3_i7').hide();
		$('.ss112_i4').css('transform', 'rotate(-90deg)');
		flagg2=0;

		$('.mobiltext4_i7').hide();
		$('.ss113_i4').css('transform', 'rotate(-90deg)');
		flagg3=0;

		// теперь открываем этот абзац
$('.mobiltext2_i7').show();
$('.ss111_i4').css('transform', 'rotate(0)');
flagg1=1;
	} else {
		$('.mobiltext2_i7').hide();
		$('.ss111_i4').css('transform', 'rotate(-90deg)');
		flagg1=0;
}})	

// Конструктивные характеристики (третий абзац)
let flagg2=0;
$('.ss112_i4').click(function(){	
	if (flagg2==0) {
// закрываем три абзаца
$('.mobiltext1_i7').hide();
$('.ss110_i4').css('transform', 'rotate(-90deg)');
flagg0=0;

$('.mobiltext2_i7').hide();
$('.ss111_i4').css('transform', 'rotate(-90deg)');
flagg1=0;

$('.mobiltext4_i7').hide();
$('.ss113_i4').css('transform', 'rotate(-90deg)');
flagg3=0;

// теперь открываем этот абзац
$('.mobiltext3_i7').show();
$('.ss112_i4').css('transform', 'rotate(0)');
flagg2=1;
	} else {
		$('.mobiltext3_i7').hide();
		$('.ss112_i4').css('transform', 'rotate(-90deg)');
		flagg2=0;
}})	
// Материалы для скачивания (четвертый абзац)
let flagg3=0;
$('.ss113_i4').click(function(){	
	if (flagg3==0) {
// закрываем три абзаца
$('.mobiltext1_i7').hide();
$('.ss110_i4').css('transform', 'rotate(-90deg)');
flagg0=0;

$('.mobiltext2_i7').hide();
$('.ss111_i4').css('transform', 'rotate(-90deg)');
flagg1=0;

$('.mobiltext3_i7').hide();
$('.ss112_i4').css('transform', 'rotate(-90deg)');
flagg2=0;

// теперь открываем этот абзац
$('.mobiltext4_i7').show();
$('.ss113_i4').css('transform', 'rotate(0)');
flagg3=1;
	} else {
		$('.mobiltext4_i7').hide();
		$('.ss113_i4').css('transform', 'rotate(-90deg)');
		flagg3=0;
}})	
// ==========================================================
// ===========аккордеон мобил2===============================
// первая деталь
let flagg5=0;
$('.ss115_i4').click(function(){	
	if (flagg5==0) {
$('.mobiltext5_i7').hide();
$('.ss115_i4').css('transform', 'rotate(-90deg)');
flagg5=1;
	} else {
		$('.mobiltext5_i7').show();
		$('.ss115_i4').css('transform', 'rotate(0)');
		flagg5=0;
}})	
// вторая деталь
let flagg6=0;
$('.ss116_i4').click(function(){	
	if (flagg6==0) {
$('.mobilt6_i7').show();
$('.ss116_i4').css('transform', 'rotate(0)');
flagg6=1;
	} else {
		$('.mobilt6_i7').hide();
		$('.ss116_i4').css('transform', 'rotate(-90deg)');
		flagg6=0;
}})	
// третья деталь
let flagg7=0;
$('.ss117_i4').click(function(){	
	if (flagg7==0) {
$('.mobilt7_i7').show();
$('.ss117_i4').css('transform', 'rotate(0)');
flagg7=1;
	} else {
		$('.mobilt7_i7').hide();
		$('.ss117_i4').css('transform', 'rotate(-90deg)');
		flagg7=0;
}})	
// четвертая деталь
let flagg8=0;
$('.ss118_i4').click(function(){	
	if (flagg8==0) {
$('.mobilt8_i7').show();
$('.ss118_i4').css('transform', 'rotate(0)');
flagg8=1;
	} else {
		$('.mobilt8_i7').hide();
		$('.ss118_i4').css('transform', 'rotate(-90deg)');
		flagg8=0;
}})	
// пятая деталь
let flagg9=0;
$('.ss119_i4').click(function(){	
	if (flagg9==0) {
$('.mobilt9_i7').show();
$('.ss119_i4').css('transform', 'rotate(0)');
flagg9=1;
	} else {
		$('.mobilt9_i7').hide();
		$('.ss119_i4').css('transform', 'rotate(-90deg)');
		flagg9=0;
}})	
// ==================================================================
// ==============Подборка============================================
// добавить покупку1 (количество)
let n1=1;
let n2=25;
let n3=24;
let str='осталось';
let n11=1;
let n22=8;
let n33=0;
let str2='осталось';
var cena1=3300;
var cena2=41500;
var str3='&nbsp р';
var str4='&nbsp р';
var cena3=44800;
var str5='Итого:&nbsp';

$('.el2_i5').click(function(){
	n1=n1+1;
	if (n1>n2) {n1=n2}
	$('.el3_i5').html(n1);
	n3=n2-n1;
str='осталось &nbsp'+n3+'&nbsp шт';
	$('.el4_i5').html(str);
	cena1=3300*n1;
	str3=cena1+'&nbsp р';
	cena3=cena1+cena2;
	str5='Итого:&nbsp'+cena3+'&nbsp р'
	$('.cena1_i5').html(str3);
	$('.cena3_i5').html(str5);
	return n1;
})
// убавить
$('.el1_i5').click(function(){
	n1=n1-1;
	if (n1<0) {n1=0}
	$('.el3_i5').html(n1);
	n3=n2-n1;
str='осталось &nbsp'+n3+'&nbsp шт';
	$('.el4_i5').html(str);
	cena1=3300*n1;
	str3=cena1+'&nbsp р';
	cena3=cena1+cena2;
	str5='Итого:&nbsp'+cena3+'&nbsp р'
	$('.cena1_i5').html(str3);
	$('.cena3_i5').html(str5);
	return n1;
})

// добавить покупку2
$('.el22_i5').click(function(){
	n11=n11+1;
	if (n11>n22) {n11=n22}
	$('.el33_i5').html(n11);
	n33=n22-n11;
str2='осталось &nbsp'+n33+'&nbsp шт';
	$('.el44_i5').html(str2);

	cena2=41500*n11;
	str4=cena2+'&nbsp р';
	cena3=cena1+cena2;
	str5='Итого:&nbsp'+cena3+'&nbsp р'
	$('.cena2_i5').html(str4);
	$('.cena3_i5').html(str5);
	return n11;
})
// убавить
$('.el11_i5').click(function(){
	n11=n11-1;
	if (n11<0) {n11=0}
	$('.el33_i5').html(n11);
	n33=n22-n11;
str2='осталось &nbsp'+n33+'&nbsp шт';
	$('.el44_i5').html(str2);

	cena2=41500*n11;
	str4=cena2+'&nbsp р';
	cena3=cena1+cena2;
	str5='Итого:&nbsp'+cena3+'&nbsp р'
	$('.cena2_i5').html(str4);
	$('.cena3_i5').html(str5);
	return n11;
})

// сброс количества1 (удалить1)
$('.nowrap1').click(function(){
n1=0;
$('.el3_i5').html(n1);
str='осталось &nbsp'+n2+'&nbsp шт';
$('.el4_i5').html(str);
$('.cena1_i5').html('0 р');
cena1=0;
str5='Итого:&nbsp'+cena2+'&nbsp р'
$('.cena3_i5').html(str5);
$(this).fadeOut(100).fadeIn(100);
})

// сброс количества2 (удалить2)
$('.nowrap2').click(function(){
	n11=0;
	$('.el33_i5').html(n11);
	str='осталось &nbsp'+n22+'&nbsp шт';
	$('.el44_i5').html(str);
	$('.cena2_i5').html('0 р');
	cena2=0;
	str5='Итого:&nbsp'+cena1+'&nbsp р'
	$('.cena3_i5').html(str5);
	$(this).fadeOut(100).fadeIn(100);
	})

// нажатие кнопок на отправку
$('.knopka1_i5').click(function(){
	// проверка на открытость соседнего окна
	if ($('.knopp2_i5').css('display') == 'none') { 
	$(this).fadeOut(100);
	$('.knop1_i5').css('display', 'flex').css('flex-direction', 'column');
	}})

$('.knopka2_i5').click(function(){
	// проверка на открытость соседнего окна
	if ($('.knop1_i5').css('display') == 'none') { 
	$(this).fadeOut(100);
	$('.knopp2_i5').css('display', 'flex').css('flex-direction', 'column');
	
$('.knopka3_i5').click(function(){
	$(this).fadeOut(100);
	$('.knopp2_i5').css('display', 'flex').css('flex-direction', 'column');
})}})
// ===========================================
// =========Валидация ввода телефона==========
$('.knopka_i11').click(function(){
	// строка кнопка моргнула при нажатии и стерли старые ошибки
$(this).fadeOut(100).fadeIn(100);
$('.error1_i11').html('');
$('.error2_i11').html('');
$('.error3_i11').html('');
	// проверка ввода имени
let proverka=document.querySelector('.marker1_i1');
let proverka2=proverka.classList.contains('box1_i1');
console.log(proverka2);
if (proverka2) {
let youname = $('.fname1_i11').val();
if (youname == 0) {
	$('.error1_i11').html('Введите ваше имя, пожалуйста');
}}

// валидация набора телефона
let phone = $('.fname2_i11').val();
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
if(!regex.test(phone)) {
	$('.error2_i11').html('Неправильный номер телефона');}

	// проверка ввода реквизитов
let youname2 = $('.fname3_i11').val();
console.log(youname2);
if (youname2 == 0) {
	$('.error3_i11').html('Введите реквизиты, пожалуйста');
}
})

// ==========================================================
// Переключение вида организации на 11 странице
// физлица
$('.box1_i1').click(function(){
var	fl1=$('.box1_i1');
if (fl1.is('.yellow_i11')) {
	$('.none1_i11').hide();
	$('.galk1_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
} else {
	// $('.none1_i11').hide();
	$('.none2_i11').hide();
	$('.galk2_i11').css('transform', 'rotate(-90deg)').removeClass('yellow_i11');
	// $(this).removeClass('yellow_i11');
	$('.none3_i11').hide();
	$('.galk3_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
	// $(this).removeClass('yellow_i11');
	$('.none1_i11').show();
	$('.galk1_i11').css( 'transform', 'rotate(0)').addClass('yellow_i11');
	// $(this).addClass('yellow_i11');
	// console.log(this);
	// if(number % 2 == 0){ 
// стираем предыдущие сообщения формы
$('.error1_i11').html('');
$('.error2_i11').html('');
$('.error3_i11').html('');
}
})
// юр лица
$('.box3_i1').click(function(){
		fl1=$('.box3_i1');
if (fl1.is('.yellow_i11')) {
	$('.none2_i11').hide();
	$('.galk2_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
} else {
	$('.none1_i11').hide();
	$('.galk1_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
	// $(this).removeClass('yellow_i11');
	$('.none3_i11').hide();
	$('.galk3_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
	// $(this).removeClass('yellow_i11');
	$('.none2_i11').show();
	$('.galk2_i11').css( 'transform', 'rotate(0)').addClass('yellow_i11');
	// $(this).addClass('yellow_i11');
// стираем предыдущие сообщения формы
$('.error1_i11').html('');
$('.error2_i11').html('');
$('.error3_i11').html('');
}
})
// бюджетные организации
$('.box4_i1').click(function(){
		fl1=$('.box4_i1');
if (fl1.is('.yellow_i11')) {
	$('.none3_i11').hide();
	$('.galk3_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
} else {
	$('.none1_i11').hide();
	$('.galk1_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');

	$('.none2_i11').hide();
	$('.galk2_i11').css( 'transform', 'rotate(-90deg)').removeClass('yellow_i11');
	$('.none3_i11').show();
	$('.galk3_i11').css( 'transform', 'rotate(0)').addClass('yellow_i11');
// стираем предыдущие сообщения формы
$('.error1_i11').html('');
$('.error2_i11').html('');
$('.error3_i11').html('');
}
})
// =================================================
// =====Кнопка1 окно отправки с index5.html======
// Мигает кнопка
$('.button_i5').click(function(){
$(this).fadeOut(100).fadeIn(100);
$('.knop1_i5').hide();
$('.spasibo1_i5').css('display', 'flex').css('flex-direction', 'column');
})
// закрываем окно1
$('.wind2_i5').click(function(){
$('.knop1_i5').css('display', 'none');
$('.knopka1_i5').css('display', 'flex');
})
// закрываем окно спасибо
$('.spasibo6_i5').click(function(){
	$('.spasibo1_i5').css('display', 'none');
	$('.knopka1_i5').css('display', 'flex');
})

// =================================================
// =====Кнопка2 окно2 отправки с index5.html======
// кнопка окна2 при нажатии закрыв окно2 и открыв спасибо2
// при отправке формы допроверка телефона

function validateComments(input) {
var phone0 = document.querySelector('.form4__tel');
var phone = $('.form4__tel').val();
var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	if (!regex.test(phone)) {
	   input.setCustomValidity("Неправильный номер телефона");   
	}
	else {
	   input.setCustomValidity("");
	   $("#myform2").submit(function(e){
		e.preventDefault();
	});
	$('.button2_i5').click(function(){
$('.spasibo21_i5').css('display', 'flex').css('flex-direction', 'column');
$('.knopp2_i5').hide();
	})	
}}

// закрываем окно2
$('.wind22_i5').click(function(){
	$('.knopp2_i5').css('display', 'none');
	$('.knopka2_i5').css('display', 'flex');
	$('.knopka3_i5').css('display', 'flex');
	})
// закрываем спасибо2
$('.spasibo26_i5').click(function(){
$('.spasibo21_i5').hide();	
$('.knopka2_i5').css('display', 'flex');
})

// ===============================================
// =======открыаем окна в мобильной версии========
// кнопка 2 (верхняя в мобильной версии) - при нажатии на нее
$('.knopka1m_i5').click(function(){
	// проверка на открытость соседнего окна
	if ($('.knopp2_i5').css('display') == 'none') { 
	$(this).fadeOut(100);
	$('.knop1_i5').css('display', 'flex').css('flex-direction', 'column');
	}})
