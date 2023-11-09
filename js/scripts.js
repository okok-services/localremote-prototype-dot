// hover on single-grid , add class .hover and after mouseleave, and + 2 seconds, remove class

// divide the grid into as many columns and row  as possible for 30px by 30px grid

const grid_cols = Math.floor(window.innerWidth / 24);
const grid_rows = Math.floor(window.innerHeight / 24);

const grid_wrap = document.querySelector('.grid-wrap');

// var count_svg = 0;

var letter_arr = ['L', 'O', 'C', 'A', 'R', 'M', 'T', 'E'];

class Grid {
    constructor() {
        this.isHovered = false;
        this.hoverOutTimer = null;
        // random between 1 and 4
        this.randomizedNumber = Math.floor(Math.random() * 4) + 1;

        this.initGrid();
    }
    initGrid() {
        this.grid = document.createElement('div');
        this.grid.setAttribute('class', 'single-grid type-' + this.randomizedNumber);

        this.dot_wrap = document.createElement('div');
        this.dot_wrap.setAttribute('class', 'dot-wrap');
        this.dot_wrap.innerHTML = '<img class="_img" src="/img/v2/' + letter_arr[Math.floor(Math.random() * letter_arr.length)] + '.svg" />';
        this.grid.appendChild(this.dot_wrap);

        // for (let i = 0; i < this.randomizedNumber; i++) {
        //     let dot = document.createElement('div');
        //     dot.setAttribute('class', 'dot');
        //     this.dot_wrap.appendChild(dot);
        // }

        grid_wrap.appendChild(this.grid);

        this.initGridInteraction();
    }
    initGridInteraction() {
        this.grid.addEventListener('mouseenter', () => {
            // console.log('enter');
            this.isHovered = true;
            this.grid.classList.add('active');
            clearTimeout(this.hoverOutTimer);
        });
        this.grid.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.hoverOutTimer = setTimeout(() => {
                if (!this.isHovered) {
                    this.grid.classList.remove('active');
                }
            }, 2000);
        });
    }
}

for (let i = 0; i < grid_cols; i++) {
    for (let j = 0; j < grid_rows; j++) {
        let grid = new Grid();
        // console.log('fire');
        // document.querySelector('.grid-wrap').appendChild(grid.dot_wrap);
    }
}
