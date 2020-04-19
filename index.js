let left = document.getElementById('left');
let right = document.getElementById('right');
const images = ["resources/codePhoto.jpg", "resources/designPhoto.jpg", "resources/deskPhoto.jpg", "resources/developerPhoto.jpg"];
let img = document.querySelector('img');
img.src = images[0];
let counter = 0;
left.addEventListener('click', sub);
right.addEventListener('click', add);

function sub () {
    counter--
    if (counter < 0){
        counter = images.length - 1;
    }
    img.src = images[counter]
}
function add () {
    counter++;
    if (counter > images.length - 1){
        counter = 0;
    }
    img.src = images[counter]
    
}
