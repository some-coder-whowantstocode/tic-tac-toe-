const block =Array.from(document.querySelectorAll(".block"))
const reset = document.querySelector(".reset")
const result = document.querySelector(".result")
const singleplayer = document.querySelector(".singleplayer")
const multiplayer = document.querySelector(".multiplayer")
const turn = document.querySelector(".turn")


let text ='x';
let winner = false;
let auto = false;
let leftover = true;
let target ;
let botturn = true;


result.innerHTML = 'turn for : '+ text
singleplayer.addEventListener("click",
function(){
    auto = false;
    change()
})

multiplayer.addEventListener("click",
function(){
    auto = true;
    result.innerHTML=''
    change()
})

block.forEach(e=>{
    e.addEventListener("click",
    function(){
        if(auto == false){
            if(e.innerHTML==' ' && winner == false ){
               
                e.innerHTML=text;
                
                for(let c of combination){
                    if(checkwin(c)){
                        result.innerHTML= text + " is the winner";
                        break;
                    }
                   }
                   text == 'x' ? text = "0" : text = 'x'
                result.innerHTML = 'turn for : '+ text

            }
        }
       else{
        if(text == 'x'){
            if(e.innerHTML===' ' && winner == false ){
                e.innerHTML=text;
                
                target = block.indexOf(e);
                for(let c of combination){
                    if(checkwin(c)){
                        result.innerHTML= text + " is the winner";
                        break;
                    }
                   }
                   console.log(text)

                   text == 'x' ? text = "0" : text = 'x'
                   console.log(text)
                   leftover=true
                  if(winner == false){
                    botturn = true;
                    bot()
                  
                  }
            }
        }
       
    }
        
    
       
       
    })
})

let arr =[]

const bot =()=>{

    block.forEach((e)=>{
        if(e.innerHTML == ' '){
            if(leftover===true){
            
                
                for(let c of combination){
                  
                    if(check(c)){
                        break;
                    }
                   }
             
            
                leftover=false
            }
       
        }
    })
    }


    const check = (indexes) => {
        indexes.every(i => {
          if (i === target && botturn == true) {
            for (let e of indexes) {
              if (block[e].innerHTML === " ") {
                block[e].innerHTML = text;
                botturn = false;
                for (let c of combination) {
                  if (checkwin(c)) {
                    result.innerHTML = text + " is the winner";
                   
                 
                  }
                }
                text === "x" ? text = "o" : text = "x";

                return false; 
              }
            }
          } else {
            return true;
          }
        });
      };


    // const automatic =()=>{
    //     let randomNumber = Math.floor(Math.random() * 9);
    //     console.log(randomNumber)
    // if(block[randomNumber].innerHTML != ' '){
    //     automatic()
    // }else{
    //     block[randomNumber].innerHTML=text;
    //     for(let c of combination){
    //         if(checkwin(c)){
    //             result.innerHTML= text + " is the winner";
    //             break;
    //         }
    //        }
    // }
    // }

  

const change=()=>{
    block.forEach(e=>{
        e.innerHTML=' '
    })
    text = 'x'
    winner= false
    result.innerHTML= 'turn for : '+text
}

reset.addEventListener("click",change)


const combination = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




const checkwin =(indexes)=>{
    let first = block[indexes[0]].innerHTML;
    if( first != ' ' && indexes.every(i=> block[i].innerHTML === first) ){
        winner = true;
        return true
    }
}