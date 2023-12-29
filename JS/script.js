var dataAtual = new Date();

// Opções de formatação
var formatoData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Formata a data como string legível
var dataFormatada = dataAtual.toLocaleDateString('pt-BR', formatoData);

// Atualiza o conteúdo da página com a data formatada
document.getElementById('dataAtual').textContent = 'Hoje é ' + dataFormatada;

function updateClocks() {
    // Obter a data atual
    const now = new Date();

    // Atualizar relógio analógico
    const analogClock = document.getElementById('analog-clock');
    drawAnalogClock(analogClock, now);
    
    // Atualizar relógio digital
    const digitalClock = document.getElementById('digital-clock');
    updateDigitalClock(digitalClock, now);
}

function drawAnalogClock(container, time) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;

    // Desenhar o círculo do relógio
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();
    context.strokeStyle = '#3498db';
    context.lineWidth = 8;
    context.stroke();

    // Desenhar marcações das horas
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = centerX + (radius - 20) * Math.cos(angle);
        const y = centerY + (radius - 20) * Math.sin(angle);
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fillStyle = '#3498db';
        context.fill();
    }

    // Desenhar ponteiro das horas
    const hours = time.getHours() % 12;
    const hourAngle = (hours + time.getMinutes() / 60) * 30 - 90;
    drawClockHand(context, centerX, centerY, radius * 0.5, hourAngle, 8, '#3498db');

    // Desenhar ponteiro dos minutos
    const minuteAngle = (time.getMinutes() + time.getSeconds() / 60) * 6 - 90;
    drawClockHand(context, centerX, centerY, radius * 0.7, minuteAngle, 4, '#3498db');

    // Desenhar ponteiro dos segundos
    const secondAngle = (time.getSeconds()) * 6 - 90;
    drawClockHand(context, centerX, centerY, radius * 0.9, secondAngle, 2, '#e74c3c');

    container.innerHTML = '';
    container.appendChild(canvas);
}

function drawClockHand(context, x, y, length, angle, lineWidth, color) {
    const radians = (angle) * (Math.PI / 180);
    const endX = x + length * Math.cos(radians);
    const endY = y + length * Math.sin(radians);

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(endX, endY);
    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.stroke();
}

function updateDigitalClock(container, time) {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    container.textContent = `${hours}:${minutes}:${seconds}`;
}

function openG(){
    alert("Abrindo Google!!!");
}

function openYt(){
    alert("Abrindo YouTube!!!");
}

function openDiscord(){
    alert("Abrindo Discord!!!");
}

function openInsta() {
    // Aviso para abrir o Instagram
    alert("Abrindo Instagram!!!");
}

function openNews() {
    // Adicione aqui o código para abrir as notícias do mundo
    alert("Abrindo Notícias do Mundo!!!");
}

// Atualizar os relógios a cada segundo
setInterval(updateClocks, 1000);

// Inicializar os relógios quando a página carrega
updateClocks();