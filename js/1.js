
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
