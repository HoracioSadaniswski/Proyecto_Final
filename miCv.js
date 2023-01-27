/* Función btn-arriba */
$(document).ready(function(){

	$('.btn-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.btn-arriba').slideDown(300);
		} else {
			$('.btn-arriba').slideUp(300);
		}
	});

});

/*  Responsive nav */

$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};
