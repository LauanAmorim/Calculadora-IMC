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

        let $classificacao = ""
        if($result < 18.5){
            $classificacao = `abaixo do peso`;
        }else if($result < 25){
            $classificacao = `no peso ideal, parabéns!!`
        }else if($result < 30){
            $classificacao = `acima do peso`
        }else if($result < 35) {
            $classificacao = `obesidade grau I`
        }else if($result < 40){
            $classificacao = `obesidade grau II`
        }else{
            $classificacao = `obesidade grau III`
        }
        $resultado.textContent = `Olá ${$inputName}, seu IMC é ${$result.toFixed(2)} e você está ${$classificacao}`;
    }
}

let $btnCalcular = document.getElementById("calcular");
$btnCalcular.addEventListener("click", calcularImc)
