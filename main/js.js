//peso / altura * altura

var setPeso = document.getElementById('peso-2');
var setAltura = document.getElementById('altura-2');


var paciente = {peso : setPeso.textContent, altura : setAltura.textContent};

if (paciente.altura != 0) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var setIMC = document.getElementById("imc-2");
	setIMC.textContent = imc;

	console.log(imc);
} else {
	console.log("Entrada invalida! ")
}