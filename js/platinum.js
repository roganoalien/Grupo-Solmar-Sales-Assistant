$(document).ready(function() {
	//Animacion de entrada
	$('.contenedorPlatino').addClass('fadeIn');
	setTimeout(function(){
		$('.galeria').show().addClass('slideInUp');
	},1000);
	$('.s1').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s1_big.jpg)");
	});
	$('.s2').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s2_big.jpg)");
	});
	$('.s3').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s3_big.jpg)");
	});
	$('.s4').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s4_big.jpg)");
	});
	$('.s5').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s5_big.jpg)");
	});
	$('.s6').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s6_big.jpg)");
	});
	$('.s7').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s7_big.jpg)");
	});
	$('.s8').click(function(){
		$('.grande').css("background-image", "url(img/platinum/s8_big.jpg)");
	});
	$('.botonMenu').click(function(){
		$('.contenedorPlatino').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			window.location.replace("index.html");
		},250);
	});
});