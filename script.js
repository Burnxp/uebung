

    const flex = document.querySelector('.container');
    console.log(flex)
    flex.style.backgroundColor= 'green';

        let red = false;

        flex.addEventListener('click', function(event){
            if (event.target === flex){
            flexColor();
        }
    })

const grid = document.querySelector('.container-grid');
grid.style.backgroundColor = 'gray';

let blue = false;

grid.addEventListener('click', (event) =>{
    if(event.target === grid){
        gridColor();

    }
    
})

function gridColor(){
    if (blue) {
        grid.style.backgroundColor = 'gray';
    } else {
        grid.style.backgroundColor = 'blue';
    }
    blue = !blue;
}

function flexColor(){
    if(red){
        flex.style.backgroundColor= 'green';

    } else {
        flex.style.backgroundColor = 'red';
    }
    red = !red
}


let colorBWY = false;
const flexItemOne = document.querySelector('.item1');
flexItemOne.addEventListener('click', () => {
    
    if (!colorBWY) {
        flexItemOne.style.background = 'linear-gradient(blue, white, yellow)';
    } else {
        flexItemOne.style.background = 'blue';
    }

    colorBWY = !colorBWY;
})

let colorBWYt = false;
const flexItemTwo = document.querySelector('.item2');
flexItemTwo.addEventListener('click', () => {
    
    if (!colorBWYt) {
        flexItemTwo.style.background = 'radial-gradient(blue, white, yellow)';
    } else {
        flexItemTwo.style.background = 'blue';
    }

    colorBWYt = !colorBWYt;
})

let colorBWY3 = false;
const flexItemThree = document.querySelector('.item3');
flexItemThree.addEventListener('click', () => {
    
    if (!colorBWY3) {
        flexItemThree.style.background = 'linear-gradient(blue, white, yellow)';
    } else {
        flexItemThree.style.background = 'blue';
    }

    colorBWY3 = !colorBWY3;
})

let colorBWY4 = false;
const flexItemFour = document.querySelector('.item4');
flexItemFour.addEventListener('click', () => {
    
    if (!colorBWY4) {
        flexItemFour.style.background = 'linear-gradient(blue, white, yellow)';
    } else {
        flexItemFour.style.background = 'blue';
    }

    colorBWY4 = !colorBWY4;
})
