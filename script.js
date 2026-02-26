// gráfico: Impacto nos Estudantes
const ctxImpacto = document.getElementById('graficoImpactoEstudantes');

new Chart(ctxImpacto, {
    type: 'bar',
    data: {
        labels: [
            'Dificuldades de Aprendizado',
            'Baixo Desempenho Escolar',
            'Necessidade de Óculos'
        ],
        datasets: [{
            label: 'Percentual de Estudantes Afetados',
            data: [30, 3, 25],
            backgroundColor: ['#B22222', '#ff9999', '#ff6666']
        }]
    }
});

// gráfico: Descarte de Óculos
const ctxDescarte = document.getElementById('graficoDescarte');

new Chart(ctxDescarte, {
    type: 'pie',
    data: {
        labels: ['Reciclado', 'Descartado Incorretamente'],
        datasets: [{
            data: [90, 10],
            backgroundColor: ['#B22222', '#ff9999']
        }]
    }
});

// gráfico: Saúde Visual
const ctxSaude = document.getElementById('graficoSaude');

new Chart(ctxSaude, {
    type: 'bar',
    data: {
        labels: ['Deficiência Visual', 'Casos Evitáveis'],
        datasets: [{
            label: 'Milhões de Pessoas',
            data: [2200, 1000],
            backgroundColor: ['#B22222', '#ff9999']
        }]
    }
});