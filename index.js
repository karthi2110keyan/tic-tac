var box = document.querySelectorAll(".box")

var turns = document.querySelector(".turns")


let value=[]
var letter="X"
box.forEach((boxes)=>{

boxes.addEventListener("click",function(){

if(boxes.textContent==="" && letter==="X"){

boxes.innerHTML=letter
letter="O"
turns.style.color="orange"
turns.innerHTML=letter
}else if(boxes.textContent==="" && letter==="O"){
  boxes.innerHTML=letter
letter="X"
turns.innerHTML=letter
turns.style.color="black"
}


value.push(boxes.textContent)
letter = value.findLast((element)=>element)

if(letter==="X"){
letter="O"
boxes.style.color="black"
}else if(letter==="O"){
 letter="X"
boxes.style.color="orange"
}



var oneX=box[0].textContent==="X" && box[1].textContent==="X" && box[2].textContent==="X" ;
var twoX=box[0].textContent==="X" && box[4].textContent==="X" && box[8].textContent==="X";
var threeX=box[2].textContent==="X" && box[4].textContent==="X" && box[6].textContent==="X";
var fourX=box[3].textContent==="X" && box[4].textContent==="X" && box[5].textContent==="X";
var fiveX=box[6].textContent==="X" && box[7].textContent==="X" && box[8].textContent==="X";
var sixX=box[0].textContent==="X" && box[3].textContent==="X" && box[6].textContent==="X";
var sevenX=box[1].textContent==="X" && box[4].textContent==="X" && box[7].textContent==="X"
var eightX=box[3].textContent==="X" && box[5].textContent==="X" && box[8].textContent==="X"



var oneO =box[0].textContent==="O" && box[1].textContent==="O" && box[2].textContent==="O";
var twoO=box[0].textContent==="O" && box[4].textContent==="O" && box[8].textContent==="O";
var threeO=box[2].textContent==="O" && box[4].textContent==="O" && box[6].textContent==="O";
var fourO=box[3].textContent==="O" && box[4].textContent==="O" && box[5].textContent==="O";
var fiveO=box[6].textContent==="O" && box[7].textContent==="O" && box[8].textContent==="O";
var sixO=box[0].textContent==="O" && box[3].textContent==="O" && box[6].textContent==="O";
var sevenO=box[1].textContent==="O" && box[4].textContent==="O" && box[7].textContent==="O"
var eightO=box[3].textContent==="O" && box[5].textContent==="O" && box[8].textContent==="O"

var inner =document.querySelector(".button-box")


if(oneX || twoX || threeX || fourX || fiveX || sixX || sevenX || eightX){ 

    inner.style.visibility="visible"
    inner.innerHTML=` <div class="result-box">
    <span style="color: orange;">Player</span>
    <span style="color: black;">x</span>
    <span style="color: orange;">Win!</span>
  </div>
  <button class="restart"></button>`

  
}else if(oneO || twoO || threeO || fourO || fiveO || sixO || sevenO || eightO){
   
        inner.style.visibility="visible"
        
    inner.innerHTML=` <div class="result-box">
    <span  transition: text 2s ease-in-out; style="color: black;">Player</span>
    <span style="color: orange;">O</span>
    <span style="color: black;">Win!</span>
  </div>
  <button class="restart"></button>`
    
    
}else if(value.length===9){
    inner.style.visibility="visible"
    inner.innerHTML=` <div class="result-box">
    <span style="color: black;">Match</span>
    <span style="color: orange;">Draw</span>
    <span style="color: white;"></span>
  </div>
  <button class="restart"></button>`
}








var button=document.querySelector("button")
button.addEventListener("click",function(){
location.reload()
})



})


})


