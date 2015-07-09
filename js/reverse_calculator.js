$(document).ready(function(){
	$('.contenedorRc').addClass('fadeIn');
	$('.botonRc').click(function(){
		ecuaciones();
		//PRIMERO SE HARA LO VISUAL ANTES DE TERMINAR DE SACAR RESULTADOS Y EXPORTARLOS Y ASI
		$('.preguntas').addClass('fadeOut');
		setTimeout(function(){
			$('.preguntas').hide();
			$('.respuestas').show();
			$('.respuestas').addClass('fadeIn');
		}, 1000);
		// setTimeout(function(){
		// 	$('.contenedorRc').addClass('fadeOut');
		// 	setTimeout(function(){
		// 	window.location.href = "index.html";
		// 	}, 2000);
		// }, 1000);
	});
	//botón regresar a menú
	$('.botonMenu').click(function(){
		$('.contenedorRc').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			window.location.replace("index.html");
		},250);
	});
});

/*
----- Todo proceso se hace por fuera para optimizar la busqueda de errores y separar las funciones matematicas con la parte visual
*/
function ecuaciones(){
	//Jalamos datos
	var yearsOwn = $('.yearsOwner').val();
	var purchaseCosto = $('.purchasePrice').val();
	var maintenanceCosto = $('.maintenanceFee').val();
	var maintenanceIncremento = $('.maintenanceIncrease').val();
	var daysAnuales = $('.daysPerYear').val();
	var nightlyAcomodos = $('.nightlyAccommodations').val();
	var anualInflacion = $('.anualInflation').val();
	var yearsFaltan = $('.yearsToGo').val();

	//calculamos el total de años
	var totalYears = parseInt(yearsOwn) + parseInt(yearsFaltan);
		
	//llenamos los campos para los resultados
	//ownership
	var compraPrice = commaSeparateNumber(purchaseCosto);
	$('.opp').html('$' + compraPrice);
	$('.cmf').html(maintenanceCosto);
	$('.mfi').html(maintenanceIncremento + '%');
	$('.pfv').html(totalYears + ' years');
	//non-ownership
	$('.vdtey').html(daysAnuales);
	$('.nca').html(nightlyAcomodos);
	$('.air').html(anualInflacion + '%');
	$('.pfv').html(totalYears + ' years');

	//Empiezan los calculos de Ownership
	var totalFee = maintenanceCosto;
	var sumaFees = 0;
	for(var i = 1; i < totalYears; i++){
		//la cuenta
		totalFee = totalFee * (1+(maintenanceIncremento/100));
		sumaFees = sumaFees + totalFee;
	}
	//Ahora sumamos todo
	var tiempoCompartidoTotal = sumaFees + parseInt(maintenanceCosto) + parseInt(purchaseCosto);
	//alert(tiempoCompartidoTotal);
	var tiempoTotalFormateado = Math.round(tiempoCompartidoTotal);
	var tiempoTfString = tiempoTotalFormateado.toString();
	var timepoTfFinal = commaSeparateNumber(tiempoTfString);
	//Ponemos el resultado en el numero de ownership
	$('.cifraO').html('$' + timepoTfFinal);//---------------------------------------------------------------

	/**********---------- CALCULAMOS COSTOS COMO SI HUBIERAN IDO AL HOTEL ----------**********/
	var totalEstancia = parseInt(nightlyAcomodos) * parseInt(daysAnuales);
	var totalHotel = totalEstancia;
	var sumaHotel = 0;
	//Empezamos a Calcular
	for(var i = 1; i < totalYears; i++){
		//la cuenta
		totalHotel = totalHotel * (1+(anualInflacion/100));
		sumaHotel = sumaHotel + totalHotel;
	}
	var sumaHotelFormateado = Math.round(sumaHotel);
	var sumaHstring = sumaHotelFormateado.toString();
	var sumaHfinal = commaSeparateNumber(sumaHstring);
//----var sumaHotelFormateado = sumaHotel.formatMoney(2, '$', '.', ',');
	//Ponemos el resultado en numero de non-ownership
	$('.cifraN').html('$' + sumaHfinal);//-----------------------------------------------------------------

	//Calculamos la diferencia
	var diferencia = sumaHotel - tiempoCompartidoTotal;
	var diferenciaFormateado = Math.round(diferencia);
	var diferenciaString = diferenciaFormateado.toString();
	var diferenciaFfinal = commaSeparateNumber(diferenciaString);
//------var diferenciaFormateado = diferencia.formatMoney(2, '$', '.', ',');
	//Ponemos el resultado en el numero de DIFERENCIA
	$('.ahorros').html('$' + diferenciaFfinal);//---------------------------------------------------------------
}
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}