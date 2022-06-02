/* Exercises
Modify the script.js to create a new <section> with a random background-color for each learner in your group.
This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes! */

let randomHslColorBg = () => {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

let blackOrWhiteTxt = (bgColor) => {
    let hsl = bgColor.split('(')[1].split(')')[0].split(',');
    let h = parseInt(hsl[0]);
    let s = parseInt(hsl[1]);
    let l = parseInt(hsl[2]);
    if (l < 50) {
        return 'white';
    } else {
        return 'black';
    }
}

let article = document.querySelector('article');

for (let i = 1; i < 6; i++) {
    let newSection = document.createElement('section');
    let newP = document.createElement('p');
    let newText = document.createTextNode('Hello World');
    let newText2 = document.createTextNode(`Learner ${i}`);
    let newColor = randomHslColorBg();
    let textColor = blackOrWhiteTxt(newColor);
    newSection.style.backgroundColor = newColor;
    newP.style.color = textColor;
    newP.appendChild(newText2);
    newSection.style.color = textColor;
    newSection.appendChild(newP);
    newSection.appendChild(newText);
    article.appendChild(newSection);
}

    let sections = document.querySelectorAll('section');
    let randomOrder = () => {
        let newOrder = [];
        for (let i = 0; i < sections.length; i++) {
            let randomIndex = Math.floor(Math.random() * sections.length);
            newOrder.push(sections[randomIndex]);
        }
        return newOrder;
    }

    let newOrder = randomOrder();
    for (let i = 0; i < newOrder.length; i++) {
        article.appendChild(newOrder[i]);
    }   