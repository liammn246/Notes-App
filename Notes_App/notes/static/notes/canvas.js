const canvas = document.querySelector('#draw_space');
const c = canvas.getContext('2d');
const erase_button = document.querySelector('#white_button');
const red_button = document.querySelector('#red_button');
const black_button = document.querySelector('#black_button')
const note_title = document.getElementById('note_title')
let penSize = document.getElementById("pen_size")
let erase_mode = false
let red_mode = false
c.strokeStyle = 'black'
let penColor = 'black'
let title = 'Untitled'

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
c.lineWidth = penSize.value
let drawing = false;
function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function beginDraw(e) {
    drawing = true;
    const { x, y } = getMousePos(e);
    c.beginPath();
    c.moveTo(x, y);
}

function endDraw() {
    drawing = false;
}

function freeDraw(e) {
    if (!drawing) return;
    const { x, y } = getMousePos(e);
    c.lineCap = "round";
    c.lineTo(x, y);
    c.stroke();
}

function whiteMode() {
    c.strokeStyle = 'white'
}

function redMode() {
    c.strokeStyle = 'red'
}

function blackMode() {
    c.strokeStyle = 'black'
}


canvas.addEventListener('mousedown', beginDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mousemove', freeDraw);
erase_button.addEventListener('click', whiteMode)
red_button.addEventListener('click', redMode)
black_button.addEventListener('click', blackMode)
canvas.addEventListener('mouseleave', () => {
    drawing = false;
});
note_title.addEventListener('click', () => {
    title = prompt('')
    note_title.textContent = title
})

penSize.addEventListener("input", () => {
  c.lineWidth = penSize.value
});