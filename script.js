const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em Tvd (The Vampire Diaries) qual foi o ano que os irmãos Salvatore viram vampiros?",
        alternativas: ["1864", "1570"],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Em Grey's Anatomy qual foi a cor do post it que Meredith e Derek casaram?",
        alternativas: ["Amarelo", "Azul"],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual dorama tem um Mafioso Italiano como personagem principal?",
        alternativas: ["Vincenzo", "My sweet mobster"],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Em Harry Potter quem eram os marotos, e quais eram os seus apelidos?",
        alternativas: [
            "Severo Snape(cobrinha), Pedro Pettigrew(ratinho), Líli Potter(almofadinha) e Tiago Potter(aluado).",
            "Remo Lupin(aluado), Pedro Pettigrew(rabicho), Tiago Potter(pontas) e Sirius Black(almofadinha)."
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Em 'É assim que acaba', com quem Lily fica no final da duologia?",
        alternativas: ["Ryle", "Atlas"],
        correta: 1 // A segunda alternativa é a correta
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões para as alternativas
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta(); // Corrigido para chamar a função corretamente
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaPrincipal.style.display = 'none'; // Esconde a caixa de perguntas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Adiciona classe para animação
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove('mostrar');
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostraPergunta();
    });

    caixaResultado.innerHTML = ''; // Limpa conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializa a primeira pergunta
mostraPergunta();
