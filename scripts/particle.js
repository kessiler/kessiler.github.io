class Particle {
    constructor(colors, windowW, windowH, x, y) {
        this.x = Math.random() * windowW;
        this.y = Math.random() * windowH;
        this.dest = {
            x: x,
            y: y
        };
        this.r = Math.random() * 2 + 2;
        this.vx = (Math.random() - 0.5) * 20;
        this.vy = (Math.random() - 0.5) * 20;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random() * 0.05 + 0.94;

        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    render() {
        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        canvasCtx.fillStyle = this.color;
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.r, Math.PI * 2, 0);
        canvasCtx.fill();
    }
}
