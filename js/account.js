const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')



const registerSection = document.querySelector('.register')
const loginSection = document.querySelector('.login')



registerBtn.addEventListener('click',() =>{

    console.log("yes")
registerSection.classList.toggle('shown')
loginSection.classList.toggle('hidden')

})
loginBtn.addEventListener('click',() =>{

    console.log("yes")
registerSection.classList.toggle('shown')
loginSection.classList.toggle('hidden')

})