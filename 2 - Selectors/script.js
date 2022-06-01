/* Without modifying the index.html file open the script.js to do the following tasks:

Add a title attribute to every element that has the important class, stating This is an important item.
Tip: adding a title attribute to an element is different from change a title of a document.
Select all the img tags and loop through them. If they have no important class, turn their display property to none
Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is. */

const title = document.querySelectorAll('[class="important"]');
title.forEach(function(element) {
    element.setAttribute('title', 'This is an important item');
});


const image = document.querySelectorAll('img');
for (let i = 0; i < image.length; i++) {
if (!image[i].classList.contains('important')) {
    image[i].style.display = 'none';
}
}