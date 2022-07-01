const grid = document.getElementById(`grid`)
const buttonPlay = document.getElementById(`button-header`);
const numberCounter = document.getElementById(`number-counter`)

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;

let userResult = 0;


    buttonPlay.addEventListener(`click`, function(){
        grid.innerHTML = ``;
        for(let i=1;i <= rowCells ;i++){ 
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        cell.addEventListener(`click`,function(){
            this.classList.toggle(`clicked`);
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