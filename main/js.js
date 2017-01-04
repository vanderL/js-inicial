function calculaIMC() {
    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function (pacienteTr){

        var pacienteAtual = montaPaciente(pacienteTr);    
        var imc = pacienteAtual.pegaImc();

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
        tdImc.textContent = imc.toFixed(0);

        console.log(imc.toFixed(2));
    });

}


function montaPaciente(pacienteTr){
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = {
        nome : tdNome.textContent, 
        peso : tdPeso.textContent, 
        altura : tdAltura.textContent,
        pegaImc: function() {

            if(this.altura != 0){
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else{

                console("Não posso dividir por zero!");
            }
        }
    }
    return paciente;
}

var botao = document.getElementById('calcula-imcs');

botao.addEventListener("click", calculaIMC);
botao.addEventListener("click", function(){
    console.log("Teste");
})

var trs = document.getElementsByTagName('tr');
percorreArray(trs, function(tr){
    tr.addEventListener("dblclick", function(){
        
        if (this.getAttribute("bgcolor") != "grey") {
            this.setAttribute("bgcolor", "grey");
        }else {
            this.setAttribute("bgcolor", "white");
        }

    })
})
