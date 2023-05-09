let turn = "x"
let next = document.querySelector("#info")
const reset = document.querySelector("#reset")
let gameover = false;

const changeturn =()=>{
  
    return turn =  turn== "x"?"0": "x"
}

const win = () =>{
    let b =Array.from(document.getElementsByClassName("boxtext"))
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((b[e[0]].innerText===b[e[1]].innerText)&&(b[e[1]].innerText===b[e[2]].innerText)&&(b[e[0]].innerText!=='')){
            next.innerText = b[e[0]].innerText+" is winner"
            gameover=true
        }
    })
}


let boxes =Array.from(document.querySelectorAll(".box"))

boxes.forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click",
     function(){
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            changeturn();
            // console.log(gameover)

            win();
            if(!gameover){
                next.innerText= "turn for "+turn
            }
           
        }
        
    })
})



reset.addEventListener(
    "click",
    function() {
        let boxtexts = Array.from(document.querySelectorAll(".boxtext"))
        boxtexts.forEach(e => {
            e.innerText=''
        })
        turn="x";
        gameover=false;
        next.innerText="turn for x"
    }
)


