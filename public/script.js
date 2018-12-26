let socket;
let randomColor;
function setup() {
    noStroke()
    createCanvas(400, 400);
    background('grey');
    socket = io.connect('http://localhost:3000/')

}
function draw() {
    socket.on('mouse', data => {
        rectMode(CENTER);
        fill(data.randomColor, data.randomColor, data.randomColor)
        rect(data.x, data.y, 40, 40);
    })
}
function mouseDragged() {
    randomColor = random(255);
    fill(0, randomColor, 0)
    ellipse(mouseX, mouseY, 50, 50);
    socket.emit('mouse', {
        x: mouseX,
        y: mouseY,
        randomColor: randomColor
    })
}