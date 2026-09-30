let nota, resultado;

function verificar() {
    nota = Number(document.getElementById('nota').value);
    resultado = document.getElementById('resultado');

    if (nota < 5) {
        resultado.innerHTML = "Reprovado";
    } else if (nota < 7) {
        resultado.innerHTML = "Recuperação"
    } else {
        resultado.innerHTML = "Aprovado"
    }
}

let numero1, numero2;

function subtrair(){
    numero1 = Number(document.getElementById('numero1').value);
    numero2 = Number(document.getElementById('numero2').value);

    resultado1 = numero1 - numero2

    document.getElementById('resultado1').innerHTML ="Resultado: " + resultado1;
}

let N1,N2,N3,N4, aprovacao;

function media(){
    N1 = Number(document.getElementById('N1').value);
    N2 = Number(document.getElementById('N2').value);
    N3 = Number(document.getElementById('N3').value);
    N4 = Number(document.getElementById('N4').value);
    aprovacao =document.getElementById('aprovacao');

    resultado2 = (N1+N2+N3+N4)/4

    document.getElementById('resultado2').innerHTML= "A média é: " + resultado2

    if (resultado2 >=5){
        aprovacao.innerHTML="Aprovado"
    }else{
        aprovacao.innerHTML="Reprovado"
    }
}