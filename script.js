const div = document.querySelector('#container');

const rows = 16;
const columns = 16;
const totalCells = rows * columns;

function createGrid(totalCells) {
    for(let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridItem');
        container.appendChild(cell);
    }
}

createGrid(totalCells);