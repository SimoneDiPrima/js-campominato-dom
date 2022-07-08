const grid = document.getElementById(`grid`)
const buttonPlay = document.getElementById(`button-header`);
const numberCounter = document.getElementById(`number-counter`)
const finalResult = document.getElementById(`final-result`)
let buttonRestart = document.querySelector(`button-restart`);

const rows = 10;
const cells = 10;
const rowCells = rows * cells ;
const winPoints = 84;
const stopPoints = document.createElement(`div`)

let userResult = 0;


let randomNum =[ ];

function randomNumber(min,max,blacklist){
    let numRan;
    for(let j=1;j<=16;j++){
        do{

            numRan = Math.floor((Math.random() * 100) + 1);
            console.log(numRan);
        }
        while(blacklist.includes(numRan)){
            randomNum.push(numRan);
        }
    }
    return numRan;
}
const bombNumber = randomNumber(1,100,randomNum);

let isgameOver = false;


    buttonPlay.addEventListener(`click`, function(){
        console.log(bombNumber)
        console.log(randomNum);
        

        grid.innerHTML =``;
        for(let i=1;i <= rowCells ;i++){ 
            // creo l elemento div
        const cell = document.createElement(`div`);
        cell.className = `cell`;
        cell.innerText = i;
        


        for(let i=1; i<= rowCells;i++)
        {


            cell.addEventListener(`click`,function(){
                if(isgameOver)return;
                 isgameOver = gameOver(this,bombNumber);
                console.log(gameOver);
                
                
                if(this.classList.contains(`clicked`)) return;
                this.classList.add(`clicked`);
            console.log(this.innerText);
          if(!isgameOver) userResult++;
            
            console.log(userResult);
            numberCounter.innerHTML = `il punteggio del giocatore e: ${userResult}`;
            }
            )

        }
grid.appendChild(cell)

    }
})



function gameOver(cell,bombNumber){
    
    const bomb = (parseInt(cell.innerText))
   
    if(randomNum.includes(bomb)){
        cell.classList.add(`danger`);
       finalResult.innerHTML = messageGameover(userResult,false);
    // setTimeout(()=>{
    //     grid.innerHTML =``;
    //     finalResult.innerHTML = ``;
    //     numberCounter.innerHTML = ``;
    //    },1000)
      

        console.log(`peccato hai perso per colpa di una bomba!`)
        return true;
    }
    else{
        cell.classList.add(`safe`);
       
        if(userResult+1 === winPoints)
        {  
            finalResult.innerHTML = messageGameover(winPoints,true);
            console.log(`bravo hai vinto!!`)
            return true;
        }

        return false;
        
    }

}

function messageGameover(userResult,hasWon){
    
    let message = ``;
    if(hasWon){
        message = `complimenti hai vinto il tuo punteggio e ${userResult}`
        isgameOver = true;
    }
    else{
        message = `<strong>hai perso il tuo punteggio e: ${userResult}</strong>`
        isgameOver = true;
    }
    return message;
    
}