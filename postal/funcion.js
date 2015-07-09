$(document).ready(function() {
	// $.ajax({
	// 	url: "postal/zipcodes.csv",
	// 	dataType: "text",
	// 	success: function(data){
	// 		var documento = data;
	// 		//convirtiendo(documento);
	// 	}
	// });
	$('.elBoton').click(function(){
		var valorInput = $('.elInput').val();
		if(/^[a-zA-Z0-9- ]*$/.test(valorInput) == false){
			alert("No introducir simbolos extraños");
		} else {
			$.ajax({
				url: "postal/zipcodes.csv",
				dataType: "text",
				success: function(data){
					var documento = data;
					convirtiendo(documento,valorInput);
				}
			});
		}
	});
});
function convirtiendo(documento,valorInput){
	// Almacenamos el valor del input en una variable interna de la función
	var revisar = valorInput;
	// Checa qué tipo de información tiene la variable (String, boolean, int)
	//alert(typeof revisar);
	//Acomodamos el documento en arreglos
	var documentoArray = $.csv.toArrays(documento);
	$(".show").html(documentoArray[1][0]);
	// var ancho = documentoArray.length;
	// var a = documentoArray.indexOf("Y1A6V6");
	// alert(a);
	var result;
	//Busca String que introduce usuario y te dice en qué indice está
	for(var i = 0, len = documentoArray.length; i < len; i++){
		if(documentoArray[i][0] === revisar){
			result = i;
			break;
		}
	}
	if(typeof result === 'undefined'){
		alert("objeto no definido");
	} else {
		//comenzamos a hacer sumas y pasar valores
		var valor01 = documentoArray[result][1];
		var unoMas;
		var dosMas;
		var tresMas;
		var cuatroMas;
		var cincoMas;
		//de acuerdo a result obtenemos 5 valores después del result
		for(var x = 1; x < 6; x++){
			var tempMas = result + x;
			if(x == 1){
				unoMas = documentoArray[tempMas][1];
			} else if(x == 2){
				dosMas = documentoArray[tempMas][1];
			} else if(x == 3){
				tresMas = documentoArray[tempMas][1];
			} else if(x == 4){
				cuatroMas = documentoArray[tempMas][1];
			} else if(x == 5){
				cincoMas = documentoArray[tempMas][1];
			}
		}
		//Sumamos los 5 valores más
		var valor02 = parseInt(unoMas) + parseInt(dosMas) + parseInt(tresMas) + parseInt(cuatroMas) + parseInt(cincoMas);
		//Sacamos 5 valores abajo
		var unoMenos;
		var dosMenos;
		var tresMenos;
		var cuatroMenos;
		var cincoMenos;
		//de acuerdo a result obtenemos 5 valores antes del result
		for(var y = 1; y < 6; y++){
			var tempMenos = result - y;
			if(y == 1){
				unoMenos = documentoArray[tempMenos][1];
			} else if(y == 2){
				dosMenos = documentoArray[tempMenos][1];
			} else if(y == 3){
				tresMenos = documentoArray[tempMenos][1];
			} else if(y == 4){
				cuatroMenos = documentoArray[tempMenos][1];
			} else if(y == 5){
				cincoMenos = documentoArray[tempMenos][1];
			}
		}
		var valor03 = parseInt(unoMenos) + parseInt(dosMenos) + parseInt(tresMenos) + parseInt(cuatroMenos) + parseInt(cincoMenos);
		var sumaValores = parseInt(valor01) + valor02 + valor03;
		alert(sumaValores);
		$('.show').html(unoMas + "<br>" + dosMas + "<br>" + tresMas + "<br>" + cuatroMas + "<br>" + cincoMas + "<br>" + unoMenos + "<br>" + dosMenos + "<br>" + tresMenos + "<br>" + cuatroMenos + "<br>" + cincoMenos);
	}
}
//Lo que debe de hacer éste Javascript para encontrar un código postal es:
	// XXXXXX 1. Capturar datos de entrada a través de un input
	// XXXXXX 2. Eliminar objetos no deseados como letras y simbolos raros como ?#$% y espacios
	// XXXXXX 3. Revisar en todo el arreglo por el código postal
	// 3-1. Pasar el valor del arreglo en posición de result a Int para empezar a hacer sumas
	// 4. Una vez encontrado el código postal buscar 5 atrás y 5 adelante de las personas 
	// que tienen tiempos compartidos cerca de esos códigos postales y sumar esos cinco atrás y 5 adelante
	// más el del código proporcionado para dar un apróximado de cuantas personas tienen tiempos en esos códigos
	// 3(b). En caso de no encontrar el código postal o que su valor sea == 0 se busca el más cercano hacía abajo.
	// 4(b). En caso de que el código postal sea encontrado o igualado a uno cercano, lo que se hace a continuación 
	// es buscar 5 #s atrás y 5#s adelante para ver si tienen valor, en caso de que no existan o tengan un valor == 0
	// se ignora ese número y se sigue buscando hasta encontrar uno que tenga un valor y de ahí se empieza a hacer la sumar
	// igual sea hacia atrás o adelante.