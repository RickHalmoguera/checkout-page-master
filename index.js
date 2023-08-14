const minusBtnOne = document.getElementById("minusBtnOne")
const quantityOne = document.getElementById("quantityOne")
const addBtnOne= document.getElementById("addBtnOne")
const minusBtnTwo = document.getElementById("minusBtnTwo")
const quantityTwo = document.getElementById("quantityTwo")
const addBtnTwo = document.getElementById("addBtnTwo")
const totalDisplay = document.getElementById("total")

const priceOne = 54.99
const priceTwo = 74.99
let shipping = 19
let countOne = 1
let countTwo = 1

let total = 148.98

const updateTotal = () =>{
   total = (priceOne * countOne) + (priceTwo * countTwo) + shipping
    totalDisplay.innerText = "$"+total 
}

const minusOne = () =>{
    if(countOne === 0){
        quantityOne.innerText = 0
    }else{
        countOne--
        quantityOne.innerText = countOne
    }
    updateTotal()
}

const addOne = () => {
    countOne++
    quantityOne.innerText = countOne
    
    updateTotal()
}

minusBtnOne.addEventListener("click", minusOne )
addBtnOne.addEventListener("click",addOne)

const minusTwo = () =>{
    if(countTwo === 0){
        quantityTwo.innerText = 0
    }else{
        countTwo--
        quantityTwo.innerText = countTwo
    }
    updateTotal()
}

const addTwo = () => {
    countTwo++
    quantityTwo.innerText = countTwo 
    
    updateTotal()
}



minusBtnTwo.addEventListener("click", minusTwo )
addBtnTwo.addEventListener("click",addTwo)