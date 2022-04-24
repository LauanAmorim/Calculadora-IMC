let resultado = document.getElementById("valor");
let btnCalcular = document.getElementById("calcular");

function calcularImc(){
    let inputName = document.getElementById("nome").value;
    let inputAltura = document.getElementById("altura").value;
    let inputPeso = document.getElementById("peso").value;
    
    if(!inputName || !inputAltura || !inputPeso){
        resultado.textContent = "Obrigatorio preencher o fomulário";
    }
    else {
        let result = Number(inputPeso) / Math.pow(Number(inputAltura), 2)
        resultado.textContent = `Olá ${inputName}, seu IMC é igual a ${result.toFixed(1)}`;
    }
}

btnCalcular.addEventListener("click", calcularImc)
