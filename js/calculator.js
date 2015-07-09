$(document).ready(function(){
	$('.contenedorC').addClass('fadeIn');
	//Detecta el focus out de los input
	$('input').focusout(function(event) {
		//Llama a la función detectaPase para ver si empieza a hacer las ecuaciones
		detectaPase();
	});
	//botón regresar a menú
	$('.botonMenu').click(function(){
		$('.contenedorC').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			window.location.replace("index.html");
		},250);
	});
});

function detectaPase(){
	//Condicion para mandar el pase a las ecuaciones
	if($('.daysPerYear').val() && $('.costPerNight').val() && $('.yearsYouPlan').val() && $('.yourEstimate').val()){
		ecuaciones();
	}
}

function ecuaciones(){
	//alert("entra ecuaciones");
	$('.respuestaC').fadeIn();
	/*-------- FUNCION DE LAS ECUACIONES ----------*/
	//Recuperamos datos de los input
	var dpy = $('.daysPerYear').val();
	var cpn = $('.costPerNight').val();
	var yyp = $('.yearsYouPlan').val();
	var ye = $('.yourEstimate').val();

	//Declaramos inflacion
	var inflacion = 1 + ((parseInt(ye))/100);

	//seguimos con el calculo
	var totalAnual = parseInt(dpy) * parseInt(cpn);
	var totalSinIntereses = totalAnual * parseInt(yyp);
	var totalSinRound = Math.round(totalSinIntereses);
	//metemos totalSinIntereses dentro de un String para las comas
	var totalSinInteresesString = totalSinRound.toString();
	//procesamos la nueva var de string con la funcion para agregar los comas
	var totalNinteres = commaSeparateNumber(totalSinInteresesString);
	//imprimimos el total Sin interes
	$('.subtotal').html('$' + totalNinteres);

	//Ahora se calcula el total anual con interes
	var totalConIntereses = 0;
	for(var i =1; i <= parseInt(yyp); i++){
		//va calculando el anual mas la inflacion y la va sumando anio por anio
		totalConIntereses = (totalConIntereses + totalAnual) * inflacion;
	}
	//redondeamos el total Con intereses
	var totalConRound = Math.round(totalConIntereses);
	//ponemos el total de los intereses en un string
	var totalConInteresesString = totalConRound.toString();
	//metemos el string en una variable despues de procesarlo con las comas
	var totalConI = commaSeparateNumber(totalConInteresesString);
	//Ponemos el total con intereses
	$('.total').html('$' + (totalConI));

	//calculamos el total de inflacion
	var totalInflacion = totalConIntereses - totalSinIntereses;
	//Redondeamos el totalInflacion
	var totalInflacionRound = Math.round(totalInflacion);
	//cambiamos a STRING el totalinflacion
	var totalInflacionString = totalInflacionRound.toString();
	//procemos el string con comas y lo metemos a una variable
	var totalInflacionProcesado = commaSeparateNumber(totalInflacionString);
	//Metemos el porcentaje de la inflacion dentro del texto #inflaT
	$('#inflaT').html("Inflation " + ye + "%"); //-----CHECAR SI FUNCIONA
	// Metemos variable dentro de .inflation 
	$('.inflation').html("$" + totalInflacionProcesado);
}
/*funcion para agregar las comas a los numeros.
Primero tenemos que convertir la variable en String y 
luego aplicamos la funcion dentro de una variable 
Ej. var x = commaSeparateNumber(yString);
*/
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}