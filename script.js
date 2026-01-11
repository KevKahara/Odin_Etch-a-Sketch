const container = document.querySelector('#container');

const cellSize = 16;
const gridSize = cellSize * cellSize;

for(let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridItem');
    cell.classList.add('square');
    container.appendChild(cell);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
});

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const message = prompt('What gridSize would you like?');
    let num = parseInt(message);

    if(isNaN(num)) {
        alert('Invalid input! Please input Numbers');
    } else if(num < 1 || num > 100) {
        alert('Please input range between 1 and 100');
    } else {
        alert(num);
    }

    container.textContent = '';
    let newSquares = num * num;

    for(let i = 0; i < newSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem','squares');
        container.appendChild(gridItem);
        let sizeItem = container.clientWidth / num;
        gridItem.style.width = `${sizeItem}px`;
        gridItem.style.height = `${sizeItem}px`;
    }
    
    const newSquareElements = document.querySelectorAll('.squares');
    newSquareElements.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });
    });
});
