function somar() {
    var numero1 = parseFloat(document.getElementById("n1").value) || 0;
    var numero2 = parseFloat(document.getElementById("n2").value) || 0;
    var res = document.getElementById("res-soma");
    res.innerHTML = numero1 + numero2;
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById("n3").value) || 0;
    var numero2 = parseFloat(document.getElementById("n4").value) || 0;
    var res = document.getElementById("res-subtracao");
    res.innerHTML = numero1 - numero2;
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("n5").value) || 0;
    var numero2 = parseFloat(document.getElementById("n6").value) || 0;
    var res = document.getElementById("res-multiplicacao");
    res.innerHTML = numero1 * numero2;
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("n7").value) || 0;
    var numero2 = parseFloat(document.getElementById("n8").value) || 0;
    var res = document.getElementById("res-divisao");
    res.innerHTML = numero1 / numero2;
}

function media() {
    var numero1 = parseFloat(document.getElementById("m1").value) || 0;
    var numero2 = parseFloat(document.getElementById("m2").value) || 0;
    var numero3 = parseFloat(document.getElementById("m3").value) || 0;
    var numero4 = parseFloat(document.getElementById("m4").value) || 0;
    var numero5 = parseFloat(document.getElementById("m5").value) || 0;
    var res = document.getElementById("respMedia");
    var soma = numero1 + numero2 + numero3 + numero4 + numero5;
    var media = soma / 5;
    res.innerHTML = media;
    var msg = document.getElementById("msg");
    if (media >= 7) {
        msg.innerHTML = "Aprovado";
    } else {
        msg.innerHTML = "Reprovado";
    }
}
function calcularIMC() {
    var numero1 = parseFloat(document.getElementById("p1").value); // Peso
    var numero2 = parseFloat(document.getElementById("a1").value); // Altura
    var res = document.getElementById("resIMC");

    if (numero1 > 0 && numero2 > 0) {
        var resultado = (numero1 / (numero2 * numero2)).toFixed(2); // Correção da fórmula
        res.innerHTML = resultado;
        var msg = document.getElementById("mensagem");

        if (resultado >= 40) {
            msg.innerHTML = "Obesidade Grau III";
            msg.innerHTML = "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente"
        } else if (resultado >= 35 && resultado <= 39.9) { // Correção dos intervalos e remoção da duplicação
            msg.innerHTML = "Obesidade Grau II";
            msg.innerHTML = "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
        } else if (resultado >= 30 && resultado <= 34.9) { // Correção dos intervalos e remoção da duplicação
            msg.innerHTML = "Obesidade Grau I";
            msg.innerHTML = "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
        } else if (resultado >= 25 && resultado <= 29.9) {
            msg.innerHTML = "Sobrepeso";
            msg.innerHTML = "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
        } else if (resultado >= 18.6 && resultado <= 24.9) {
            msg.innerHTML = "Normal";
            msg.innerHTML = "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
        } else if (resultado <= 18.5) {
            msg.innerHTML = "Abaixo do Normal";
            msg.innerHTML = "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
        } else {
            msg.innerHTML = "";
        }
    } else {
        res.innerHTML = "Valores inválidos";
        msg.innerHTML = "";
    }
}
function ENTER(){
    var numero = parseFloat(document.getElementById("idade").value); // Corrigido o ID do input
    var mensagem = document.getElementById("MENSAGEM");
    var idade = document.getElementById("resIDADE");

    idade.innerHTML = numero; // Mostrar a idade digitada

    if (numero >= 18){
        mensagem.innerHTML = "Acesso liberado";
    } else if (numero <= 17){
        mensagem.innerHTML = "Acesso negado<br>Nao é permitido menores de idade na balada";
    }
}




