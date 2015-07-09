$(document).ready(function() {
	$('.contenedorAwards').addClass('fadeIn');
	setTimeout(function(){
		$('.galeria').show();
		$('.galeria').addClass('slideInUp');
	},1000);
	$('.s1').click(function(){
		$('.grande').css("background-image", "url(img/awards/01-large.jpg)");
	});
	$('.s2').click(function(){
		$('.grande').css("background-image", "url(img/awards/02-large.jpg)");
	});
	$('.s3').click(function(){
		$('.grande').css("background-image", "url(img/awards/03-large.jpg)");
	});
	$('.s4').click(function(){
		$('.grande').css("background-image", "url(img/awards/04-large.jpg)");
	});
	$('.s5').click(function(){
		$('.grande').css("background-image", "url(img/awards/05-large.jpg)");
	});
	$('.s6').click(function(){
		$('.grande').css("background-image", "url(img/awards/06-large.jpg)");
	});
	$('.s7').click(function(){
		$('.grande').css("background-image", "url(img/awards/07-large.jpg)");
	});
	$('.s8').click(function(){
		$('.grande').css("background-image", "url(img/awards/08-large.jpg)");
	});
	$('.s9').click(function(){
		$('.grande').css("background-image", "url(img/awards/09-large.jpg)");
	});
	$('.s10').click(function(){
		$('.grande').css("background-image", "url(img/awards/10-large.jpg)");
	});
	$('.s11').click(function(){
		$('.grande').css("background-image", "url(img/awards/11-large.jpg)");
	});
	$('.s12').click(function(){
		$('.grande').css("background-image", "url(img/awards/12-large.jpg)");
	});
	$('.s13').click(function(){
		$('.grande').css("background-image", "url(img/awards/13-large.jpg)");
	});
	$('.s14').click(function(){
		$('.grande').css("background-image", "url(img/awards/14-large.jpg)");
	});
	$('.botonMenu').click(function(){
		$('.contenedorAwards').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			window.location.replace("index.html");
		},250);
	});
});