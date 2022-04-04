// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';


const defeatedNumberEl = document.querySelector('#defeated-number'); //
const hitPointStatusEl = document.querySelector('#hit-point-status');//
const form = document.querySelector('form');//
const goblinListEl = document.querySelector('.goblins') ;//
// const challengeButtonEl = document.querySelector('.challenge-goblin-button');


// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;

//create an object that contains the info of different goblins, not sure why its within an array
let goblins = [
    { name: 'Terry', hp: 10 },
    { name: 'Bob', hp: 5 },
];

// - New goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
      //   - User has supplied a name and submitted the form
    const data = new FormData(form);


     //Make a new goblin object with that user input
    //data.get is a function
    //data.get is referencing input class in html
    const newGoblin = {
        name: data.get('challenge-goblin'),
        hp: 3,
    };

    //   - Add the object from the form the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});


function displayGoblins() {

    //  clear out the list DOM
    goblinListEl.textContent = '';
    // for each goblin, render it and append it to to dom element 
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        // console.log(goblinEl);
    
        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
            
            // if you hit the goblin, their hp goes down 
                if (Math.random() < .50) {
                    alert('You hit ' + goblin.name);
                    goblin.hp--;
                } else {
                    alert('you tried to hit ' + goblin.name + ' but missed!');
                }

                if (Math.random() > .50) {
                    alert(goblin.name + ' hit you!');
                    playerHP--;
                } else { 
                    alert(goblin.name + ' tried to hit you but missed!');
                }

                if (goblin.hp === 0) {
                    alert(goblin.name + ' is DEAD!');
                    defeatedGoblinsCount++;
                }


                if (playerHP === 0) {
                    alert('YOU IS DEAD! GAME OVER');
                }
    
                hitPointStatusEl.textContent = playerHP;
                defeatedNumberEl.textContent = defeatedGoblinsCount;

                displayGoblins();
            });
        }

        goblinListEl.append(goblinEl);

    }

}
    
displayGoblins(); // to be called recursively 







//Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, 
//"What happens when" for each of these events. Does any state change? Does any DOM update?



    // //
    // for (let goblin of goblins) {
    //     renderGoblin(goblin)

//create an event listener 




//-user click submit form

//render and append input











































// import { renderGoblin } from './render-utlis.js';
// let defeatedNumberEl = document.getElementById('defeated-number');
// let adventurerHitPointsEl = document.getElementById('adventurer-hit-points');
// //grabbing span eleement of defeater number
// //grabing span element of HP
// const form = document.querySelector('form');
// //grabbing form
// let goblinListEl = document.querySelector('.goblins');
// //grabbing blank div of goblins 


// // let goblinName = document.getElementById('goblin-name');
// // let challengeButton = document.getElementById('challenge-button');
// // let listofGoblins = document.getElementById('list-of-goblins');


//  // let state 
// let defeatedGoblinsCount = 0;
// let playerHitPoints = 10;

// //why do we neeed to have goblins in state? 

// let goblins = [
//     { name: 'terry', hp: 2 },
//     { name: 'bob', hp: 3 },
// ];

//   // set event listeners 
//   // get user input
//   // use user input to update state 
//   // update DOM to reflect the new state



// //this event listener takes an input and pushes it to an array
// //and assigns it a random hp

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data = new FormData(form);
//     //this line holds the info inputted in form 

//     //it will now need to get this new data

  
//     //   - Make a new goblin object with that user input
//     const newGoblin = {
//         name: data.get('goblin-name'),
//         //Make a new goblin object with that user input
//         //data.get is a function
//         //data.get is referencing input class in html
//       //in the line above, we're referencing the data variable we just made in line 43
//         hp: Math.ceil(Math.random() * 5),
//       // in this line, we're assigning hp to a random hit points 
//     };

//     goblins.push(newGoblin);
//     //pushing new goblin into an array

//     displayGoblins();
    
// });


// function displayGoblins() {
//   //we're going to clear out the Dom 
//     goblinListEl.textContent = '';
//     //emptying out the dom so that function dont make replicas 
//     //goblinListEl = list of goblins already made 

//     for (let goblin of goblins) {
//         const goblinEl = renderGoblin(goblin);
//       //for each goblin object in goblins array, we will apply the 
//       //render function, which will create a new div for it 
//         if (goblin.hp > 0) {
//             goblinListEl.addEventListener('click', () => {
//             //we use goblinListEl because that's the element were clicking on
//                 if (Math.random() < .33) {
//                     goblin.hp --;
//             //we hit the goblin 
//                     alert('you hit' + goblin.name);
//                 } else { 
//                     alert('you tried to hit' + goblin.name + 'but missed!');
//                 }
//                 if (Math.random() > .33) {
//               //if random # < .33, then you got hit, decrease your HP points
//                     alert(goblin.name + 'hit you!');
//                     playerHitPoints--;
//                 } else {
//                     alert(goblin.name + 'tried to hit you but missed!');
//                 }

//                 if (goblin.hp === 0) {
//                     defeatedGoblinsCount++;
//                 }

//                 if (adventurerHitPoints === 0);
//                 alert('Game Over!!!');
        
          
//                 adventurerHitPointsEl.textContent = playerHitPoints;
//                 defeatedNumberEl.textContent = defeatedGoblinsCount;

//                 displayGoblins();
          
//             });

//         }
//         goblinListEl.append(goblinEl);

//     }
// }


// displayGoblins();

    

    
        





          
  

//     //takes new object
//     //renders  it 
//     // appends it to list of goblins 

//   //another event listener that says
//   //if i click on a goblin, and i hit it 
//   //my hp goes up

//   //if i click on a goblin, and i miss,
//   //my hp goes down by one

//   //// if a goblin hits me, their hp goes up by one
//   // if a goblin doesnt hit me, their hp goes down by one 


// //update the numbers of hp points of me and goblin 