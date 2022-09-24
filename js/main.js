function game(){
    const rock = document.getElementById('r');
    const paper = document.getElementById('p');
    const scissor = document.getElementById('s');

    const selection = [rock, paper, scissor]

    const userScoreVal = document.getElementById('userScoreVal');
    const compScoreVal = document.getElementById('compScoreVal');

    const resultUser = document.getElementById('result-user-stat');
    const resultComp = document.getElementById('result-comp-stat');
    const resultFinal = document.getElementById('result-final-stat');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    resultUser.appendChild(span1);
    resultComp.appendChild(span2);
    resultFinal.appendChild(span3)

    let userWin = 0;
    let compWin = 0;

    rock.addEventListener('click', ()=>{
        let userSelection = 'rock';
        span1.innerText ='rock'
        
        let possibleOutcomes = ['rock', 'paper', 'scissor'];
        let computerSelection = possibleOutcomes[Math.floor(Math.random()*3)];
        span2.innerText = computerSelection;

        if(userSelection === computerSelection){
            span3.innerText = "It's a tie"
        }else if(computerSelection === 'paper'){
            span3.innerText = "Computer Won"
            compWin = compWin + 1;
            compScoreVal.innerText = compWin;
            
        }else if(computerSelection === 'scissor'){
            span3.innerText = "You won";
            userWin = userWin + 1;
            userScoreVal.innerText = userWin;
        }
        

    })
    paper.addEventListener('click', ()=>{
        let userSelection = 'paper';
        span1.innerText = userSelection;
        
        let possibleOutcomes = ['rock', 'paper', 'scissor'];
        let computerSelection = possibleOutcomes[Math.floor(Math.random()*3)];
        span2.innerText = computerSelection;

        if(userSelection === computerSelection){
            span3.innerText = "It's a tie"
        }else if(computerSelection === 'scissor'){
            span3.innerText = "Computer Won"
            compWin = compWin + 1;
            compScoreVal.innerText = compWin;
            
        }else if(computerSelection === 'rock'){
            span3.innerText = "You won";
            userWin = userWin + 1;
            userScoreVal.innerText = userWin;
        }
    })
    scissor.addEventListener('click', ()=>{
        let userSelection = 'scissor';
        span1.innerText = userSelection;
        
        let possibleOutcomes = ['rock', 'paper', 'scissor'];
        let computerSelection = possibleOutcomes[Math.floor(Math.random()*3)];
        span2.innerText = computerSelection;

        if(userSelection === computerSelection){
            span3.innerText = "It's a tie"
        }else if(computerSelection === 'rock'){
            span3.innerText = "Computer Won"
            compWin = compWin + 1;
            compScoreVal.innerText = compWin;
            
        }else if(computerSelection === 'paper'){
            span3.innerText = "You won";
            userWin = userWin + 1;
            userScoreVal.innerText = userWin;
        }
    });

}

game()