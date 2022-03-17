export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    //created all elements for a new goblin div 

    goblinEl.classList.add('goblins');

    //we need to add the purple emoji 
    //add the hit points 

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp;
// update the name and hp points 

    faceEl.textContent = goblinData.hp > 0 ? '👿' : '💥';
    // if goblinData is greater than 0, show purple emoji, if else show the kaboom emoji

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');

        goblinEl.append(faceEl, faceEl, hpEl);

        return goblinEl; 
    }
 
} 
