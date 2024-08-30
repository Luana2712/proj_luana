const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em TVD (The Vampire Diares) qual ano os irmãos Salvatore viraram vampiros ?",
        alternativas: [
            "1864",
            "1760"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Com quem a lily fica no final da duologia de É assim que acaba?",
        alternativas: [
            "Ryle",
            "Atlas"
        ],
        correta: 1 // A Segunda alternativa é a correta
    },
    {
        enunciado: "Em Grey's Anatomy na sétima temporada, dois dos médicos do Hospital, sofre um acidente de carro, qual foram os dois médicos? E qual deles fica entre a vida e morte??",
        alternativas: [
            "Derek Shepherd e Meredith Grey. Meredith Grey",
            "Callie Torres e Arizona Robbins. Callie Torres."
        ],
        correta: 1 // A Segunda alternativa é a correta
    },
    {
        enunciado: "Em Harry Potter quem eram os marotos, e qual eram os seus apelidos? ",
        alternativas: [
            "Severo Snape(cobrinha), Pedro Pettigrew(ratinho), Líli Potter (almofadinha) e Tiago Potter(aluado).",
            "Remo Lupin(aluado), Pedro Pettigrew(rabicho), Tiago Potter(pontas) e Sirius Black(almofadinha)."
        ],
        correta:1 // A Segunda alternativa é a correta
    },
    {
        enunciado: "Qual dorama tem um Mafioso Italiano como personagem principal?",
        alternativas: [
            "Vincenzo",
            "My sweet mobster"
        ],
        correta: 0 // A primeira alternativa é a correta
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
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
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
