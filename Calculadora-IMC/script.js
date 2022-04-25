function calcularImc(){
    let $inputName = document.getElementById("nome").value;
    let $inputAltura = document.getElementById("altura").value;
    let $inputPeso = document.getElementById("peso").value;
    let $resultado = document.getElementById("valor");
    
    if(!$inputName || !$inputAltura || !$inputPeso || isNaN(($inputAltura)) || isNaN($inputPeso)){
        $resultado.textContent = "Obrigatorio preencher o fomulário corretamente";
    }
    else {
        $inputPeso = $inputPeso.replace(",", ".")
        $inputAltura = $inputAltura.replace(",", ".")

        let $result = Number($inputPeso) / Math.pow(Number($inputAltura), 2)
        $resultado.textContent = `Olá ${$inputName}, seu IMC é igual a ${$result.toFixed(2)}`;
    }
}

let $btnCalcular = document.getElementById("calcular");
$btnCalcular.addEventListener("click", calcularImc)
