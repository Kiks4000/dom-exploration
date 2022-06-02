/* Exercises
Open the script.js file and edit it, so that:

Everytime the user clicks on one of the action squares
Create a new <div> with a class .displayedsquare and the corresponding 
clicked color in the div above (.displayedsquare-wrapper)
Create a new <li> in the log below to state when the action was done
Add an event listener on the document <body>, listening for the keypress event. 
(hint: have a look at this)
When the spacebar is hit randomly change the background color of the whole page
Log when the spacebar is used the same way you used for the generated squares.
When the l key is pressed the log gets deleted (erases the generated <li>s). 
Mind you: using a delete in a for loop might cause issues 
(as the amount of items to loop over changes), so a while loop might be a good choice instead.
When the s key is pressed the squares get deleted (erases the generated squares)
Create a system so that when a user clicks on a generated square an alert pops-up 
with the color of that square*/

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

// Creation of squares //

let greenColor = document.querySelector('.green');
let violetColor = document.querySelector('.violet');
let orangeColor = document.querySelector('.orange');


greenColor.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('displayedSquare');
    newDiv.classList.add('green');
    document.body.appendChild(newDiv);
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Green Square Clicked';
    document.querySelector('.log').appendChild(newLi);
});