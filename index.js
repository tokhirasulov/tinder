import { dogsData } from "./data.js" 
import { Dog } from "./Dog.js"
import { like, nope, welcomePage} from "./utility.js"

let dogIndex = ["Rex","Bella","Teddy"]
let isWaiting = false

const mainHtml = document.getElementById("main-html")

function welcomeIntro(){
    mainHtml.innerHTML = welcomePage()
}
welcomeIntro()

function getNextDog(){
    setTimeout(()=>{
    const dogs = new Dog(dogsData.shift())
    mainHtml.innerHTML = dogs.getDogHtml()
    render()
    },1000)
    
} 

function nextDogProfile(){
    if(isWaiting){}
    else if(dogIndex.pop()){
        setTimeout(()=>{
            getNextDog()
        },1200)
    }
    else{
        mainHtml.style.display = 'none'
    }
}

function nopeBtn(){
    mainHtml.innerHTML += nope()
    nextDogProfile()
}

function likeBtn(){
    mainHtml.innerHTML += like()
    nextDogProfile()
}

function start(){
    document.getElementById('start').addEventListener('click',getNextDog)
}
start()



function render(){
    document.getElementById("nope-btn").addEventListener("click", nopeBtn)
    document.getElementById("like-btn").addEventListener("click", likeBtn)
}
