$(document).ready(function() {
	$('.contenedorRidge').addClass('fadeIn');
	setTimeout(function(){
		$('.thumbs').show().addClass('slideInUp');
	},500);
	//funciones de click en las imagenes
	var abierto = false;
	$('.t01').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l01').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l01').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t02').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l02').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l02').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t03').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l03').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l03').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t04').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l04').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l04').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t05').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l05').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l05').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t06').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l06').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l06').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t07').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l07').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l07').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.t08').click(function(){
		if(abierto){
			$('.ocultamiento').removeClass('zoomIn fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('.ocultamiento').hide();
				setTimeout(function(){
					$('.l08').show().removeClass('fadeOut').addClass('fadeIn');
				},100);
			},500);
		} else {
			$('.l08').show().addClass('zoomIn');
			abierto = true;
		} 
	});
	$('.botonMenu').click(function(){
		$('.contenedorRidge').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			window.location.replace("index.html");
		},250);
	});
});