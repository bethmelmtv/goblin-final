import { renderGoblin } from './render-utlis.js';


let defeatedNumber = document.getElementById('defeated-number');
//grabbing span eleement of defeater number
let adventurerHitPoints = document.getElementById('adventurer-hit-points');
//grabing span element of HP

const form = document.querySelector('form');
//grabbing form

let goblinListEl = document.querySelector('list-of-goblins');
//grabbing blank div of goblins 


// let goblinName = document.getElementById('goblin-name');
// let challengeButton = document.getElementById('challenge-button');
// let listofGoblins = document.getElementById('list-of-goblins');


 // let state 
let defeatedGoblinsCount = 0;
let playerHitPoints = 0;
//why do we neeed to have goblins in state? 
let goblins = [
    { name: 'terry', hp: 2 },
    { name: 'bob', hp: 3 },
];

  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const data = new FormData(form);

    

    
});