// Variáveis do jogo
let numeroSecreto = 0;
let tentativasRestantes = 10;
let pontuacao = 0;
let tentativasFeitas = [];

// Função para mostrar uma tela específica
function mostrarTela(idTela) {
    // Esconder todas as telas
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.remove('ativa'));
    
    // Mostrar a tela desejada
    document.getElementById(idTela).classList.add('ativa');
}

// Função para voltar ao menu inicial
function voltarMenu() {
    mostrarTela('menu-inicial');
}

// Função para ir para o tutorial
function irParaTutorial() {
    mostrarTela('tutorial');
}

// Função para inicializar o jogo
function iniciarJogo() {
    // Resetar variáveis do jogo
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    pontuacao = 0;
    tentativasFeitas = [];
    
    // Atualizar interface
    document.getElementById('tentativas').textContent = tentativasRestantes;
    document.getElementById('pontuacao').textContent = pontuacao;
    document.getElementById('dica').textContent = 'Digite um número entre 1 e 100:';
    document.getElementById('palpite').value = '';
    document.getElementById('lista-tentativas').innerHTML = '';
    
    // Mostrar tela do jogo
    mostrarTela('jogo');
    
    // Focar no campo de entrada
    document.getElementById('palpite').focus();
}

// Função para fazer um palpite
function fazerPalpite() {
    const palpiteInput = document.getElementById('palpite');
    const palpite = parseInt(palpiteInput.value);
    
    // Validar entrada
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert('Por favor, digite um número válido entre 1 e 100!');
        return;
    }
    
    // Verificar se o número já foi tentado
    if (tentativasFeitas.includes(palpite)) {
        alert('Você já tentou esse número! Tente outro.');
        return;
    }
    
    // Adicionar tentativa ao histórico
    tentativasFeitas.push(palpite);
    tentativasRestantes--;
    
    // Verificar se acertou
    if (palpite === numeroSecreto) {
        // Vitória!
        pontuacao = calcularPontuacao();
        mostrarVitoria();
        return;
    }
    
    // Dar dica
    let dica = '';
    let status = '';
    if (palpite < numeroSecreto) {
        dica = 'O número secreto é MAIOR que ' + palpite;
        status = 'Muito baixo';
    } else {
        dica = 'O número secreto é MENOR que ' + palpite;
        status = 'Muito alto';
    }
    
    // Atualizar interface
    document.getElementById('dica').textContent = dica;
    document.getElementById('tentativas').textContent = tentativasRestantes;
    
    // Adicionar ao histórico visual
    adicionarTentativaAoHistorico(palpite, status);
    
    // Limpar campo de entrada
    palpiteInput.value = '';
    palpiteInput.focus();
    
    // Verificar se perdeu
    if (tentativasRestantes === 0) {
        mostrarDerrota();
    }
}

// Função para calcular pontuação
function calcularPontuacao() {
    const tentativasUsadas = 10 - tentativasRestantes;
    let pontos = 1000;
    
    // Menos pontos por tentativa usada
    pontos -= (tentativasUsadas - 1) * 100;
    
    // Bônus por acertar rapidamente
    if (tentativasUsadas <= 3) {
        pontos += 500; // Bônus de velocidade
    } else if (tentativasUsadas <= 5) {
        pontos += 200;
    }
    
    return Math.max(pontos, 100); // Mínimo de 100 pontos
}

// Função para adicionar tentativa ao histórico
function adicionarTentativaAoHistorico(palpite, status) {
    const lista = document.getElementById('lista-tentativas');
    const item = document.createElement('li');
    const tentativa = 11 - tentativasRestantes;
    item.textContent = `Tentativa ${tentativa}: ${palpite} - ${status}`;
    lista.appendChild(item);
}

// Função para mostrar tela de vitória
function mostrarVitoria() {
    const tentativasUsadas = 10 - tentativasRestantes;
    document.getElementById('mensagem-vitoria').textContent = 
        `Parabéns! Você descobriu o número ${numeroSecreto} em ${tentativasUsadas} tentativa(s)!`;
    document.getElementById('pontuacao-final').textContent = 
        `Sua pontuação: ${pontuacao} pontos`;
    mostrarTela('vitoria');
}

// Função para mostrar tela de derrota
function mostrarDerrota() {
    document.getElementById('mensagem-derrota').textContent = 
        'Suas tentativas acabaram! Tente novamente.';
    document.getElementById('numero-secreto-revelado').textContent = 
        `O número secreto era: ${numeroSecreto}`;
    mostrarTela('derrota');
}

// Event listener para Enter no campo de palpite
document.addEventListener('DOMContentLoaded', function() {
    const palpiteInput = document.getElementById('palpite');
    palpiteInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            fazerPalpite();
        }
    });
});

// Função para reiniciar o jogo (pode ser chamada de qualquer tela)
function reiniciarJogo() {
    iniciarJogo();
}

