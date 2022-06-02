/* Exercises
Modify the script.js, do not create any new nodes!

Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways */

let list = document.querySelector('ol');

let lastChild = list.lastElementChild;
let firstChild = list.firstElementChild;

lastChild.appendChild(firstChild);

let secondSection = document.querySelector('section:nth-child(2)');
let thirdSection = document.querySelector('section:nth-child(3)');

let sectionTwoH2 = secondSection.querySelector('h2');
let sectionThreeH2 = thirdSection.querySelector('h2');

function moveElement(element, destination) {
    destination.appendChild(element);
}

moveElement(sectionTwoH2, thirdSection);
moveElement(sectionThreeH2, secondSection);

let removeSection = document.querySelector('section:nth-child(3)');
removeSection.remove();

let c1 = secondSection.lastElementChild;
let c2 = secondSection.firstElementChild;

c1 = secondSection.appendChild(c2);