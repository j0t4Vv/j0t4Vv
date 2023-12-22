function calculo() {
    var valorEquipamento = parseFloat(document.getElementById("equipamento").value);
    var valorSucata = parseFloat(document.getElementById("sucata").value);
    var vidaUtil = parseFloat(document.getElementById("vida_util").value);
    var tempoUso = parseFloat(document.getElementById("tempo_uso").value);

    if (
        isNaN(valorTotal) ||
        isNaN(valorSucata) ||
        isNaN(vidaUtil) ||
        isNaN(tempoUso) ||
    
    ) {
        alert("Digite Números Válidos");
        return;
    }

    var vidaTotal = vidaUtil * 12;
    var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaTotal;
    var depreciacaoTotal = taxaDepreciacaoAnual * tempoUso;
    var resultadoAnual = "Depreciacao Total anual: R$" + depreciacaoTotal.toFixed(2);
    var resultadoMensal = "Depreciação total mensal: R$" + depreciacaoTotal.toFixed(2);

document.getElementById("result").innerHTML = resultadoAnual;
}

