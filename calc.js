// Seleciona elementos
const form = document.getElementById('imc-form');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const imcResult = document.getElementById('imcResult');
const imcClass = document.getElementById('imcClass');

// Função para calcular IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

// Função para aplicar classes de cor dinâmicas
function aplicarClasse(imc) {
    // Remove classes dinâmicas antigas
    imcResult.classList.remove('abaixo','normal','sobrepeso','obesidade');
    imcClass.classList.remove('abaixo','normal','sobrepeso','obesidade');

    // Aplica nova classe conforme classificação
    if (imc < 18.5) {
        imcResult.classList.add('abaixo');
        imcClass.classList.add('abaixo');
    } else if (imc < 25) {
        imcResult.classList.add('normal');
        imcClass.classList.add('normal');
    } else if (imc < 30) {
        imcResult.classList.add('sobrepeso');
        imcClass.classList.add('sobrepeso');
    } else {
        imcResult.classList.add('obesidade');
        imcClass.classList.add('obesidade');
    }
}

// Evento ao enviar o formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação simples
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularIMC(peso, altura).toFixed(2);
    const classificacao = classificarIMC(imc);

    // Exibe os resultados
    imcResult.textContent = `IMC: ${imc}`;
    imcClass.textContent = `Classificação: ${classificacao}`;

    // Aplica cores dinâmicas
    aplicarClasse(imc);
});
