// const password = prompt('enter your password');

// if (password.length >= 6 && password.indexOf(" ")===-1) {
//     console.log("Good job");
// } else {
//     console.log('incorrect format')
// }

// const age= 10;
// if (age>0 && age < 5 || age >=65) {
//     console.log('free');
// } else if (age >=5 && age > 10) {
//     console.log("$20");
// } else {
//     console.log("invalid age");
// }

// const day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
// }

// let days = ["red","orange","yellow","hello"];
// days[0]= "eivel";
// console.log(days);
// days[10]="123";
// console.log(days);
// console.log(days.length);
// days[days.length] = "go away";
// console.log(days);

// for (let i = 1 ; i<21; i+=2) {
//     console.log(i);
// }

// for(let i = 100; i>=0; i-=10) {
//     console.log(i);
// }

// let count = 0;
// while (count<10) {
//     console.log(count);
//     count++
// }

// const SECRET = "BabyHipo";
// let guess= prompt("enter the secret code");
// while (guess !== SECRET) {
//     guess= prompt("enter the secret code");
// }
// alert("You are right");

// let userEnter= [];
// let endTheLoop = "stop";
// let talk = prompt("enter the word");
// while (talk !== endTheLoop) {
//     talk = prompt("enter the secret code agin");
//     userEnter.push(talk);
// }
// alert("Your are right");

// let maximum = parseInt(prompt("enter a max number"));

// while (!maximum) {
//     maximum = parseInt(prompt("enter a max number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) +1;

// let guess = parseInt(prompt("enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess =="q") break;
//     attempts ++;
//     if (guess > targetNum) {
//         guess = prompt("Too high: enter again");
//     } else {
//         guess= prompt("Too low! enter agin");
//     }

// }

// alert(`you got it, ${attempts} guesses`);

// const subreddits = ['cringe','books','hello','hek yeah','chikens'];
// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of "hello world") {
//     console.log(char);
// }

// {const testScores = {
//     keenan: 90,
//     damon:67,
//     kim:89,
//     shawn:91,
//     marlon:72,
//     dwayne:77,
//     nadia:83,
//     elvira:97,
//     diedre:81,
//     vonnie:60
// }

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// let total = [];
// for (let score of Object.keys(testScores)) {
//     total.push(score);
// }
// alert(total);}

// const todoList = [];
// let userInput= prompt("Enter what you want to do? ");
// let count = 0;

// while ( userInput !== "quit" && userInput !== "q") {
//     userInput= prompt("Enter what you want to do? ");
//     userInput.trim();
//     if (userInput == "new") {
//         userInput= prompt("Enter what you want add to list? ");
//         userInput.trim();
//         todoList.push(userInput);
//         console.log(`you add ${userInput} to list`);
//     } else if (userInput =="list") {
//         console.log("********");
//         for (let list of todoList) {
//             count += 1;
//             console.log(`${count} :  ${list}`);
//         }
//         count = 0;
//         console.log("********");
//     } else if ( userInput == "delete") {
//         userInput= parseInt(prompt("Enter what you want delete? "));
//         userInput.trim();
//         console.log(`you remove ${todoList[userInput-1]}`);
//         todoList.splice(userInput-1,1);
//     }
// }
// console.log("okay, you quit! ");

// const myMath = {
//     square(num) {
//         return num*num;
//     },
//     cube: function(num) {
//         return num**3;
//     }
// }


// const numbers= [1,3,4,2,13,32,13,2,131,23,2];
// numbers.forEach(function(el) {
//     console.log(el);
// })


// const numbers= [1,3,4,2,13,32,13,2,131,23,2];
// let total=0;
// let numSum = numbers.map(function(num){
//     total +=num;
//     return total;
// });

// let greet= (num) => {
//     return `Hey ${num}!`
// }

// const rollDie = () => (
//     Math.floor(Math.random()*10);
// )

// const rollDie1 =() => Math.floor(Math.random()*10)


// console.log('hello')
// setTimeout(() => {
//     console.log('are you still there?')
// },3000)
// console.log('goodbye');

// const id = setInterval(() =>{
// console.log(Math.random());
// },1000);

// clearInterval(id);

// const numbers= [1,3,4,2,13,32,13,2,131,23,2];

// let hello = numbers.filter(n => {
//     return n>23
// });

// const numbers= [1,3,4,2,13,32,13,2,131,23,2];
// let isThere = numbers.every(num => {
//     return num > 10;
// });

// const numbers= [1,3,4,2,13,32,13,2,131,23,2];
// let isThere = numbers.every(num => {
//     return num % 2 === 0;
// });


// function allEvens (num) {
//     let isNumEven = num.every(n => {
//         return n % 2 === 0;
//     })
//     return isNumEven;
// }

// let total = [9.99,1.50,32.10,32.12];

