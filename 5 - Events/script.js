// Setting Date Log // 

const _initTime = Date.now()

const getElapsedTime = () => {
return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare)
}

// Setting consts //

const sectionContainer = document.querySelector('.displayedsquare-wrapper')
const squares = document.querySelectorAll('.actionsquare')
const green = document.querySelector('.green')
const violet = document.querySelector('.violet')
const orange = document.querySelector('.orange')

const list = document.querySelector('ul')

// function create square

function createDisplaySquare(color) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('displayedsquare')
    newDiv.style.backgroundColor = color
    sectionContainer.appendChild(newDiv)
}

green.addEventListener('click', () => {
    createDisplaySquare('lime')
    list.innerHTML += `<li>${getElapsedTime()} - Green</li>`
})

violet.addEventListener('click', () => {
    createDisplaySquare('magenta')
    list.innerHTML += `<li>${getElapsedTime()} - Violet</li>`
})

orange.addEventListener('click', () => {
    createDisplaySquare('orange')
    list.innerHTML += `<li>${getElapsedTime()} - Orange</li>`
})

// setting key press event

randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
}



document.addEventListener('keypress', (e) => {

    const listChild = document.querySelectorAll("li");
    const deleteSquare = document.querySelectorAll(".displayedsquare");

    if (e.code === "Space") {
        document.body.style.backgroundColor = randomColor();
        list.innerHTML += `<li>${getElapsedTime()} - Random</li>`
    }else if (e.code === "KeyL") {
        listChild.forEach((log) => log.remove());
    }else if (e.code === "KeyS") {
        deleteSquare.forEach((square) => square.remove());
    }
})

// 

document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'displayedsquare') {
        alert(e.target.style.backgroundColor)
    }
})