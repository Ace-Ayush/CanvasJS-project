// Get references to the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Variables to keep track of the mouse position and drawing state
let isDrawing = false;
let startX = 0;
let startY = 0;
let circles = []; // Array to store all the circles

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to draw all circles from the circles array
function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circle.color;
        ctx.fill();
    });
}

// Event listeners for mouse down, move, and up
canvas.addEventListener('mousedown', function(event) {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

canvas.addEventListener('mousemove', function(event) {
    if (!isDrawing) return;

    const currentX = event.offsetX;
    const currentY = event.offsetY;
    const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));

    // Store the circle's data
    const newCircle = {
        x: startX,
        y: startY,
        radius: radius,
        color: getRandomColor()
    };

    circles.push(newCircle); // Add the new circle to the array

    drawCircles(); // Redraw all circles
});

canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

// Reset Button Logic
document.getElementById('resetBtn').addEventListener('click', function() {
    circles = []; // Clear the circles array
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});
