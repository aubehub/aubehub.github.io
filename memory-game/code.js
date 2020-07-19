// cards array holds all cards
const cards = [ ...document.querySelectorAll(".container .memo-card")];

/*
...obj : trae todo lo que está en lo que vet 
a =  [123,123]
b = [123342,345345]
c = [ ...a, ...b ]
*/

let matchedCard = document.getElementsByClassName("match");
let openedCards = [];

let matchedCount = 0;

let gameStarted = false;

// toggles open and show class to display cards
function displayCard(card) {
  card.classList.toggle("show");
  card.classList.toggle("disabled");
}
//this en este caso se refiere a item (linea 38-40)

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function startGame(){
  shuffle(cards);

  let columns = [ ...document.querySelectorAll(".col-2")];

  cards.forEach(function(item, idx){
    columns[idx].appendChild(item);
    item.removeEventListener("click", cardOpen); // por si se llama más de una vez
    item.addEventListener("click", cardOpen);
  });
}

window.onload = startGame;

function cardOpen() {
  if (!gameStarted) {
    startTimer()
  }
  gameStarted = true;
  displayCard(this);
  openedCards.push(this); // "this" se refiere a memo-card
  var len = openedCards.length;

  if(len === 2){
      if(openedCards[0].getAttribute("type") === openedCards[1].getAttribute("type")){
          matched();
      } else {
          unmatched();
      }
    moveCounter()
  }
  
  if (matchedCount === 9){
    stars()
  }
};

function matched(){
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show");
  openedCards[1].classList.remove("show");
  openedCards = [];
  matchedCount++;
  if (matchedCount === 9){
    clearInterval(interval)
  }
}

//for when cards don't match
function unmatched(){
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function(){
    openedCards[0].classList.remove("show", "unmatched");
    openedCards[1].classList.remove("show", "unmatched");
    enable();
    openedCards = [];
  },1100);
}

function disable(){
  cards.forEach(function(card){
    card.classList.add('disabled');
  });
}

//enable cards and disable matched cards
function enable(){
  cards.forEach(function(card){
    card.classList.remove('disabled');
  });
  for(var i = 0; i < matchedCard.length; i++){
    matchedCard[i].classList.add("disabled");
  }
}

let moves = 0;
let counter = document.querySelector(".moves-number")

const moveCounter = () => {
  moves++;
  counter.innerHTML = ''+moves;
}

let starsNum = document.querySelector(".stars-number")
let startSimb = document.querySelector(".bi.bi-star").outerHTML
document.querySelector(".bi.bi-star").remove();

const stars = () => {
  if (moves < 25){
    starsNum.innerHTML = repeatString(startSimb, 3)
    } else if (moves > 25 && moves < 35) {
      starsNum.innerHTML = repeatString(startSimb, 2)
    } else if (moves > 35) {
      starsNum.innerHTML = repeatString(startSimb, 1)
    }
}

const repeatString = (string, number) => {
  let star = '';
  for(let i = 0; i < number; i++){
    star += string
  }
  return star;
}


let second = 0;
let minute = 0;
let timer = document.querySelector(".timer")
let interval;

const startTimer = () => {
  interval = setInterval(function(){
    timer.innerHTML = minute+" mins "+second+" secs";
    second++;
    if(second == 60){
        minute++;
        second=0;
    }
  },1000);
};

const hideCards = () => {
  cards.forEach(function(card){
    card.className = 'memo-card'
  });
}

const resetFunction = () => {
  moves = 0;  
  counter.innerHTML = ''+moves;
  matchedCount = 0;
  gameStarted = false;
  openedCards = [];

  clearInterval(interval)
  second = 0;
  minute = 0;
  document.querySelector(".timer").innerHTML = 'timer';

  //document.querySelector(".bi.bi-star").outerHTML = '';

  hideCards()
  starsNum.innerHTML = '';
  //let columns = [ ...document.querySelectorAll(".memo-card")];
  //columns.classList.remove("show");
  //  cards.classList.remove("show");
}

