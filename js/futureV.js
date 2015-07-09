$(document).ready(function(){
	$('.contenedorFv').addClass('fadeIn');
	setTimeout(function(){
		$('.objeto').show();
		$('.objeto').addClass('slideInUp');
		setTimeout(function(){
			$('.objeto2').show();
			$('.objeto2').addClass('slideInUp');
		},1000)
	},500);
	//Variable para checa si ya se abrio un modal box, siempre inicia en falso
	var abiertoM = false;
	//cierra modals
	$('.cerrar').click(function(){
		abiertoM = false;
		cerrarM();
	});
	$('.bigben').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.bigbenMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.bigbenMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.brasil').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.brasilMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.brasilMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.cabos').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.cabosMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.cabosMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.coliseo').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.coliseoMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.coliseoMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.disney').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.disneyMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.disneyMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.dubai').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.dubaiMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.dubaiMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.giza').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.gizaMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.gizaMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.japon').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.japonMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.japonMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.kukulkan').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.kukulkanMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.kukulkanMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.paris').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.parisMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.parisMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.sydney').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.sydneyMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.sydneyMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.taj').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.tajMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.tajMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.torrePisa').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.torreMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.torreMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.triunfo').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.triunfoMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.triunfoMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.universal').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.universalMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.universalMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.vegas').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.vegasMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.vegasMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
	$('.york').click(function(){
		if(abiertoM){
			cerrarM();
			setTimeout(function(){
				$('.yorkMb').show();
				//removemos la clase de salida
				$('.modalBox').removeClass('slideOutDown');
				$('.modalBox').addClass('slideInUp');
				abiertoM = true;
			},500);
		} else {
			$('.yorkMb').show();
			//removemos la clase de salida
			$('.modalBox').removeClass('slideOutDown');
			$('.modalBox').addClass('slideInUp');
			abiertoM = true;
		}
	});
});
function cerrarM(){
	$('.modalBox').removeClass('slideInUp');
	$('.modalBox').addClass('slideOutDown');
	//esconde los modal individualmente
	setTimeout(function(){
		$('.bigbenMb').hide();
		$('.brasilMb').hide();
		$('.cabosMb').hide();
		$('.coliseoMb').hide();
		$('.disneyMb').hide();
		$('.dubaiMb').hide();
		$('.gizaMb').hide();
		$('.japonMb').hide();
		$('.kukulkanMb').hide();
		$('.parisMb').hide();
		$('.sydneyMb').hide();
		$('.tajMb').hide();
		$('.torreMb').hide();
		$('.triunfoMb').hide();
		$('.universalMb').hide();
		$('.vegasMb').hide();
		$('.yorkMb').hide();
	},500);
}