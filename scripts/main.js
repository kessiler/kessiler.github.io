const canvas = document.querySelector('#play');
const canvasCtx = canvas.getContext('2d');
let particles = [];
let amount = 0;
const colors = ['#FFFFFF', '#4CABF3', '#122AFF', '#18CCF0', '#3107FF'];

const text = document.querySelector('#text-render');

let windowW = canvas.width = window.innerWidth;
let windowH = canvas.height = window.innerHeight;


function createParticles(canvasData) {
    particles = [];
    for (let i = 0; i < windowW; i += Math.round(windowW / 150)) {
        for (let j = 0; j < windowH; j += Math.round(windowW / 150)) {
            if (canvasData[((i + j * windowW) * 4) + 3] > 150) {
                particles.push(new Particle(colors, windowW, windowH, i, j));
            }
        }
    }
}

function initCanvasScene() {
    windowW = canvas.width = window.innerWidth;
    windowH = canvas.height = window.innerHeight;

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    canvasCtx.font = 'bold ' + (windowW / 10) + 'px Roboto';
    canvasCtx.textAlign = 'center';
    canvasCtx.fillText(text.value, windowW / 2, windowH / 2);

    const { data } = canvasCtx.getImageData(0, 0, windowW, windowH);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.globalCompositeOperation = 'screen';

    createParticles(data);
    amount = particles.length;
}

function render() {
    requestAnimationFrame(render);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < amount; i++) {
        particles[i].render();
    }
}


window.addEventListener('resize', initCanvasScene);
initCanvasScene();
requestAnimationFrame(render);