// const sum = total.reduce((total,price) => {
//     return total+ price;
// })

// const min = total.reduce((min , currentValue) => {
//     if (currentValue > min) {
//         return min;
//     } 
//     return currentValue;
// })

// const even =[2,4,6,8];
// const print = even.reduce((sum,num) => sum + num , 100)

// const person = {
//     firstName : 'vigo',
//     lastName: 'hello',
//     fullName :  () => {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(() => {
//             console.log(this.fullname())
//         },3000)
//     }
// }

// defult params...
// const rollDie = ((numSides=6) => {
//     return Math.floor(Math.random() * numSides) +1
// })

//spread function...(spread all)
// const num = [12,32,132,2,31,321,32,32,36,34,2]
// console.log(Math.max(...num));
// console.log(...num);
// console.log(Math.min(...num));
// console.log(..."heleolse")

// //spread Array literals...
// const cats = ['Blue','Scout','Rocket'];
// const dogs = ['Rusty' ,'Wyatt'];
// const allpets = [...dogs, ...cats];

//spread object literals...
// const feline = {legs:4 , family:"Felidae"};
// const k9 = {leg:3,family:"Canine"};
// const allpets = {...feline,...k9};

//rest ...(collecting in )
// function sum(...nums) {
//     return nums.reduce((turn,el) => turn + el)
// }

//Destructuring array...
// const raceResults = [232,424,2423,2131,4342];
// const highScore = raceResults[0];
// const [gold,silvar,books,...everyOneElse] = raceResults;

//Destructuring object...
// const user = {
//     email: 'harvey@gamil.com',
//     password: 'scdfhel',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1999
// }
// const {email,firstName,lastName} =user;
// const {born:birthYear} = user;
// const {died = 'N/A'} = user ;

//Distrucuring params...

//DOM model...
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages)
// {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }

// let text1 = document.querySelectorAll('li');
// for (let i = 0 ; i<6; i++) {
//     text1[i].classList.toggle("highlight");
//     console.log(text1[i]);
// }

// const baseUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
// const div = document.querySelector('#container');

// for (let i = 1 ; i<1009; i++) {
//     const pokemon = document.createElement('div');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseUrl}${i}.png`;
//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }

// let button = document.querySelector('#b1')
// button.addEventListener('focus', function() {
//     console.log('click');
// }); 

// const button = document.querySelector('button')
// button.addEventListener('click', function() {
//     document.body.style.backgroundColor = makerandomColor();
//     const h1 = document.querySelector('#randomColor');
//     h1.innerText = makerandomColor();
// })

// const makerandomColor = () => {
//     const r = Math.floor(Math.random() *256);
//     const g = Math.floor(Math.random() *256);
//     const b = Math.floor(Math.random() *256);
//     return `rgb(${r},${g},${b})`
// }

// document.querySelector('button').addEventListener('click',function(evet) {
//     alert(evet)
// });

// const input = document.querySelector('input')
// input.addEventListener("keydown" , function (q) {
//     console.log(q.code);
// }) 

// const form = document.querySelector('.form');
// const input = document.querySelector('.form-text');
// const list = document.querySelector('#cats');

// form.addEventListener('submit',function(e) {
//     e.preventDefault();
//     const catName = input.value;
//     const newLi = document.createElement('li');
//     newLi.innerText= catName;
//     console.log(newLi);
//     list.append(newLi);
//     input.value="";
// })

// const form = document.querySelector('.form');
// const userName = document.querySelector('.username');
// const comment = document.querySelector('.comment');
// const list=document.querySelector("#cats");

// form.addEventListener('submit' , function(e) {
//     e.preventDefault();
//     const inputUserName = userName.value;
//     const inputComment = comment.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = `${inputUserName} : ${inputComment}`;
//     list.append(newLi);
//     userName.value="";
//     comment.value="";
// });

// const form = document.querySelector('form');
// const product = document.querySelector('#product');
// const qty = document.querySelector('#qty');
// const list=document.querySelector("#list");

// form.addEventListener('submit' , function(e) {
//     e.preventDefault();
//     const inputproduct = product.value;
//     const inputqty = qty.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = `${inputqty}  ${inputproduct}`;
//     list.appendChild(newLi);
//     product.value="";
//     qty.value="";
//     console.log(newLi);
// }); 

// const input = document.querySelector('#username');
// const h1 = document.querySelector('h1');

// input.addEventListener("input", function() {
//     const userInput = input.value;
    
//     h1.innerText = `Welcome, ${userInput}`;
    
// })

// input.addEventListener('keydown',function() {
//     console.dir(input);
// })

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
})

if (playerH1 == dropDown.value) {
    playerH1.style.color = 'green';
    playerH2.style.color = 'red';
}

if (playerH2 == dropDown.value) {
    playerH2.style.color = 'green';
    playerH1.style.color = 'red';
}