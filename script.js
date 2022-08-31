const cardHolderNameInput=document.querySelector('.cardholder-name')
const cardHolderNameP=document.querySelector('.card-name-p')
const cardHolderNumberInput=document.querySelector('.card-number')
const cardHolderNumberP=document.querySelector('.card-number-p')
const cardHolderMonthInput=document.querySelector('.month')
const cardHolderMonthP=document.querySelector('.card-month')
const cardHolderYearInput=document.querySelector('.year')
const cardHolderYearP=document.querySelector('.card-year')
const cardHolderCvcInput=document.querySelector('.cvc')
const cardHolderCvcP=document.querySelector('.card-cvc')
const cardHolderNumberContainer=document.querySelector('.cardholder-number-container')
const form=document.querySelector('form')

const right=document.querySelector('.right')

cardHolderNameInput.addEventListener('input',addName)
cardHolderNumberInput.addEventListener('input',addNumber)
cardHolderMonthInput.addEventListener('input',AddMonth)
cardHolderYearInput.addEventListener('input',addYear)
cardHolderCvcInput.addEventListener('input',addCvc)
form.addEventListener('submit',checkInfo)
function addName(){
    cardHolderNameP.innerText=cardHolderNameInput.value.toUpperCase()
}
function addNumber(){
    let len=this.value.replace(/\s+/g,'').length
    if(len>16) return this.value= this.fix;
  if(len%4 === 0) {
    if(len === 16) {
   
      this.fix= this.value;
      
    }
    
    this.value +=' ';
    
  }
  cardHolderNumberP.innerText=this.value

}
function addYear(){
    let len=this.value.length
    if(len>2) return this.value= this.fix;
    if(len === 2) {
        this.fix= this.value;
      }
      cardHolderYearP.innerText=this.value
}
function AddMonth(){
    let len=this.value.length
    if(len>2) return this.value= this.fix;
    if(len === 2) {
        this.fix= this.value;
      }
    cardHolderMonthP.innerText=this.value
}
function addCvc(){
    let len=this.value.length
    if(len>3) return this.value= this.fix;
    if(len === 3) {
        this.fix= this.value;
      }
      cardHolderCvcP.innerText=this.value
}

function checkInfo(event){
    event.preventDefault()
    checkInputs()
 



}


function checkCardNumber(){
  const error=(cardHolderNumberInput.parentElement.querySelector('.error-card'))
  error.textContent=('Wrong format, numbers only')
  if(isNaN(Number(cardHolderNumberP.textContent.replace(/\s+/g, '')))){
    cardHolderNumberInput.style.border='solid red' 
    error.textContent="Wrong format, numbers only"
    error.style.color="red"
  }
else{
    cardHolderNumberInput.style.border=""
    error.textContent=""
    submitInfo()
}
}

function submitInfo(){
  right.innerHTML=`
  <div class="submit-form">
  <div class='img'></div>
  <h2>THANK YOU !</h2>
  <p class="submit-p">We've added your card details</p>
  <button class="continue">Continue</>
  </div>`

}
function checkInputs(){
  let score=0
  const inputs=form.querySelectorAll('input')
   for (const input of inputs) {
    const error=(input.parentElement.querySelector('.error-card'))
    if(input.value===""){
      input.style.border='solid red' 
      error.innerText=`Can't be blank`

    }
    else{
      input.style.border='' 
    error.innerText=''
      score+=1
    }
    if(score===5){
      checkCardNumber()
    }
 
   }
    
}


