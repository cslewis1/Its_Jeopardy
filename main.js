//INITIALIZE THE GAME BOARD ON PAGE LOAD
initBoard();
initCatRow();

document.querySelector('button').addEventListener('click', buildCategories)

function initCatRow() {
    let catRow = document.getElementById('category-row')

    for (let i = 0; i < 6; i++){
        let box = document.createElement('div')
        box.className = 'clue-box category-box'
        catRow.appendChild(box)
    }
}

function initBoard() {
    let board = document.getElementById('clue-board')

    //GENERATE 5 ROWS, THEN PLACE 6 BOXES IN EACH ROW
    for (let i = 0; i < 5; i++){
        let row = document.createElement('div')
        let boxValue = 200 * (i + 1)
        row.className = 'clue-row'

        for (let j = 0; j < 6; j++){
            let box = document.createElement('div')
            box.className = 'clue-box';
            box.textContent = '$' + boxValue
            box.addEventListener('click', getClue, false)
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

function randInt() {
    return Math.floor(Math.random() * (18418) + 1)
}

let catArr = []

function buildCategories() {
    const fetchReq1 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());
    
    const fetchReq2 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq3 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq4 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq5 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq6 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6])

    allData.then((res) => {
        console.log(res)
        catArr = res
        setCategories(catArr)
    })
}

//FUNCTION TO LOAD THE CATEGORIES TO THE BOARD
function setCategories(catArr) {
    let element = document.getElementById('category-row')
    let children = element.children
    for (let i = 0; i < children.length; i++){
        children[i].innerHTML = catArr[i].title
    }
}

function getClue(event) {
    let child = event.currentTarget
    child.classList.add('clicked-box')
    let boxValue = child.innerHTML.slice(1)
    let parent = child.parentNode
    let index = Array.prototype.findIndex.call(parent.children, (c) => c === child)
}


function getClue() {
    console.log('Have a nive day')
}