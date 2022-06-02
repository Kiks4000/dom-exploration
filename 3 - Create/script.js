/* Creating nodes
Now that we can acess the DOM and modify existing nodes, let's try to create new ones!

Using the document.createElement() method we can create any element node we'd like (<p>, <section>, <div>, ...).

We then need to create text node for the text inside the elements, using the createTextNode method.

The trick is to append each node to its corresponding parent, using either the appendChild or insertBefore method, 
that way you can position your newly created nodes in the DOM tree.

Exercises
Modify the script.js to create a new <section> with a random background-color for each learner in your group.
This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes! */

randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
}

document.createElement('section');
document.querySelectorAll('section').forEach(section => {
    section.style.backgroundColor = randomColor();
    section.appendChild(document.createElement('p'));
    section.querySelector('p').appendChild(document.createTextNode(`${section.style.backgroundColor}`));
    document.querySelector('article').appendChild(section);
}

if(section.style.backgroundColor === 'rgb(0, 0, 0)') {
    section.querySelector('p').style.color = 'white';
} else {
    section.querySelector('p').style.color = 'black';
}

if (section.style.backgroundColor === 'rgb(255, 255, 255)') {
    section.querySelector('p').style.color = 'black';
} else {
    section.querySelector('p').style.color = 'white';
}
