const ratingNumber = document.querySelectorAll('.option')
const ratingSpan = document.querySelectorAll('.rating-span')
const submit = document.querySelector('.submit')

const displayRates = document.querySelector('.display-rateN')
const thanksCards = document.querySelector('.thanks-section')
const mainCard = document.querySelector('.rating-section')
const numberFromLocal = localStorage.getItem('number') 



submit.addEventListener('click',()=>{
    thanksCards.style.display = "block"
})

ratingNumber.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        displayRates.innerText = rate.innerText
    })
})