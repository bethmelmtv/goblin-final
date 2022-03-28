export function renderGoblin(goblinData) { //goblinData is a BOOGER 

//create a new div element whenever we get new goblin 
    const goblinEl = document.createElement('div');
    const goblinName = document.createElement('p');
    const goblinFace = document.createElement('p');
    const hpEl = document.createElement('p');


    goblinEl.classList.add('goblin');

}

    goblinName.textContent = goblinData.name;
    hpEl.textContent = goblinData.HP < 0 ? 0 : goblinData.HP; // not sure what this line means 


  // use a weird "ternery" to set the face
  // if the goblin lives, do a imp emoji, else do a fire emoji


    goblinFace.textContent = goblinData.HP > 0 ? '😈' : '🔥' ;

    if (goblinData.HP < 0) { 
    goblinEl.classList.add('dead');
    }

    goblinEl.append(goblinName,goblinFace,hpEl)

    return goblinEl;
}