

const playerH1 = document.querySelector('#player1'); 
const playerH2 = document.querySelector('#player2');
const playerButton1 = document.querySelector('#players1');
const playerButton2 = document.querySelector('#players2');
const restButton = document.querySelector('#rest');
const dropDown = document.querySelector(".dropdown");

dropDown.addEventListener('input' , function () {
    const selectValue = dropDown.value;

})

dropDown.addEventListener('change' , function() {
    dropDown.disabled = true;
})

let count1 = 0;
let total1= 0;
playerButton1.addEventListener('click' , function () {
    if (count1 < dropDown.value) {
        total1 += 1;
        playerH1.innerText= total1;
        count1 ++
    }
})

let count2 = 0;
let total2 = 0;
playerButton2.addEventListener('click' , function () {
    if (count2 < dropDown.value) {
        total2 += 1;
        playerH2.innerText= total2;
        count2 ++
    } 
})  

restButton.addEventListener('click',function() {
    playerH1.innerText = 0;
    playerH2.innerText = 0;
    dropDown.disabled = false;
    dropDown.value = 2;
    count1 = 0;
    count2 = 0;
    total1 = 0;
    total2 = 0;
    playerButton1.disabled=false;
    playerButton2.disabled=false;
    playerH1.classList.remove('text-success');
    playerH2.classList.remove('text-success');
    playerH1.classList.remove('text-denger');
    playerH2.classList.remove('text-denger');
});

playerButton1.addEventListener('click',function() {
    if (playerH1.textContent === dropDown.value) {
        playerH1.classList.add('text-success');
        playerH2.classList.add('text-denger');
        playerButton1.disabled=true;
        playerButton2.disabled=true;
    }
});

playerButton2.addEventListener('click',function() {
    if (playerH2.textContent === dropDown.value) {
        playerH2.classList.add('text-success');
        playerH1.classList.add('text-denger');
        playerButton1.disabled=true;
        playerButton2.disabled=true;
    }
});
