let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)

let attemptNumber = 1;
const mainFrameButtonState1 = document.querySelector(".mainFrameButtonState1")
const mainFrameButtonState2 = document.querySelector(".mainFrameButtonState2")

function toggleScreen(){
    document.querySelector(".mainFrameScreen1").classList.toggle("hide")
    document.querySelector(".mainFrameScreen2").classList.toggle("hide")
}

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) === randomNumber){
        toggleScreen()
        
        document.querySelector(".mainFrameScreen2 h1").innerText = `Parabéns! Você advinhou o número em ${attemptNumber} tentativa(s)!!!`
        
    }
    inputNumber.value= ""
    attemptNumber++
}


mainFrameButtonState1.addEventListener("click", handleTryClick)
mainFrameButtonState2.addEventListener("click", function(){
    toggleScreen()
    attemptNumber = 1
    randomNumber = Math.round(Math.random() * 10)
    console.log(randomNumber)

})