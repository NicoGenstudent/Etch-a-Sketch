const container = document.getElementById('container');
const resetButton = document.getElementById('Reset');
const colorToggleButton = document.getElementById('color-selection');

let isRandomColor = true;

defaultGrid();

function defaultGrid() {
    createGrid(16);
}

function createGrid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const containerSize =  800;
    const cellSize = containerSize / size

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'gridRow';
        row.style.display = 'flex';
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            row.appendChild(cell)
        }
    }

    addHoverEffect()
}

function addHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>  {
        cell.addEventListener('mouseover', ()  => {
            cell.style.backgroundColor = isRandomColor ? getRandomColor() : 'black';
        });
    });
}

function toggleColorMode() {
    isRandomColor = !isRandomColor;
    colorToggleButton.textContent = isRandomColor ? "Random" : "Black";
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

function resetGrid() {
    let newSize = parseInt(prompt("How many squares do you want? (max 100)"))

    if (isNaN(newSize)  || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    createGrid(newSize)
}

resetButton.addEventListener('click', resetGrid)
colorToggleButton.addEventListener('click', toggleColorMode)