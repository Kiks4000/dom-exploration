// const for the ul list

const list = document.getElementsByTagName("ul")[0].childNodes;

// Loop for making Fast and Furious "important" & remove duplicates

for (let i = 0; i < list.length; i++) {
    if (list[i].nodeType === 1) {
        if (list[i].textContent === 'Fast and Furious') {
            list[i].classList.add('important');
            if (i !== 0) {
                list[i].parentNode.insertBefore(list[i], list[0]);
            }
        }
    }
    if (list.length > 1) { 
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i].isEqualNode(list[j])) {
                    list[j].parentNode.removeChild(list[j]);
                }
            }
        }
    }
}

// Event Listener on click to display the text of the list item

addEventListener('click', function(event) {
    if (event.target.textContent === 'Fast and Furious') {
        alert('The most important franchise ever, the story of DOM(inic) Toretto\'s family. It\'s not about car, it\'s about family.');
    }    if (event.target.tagName === 'LI') {
        alert(event.target.textContent);
    }
}
);

// New Div Element created and insert before the Ul Element

const newDiv = document.createElement('div');
document.body.insertBefore(newDiv, document.getElementsByTagName('ul')[0]);

// creating a select tag and adding it to the new div with 2 options

const select = document.createElement('select');
newDiv.appendChild(select);

const option1 = document.createElement('option');
option1.textContent = 'Important Franchise';

const option2 = document.createElement('option');
option2.textContent = 'Normal Franchises';

select.appendChild(option1);
select.appendChild(option2);

/* if the select tag change to important franchise the list will display only 'important' franchises
and if the select tag change to normal franchises the list will display the others franchises */

select.addEventListener('change', function(event) {
    if (event.target.value === 'Important Franchise') {
        for (let i = 0; i < list.length; i++) {
            if (list[i].nodeType === 1) {
                if (list[i].classList.contains('important')) {
                    list[i].style.display = 'block';
                } else {
                    list[i].style.display = 'none';
                }
            }
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].nodeType === 1) {
                if (list[i].classList.contains('important')) {
                    list[i].style.display = 'none';
                } else {
                    list[i].style.display = 'block';
                }
            }
        }
    }
}
);