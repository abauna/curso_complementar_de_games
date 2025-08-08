// Variáveis globais do jogo
let canvas, ctx;
let gameState = 'menu'; // menu, tutorial, playing, paused, victory, defeat
let gameLoop;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;

// Configurações do jogo
const GRID_SIZE = 20;
let GAME_SPEED = 150;

// Estado da cobra
let snake = [
    { x: 200, y: 200 }
];
let direction = { x: 0, y: 0 };
let nextDirection = { x: 0, y: 0 };

// Comida
let food = { x: 0, y: 0 };

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    
    // Exibir pontuação máxima
    document.getElementById('high-score-display').textContent = highScore;
    
    // Configurar controles
    setupControls();
    
    // Inicializar posição da comida
    generateFood();
});

// Configurar controles do teclado
function setupControls() {
    document.addEventListener('keydown', function(event) {
        if (gameState !== 'playing') return;
        
        switch(event.key) {
            case 'ArrowUp':
                if (direction.y === 0) {
                    nextDirection = { x: 0, y: -GRID_SIZE };
                }
                event.preventDefault();
                break;
            case 'ArrowDown':
                if (direction.y === 0) {
                    nextDirection = { x: 0, y: GRID_SIZE };
                }
                event.preventDefault();
                break;
            case 'ArrowLeft':
                if (direction.x === 0) {
                    nextDirection = { x: -GRID_SIZE, y: 0 };
                }
                event.preventDefault();
                break;
            case 'ArrowRight':
                if (direction.x === 0) {
                    nextDirection = { x: GRID_SIZE, y: 0 };
                }
                event.preventDefault();
                break;
            case ' ':
                pauseGame();
                event.preventDefault();
                break;
        }
    });
}

// Funções de navegação entre telas
function showScreen(screenId) {
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Mostrar tela específica
    document.getElementById(screenId).classList.add('active');
}

function showMenu() {
    gameState = 'menu';
    showScreen('menu-screen');
    stopGame();
}

function showTutorial() {
    gameState = 'tutorial';
    showScreen('tutorial-screen');
}

function showCredits() {
    showScreen('credits-screen');
}

function startGame() {
    gameState = 'playing';
    showScreen('game-screen');
    resetGame();
    gameLoop = setInterval(updateGame, GAME_SPEED);
}

function pauseGame() {
    if (gameState === 'playing') {
        gameState = 'paused';
        showScreen('pause-screen');
        clearInterval(gameLoop);
    }
}

function resumeGame() {
    if (gameState === 'paused') {
        gameState = 'playing';
        showScreen('game-screen');
        gameLoop = setInterval(updateGame, GAME_SPEED);
    }
}

function restartGame() {
    stopGame();
    startGame();
}

function stopGame() {
    if (gameLoop) {
        clearInterval(gameLoop);
        gameLoop = null;
    }
}

// Lógica do jogo
function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
    nextDirection = { x: 0, y: 0 };
    score = 0;
    GAME_SPEED = 150;
    updateScore();
    generateFood();
    draw();
}

function updateGame() {
    // Atualizar direção
    direction = { ...nextDirection };
    
    // Se a cobra não está se movendo, não atualizar
    if (direction.x === 0 && direction.y === 0) {
        return;
    }
    
    // Mover a cobra
    const head = { ...snake[0] };
    head.x += direction.x;
    head.y += direction.y;
    
    // Verificar colisões com paredes
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver();
        return;
    }
    
    // Verificar colisão com o próprio corpo
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }
    
    snake.unshift(head);
    
    // Verificar se comeu a comida
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        updateScore();
        generateFood();
        
        // Aumentar velocidade gradualmente
        if (score % 50 === 0 && GAME_SPEED > 80) {
            GAME_SPEED -= 10;
            clearInterval(gameLoop);
            gameLoop = setInterval(updateGame, GAME_SPEED);
        }
        
        // Verificar condição de vitória (pontuação alta)
        if (score >= 500) {
            victory();
            return;
        }
    } else {
        snake.pop();
    }
    
    draw();
}

function generateFood() {
    let validPosition = false;
    
    while (!validPosition) {
        food.x = Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE;
        food.y = Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE;
        
        validPosition = true;
        for (let segment of snake) {
            if (food.x === segment.x && food.y === segment.y) {
                validPosition = false;
                break;
            }
        }
    }
}

function draw() {
    // Limpar canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar grade sutil
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Desenhar cobra
    snake.forEach((segment, index) => {
        if (index === 0) {
            // Cabeça da cobra
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(segment.x, segment.y, GRID_SIZE, GRID_SIZE);
            
            // Olhos da cobra
            ctx.fillStyle = 'white';
            ctx.fillRect(segment.x + 4, segment.y + 4, 4, 4);
            ctx.fillRect(segment.x + 12, segment.y + 4, 4, 4);
            ctx.fillStyle = 'black';
            ctx.fillRect(segment.x + 6, segment.y + 6, 2, 2);
            ctx.fillRect(segment.x + 14, segment.y + 6, 2, 2);
        } else {
            // Corpo da cobra
            const alpha = 1 - (index * 0.05);
            ctx.fillStyle = `rgba(76, 175, 80, ${Math.max(alpha, 0.3)})`;
            ctx.fillRect(segment.x + 1, segment.y + 1, GRID_SIZE - 2, GRID_SIZE - 2);
        }
    });
    
    // Desenhar comida
    ctx.fillStyle = '#FF5722';
    ctx.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
    
    // Adicionar brilho na comida
    ctx.fillStyle = '#FF8A65';
    ctx.fillRect(food.x + 2, food.y + 2, GRID_SIZE - 4, GRID_SIZE - 4);
    ctx.fillStyle = '#FFAB91';
    ctx.fillRect(food.x + 4, food.y + 4, GRID_SIZE - 8, GRID_SIZE - 8);
}

function updateScore() {
    document.getElementById('current-score').textContent = score;
}

function gameOver() {
    gameState = 'defeat';
    stopGame();
    
    // Atualizar pontuação final
    document.getElementById('final-score-defeat').textContent = score;
    
    // Verificar novo recorde
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        document.getElementById('high-score-display').textContent = highScore;
        document.getElementById('new-record-defeat').style.display = 'block';
    } else {
        document.getElementById('new-record-defeat').style.display = 'none';
    }
    
    showScreen('defeat-screen');
}

function victory() {
    gameState = 'victory';
    stopGame();
    
    // Atualizar pontuação final
    document.getElementById('final-score-victory').textContent = score;
    
    // Verificar novo recorde
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        document.getElementById('high-score-display').textContent = highScore;
        document.getElementById('new-record').style.display = 'block';
    } else {
        document.getElementById('new-record').style.display = 'none';
    }
    
    showScreen('victory-screen');
}

// Suporte para dispositivos móveis
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    if (gameState !== 'playing') return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    const minSwipeDistance = 30;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Movimento horizontal
        if (Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0 && direction.x === 0) {
                nextDirection = { x: GRID_SIZE, y: 0 }; // Direita
            } else if (deltaX < 0 && direction.x === 0) {
                nextDirection = { x: -GRID_SIZE, y: 0 }; // Esquerda
            }
        }
    } else {
        // Movimento vertical
        if (Math.abs(deltaY) > minSwipeDistance) {
            if (deltaY > 0 && direction.y === 0) {
                nextDirection = { x: 0, y: GRID_SIZE }; // Baixo
            } else if (deltaY < 0 && direction.y === 0) {
                nextDirection = { x: 0, y: -GRID_SIZE }; // Cima
            }
        }
    }
});

// Prevenir zoom no mobile
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

