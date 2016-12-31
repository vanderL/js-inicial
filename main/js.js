var trsPacientes = document.getElementsByClassName("paciente");


var posicaoAtual = 0;

for (var posicaoAtual = 0;posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
		
	var pacienteTr = trsPacientes[posicaoAtual];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {nome : tdNome.textContent, altura : tdAltura.textContent, peso :tdPeso.textContent};
	if (paciente.altura != 0) {
		
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		
		var setIMC = pacienteTr.getElementsByClassName("info-imc")[0];
		setIMC.textContent = imc;

		console.log(imc);
	} else {
		console.log("Entrada invalida! ");
	}
}






