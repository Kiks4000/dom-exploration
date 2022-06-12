
const list = document.getElementsByTagName("ul")[0].childNodes;

for (let i = 0; i < list.length; i++) {
    if (list[i].nodeType === 1) {
        if (list[i].textContent === 'Fast and Furious') {
            list[i].classList.add('important');
            if (i !== 0) {
                list[i].parentNode.insertBefore(list[i], list[0]);
            }
        }
    }
}

addEventListener('click', function(event) {
    if (event.target.textContent === 'Fast and Furious') {
        alert('The most important franchise ever, the story of DOM(inic) Toretto\'s family. It\'s not about car, it\'s about family.');
    }else alert(event.target.textContent);
}
);