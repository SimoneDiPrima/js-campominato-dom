const grid = document.getElementById(`grid`)
const buttonPlay = document.getElementById(`button-header`);
const numberCounter = document.getElementById(`number-counter`)

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;

let userResult = 0;

function randomNumber(){
    let numRan;
    for(let j=1;j<=16;j++){
        numRan = Math.floor(Math.random()*100) 
      console.log(numRan);
    }
    return numRan;
}
const bombNumber = randomNumber();
 console.log(bombNumber);

    buttonPlay.addEventListener(`click`, function(){
        grid.innerHTML = ``;
        for(let i=1;i <= rowCells ;i++){ 
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        cell.addEventListener(`click`,function(){
          this.classList.add(`clicked`);
            console.log(i);
            if(cell.classList.contains(`clicked`)){
                userResult += 1;
                console.log(userResult);
                numberCounter.innerHTML = `PUNTEGGIO GIOCATORE: ${userResult}`;
            }
        })
        cell.innerText = i;
        grid.append(cell);
        }
            }
            )