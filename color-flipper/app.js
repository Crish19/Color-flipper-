const colors = ["green", "red", 
"rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const ramdomNumber = getRamdomNumber(); 
    document.body.style.backgroundColor = colors[ramdomNumber];
    color.textContent = colors[ramdomNumber];
})

function getRamdomNumber() {
    return Math.floor(Math.random() * colors.length);
}
