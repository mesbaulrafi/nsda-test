let dates = document.getElementById("date");

setInterval(() => {
  let date = new Date();
  dates.innerHTML = date.toLocaleString("en");
}, 1000);

// let name = document.getElementById('nameInpute');
// let email = document.getElementById('emailInpute');
// let password = document.getElementById('passwordInpute');
// let address = document.getElementById('addressInpute');
// let textaria = document.getElementById('textaria');
// let subBtn = document.getElementById('subBtn');

// subBtn.addEventListener('click',()=>{
//     if (name.value === "") {
//         alert('Enter Your Name')
//     }
//     else if (email.value === "") {
//         alert('Enter Your Email')
//     }
//     else if (password.value === "") {
//         alert('Enter Your Password')
//     }
//     else if (address.value === "") {
//         alert('Enter Your Address')
//     }
//     else if (textaria.value === "") {
//         alert('Enter Your Text')
//     }
//     else{
//         alert('Susscess')
//     }
// })



 let nameInpute = document.getElementById('nameInpute');
 let emailInpute = document.getElementById('emailInpute');
 let passwordInpute = document.getElementById('passwordInpute');
 let addressInpute = document.getElementById('addressInpute');
 let textariaInpute = document.getElementById('textariaInpute');

let names = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let address = document.getElementById("address");
let textaria = document.getElementById("textaria");
let subBtn = document.getElementById("subBtn");

subBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    names.setAttribute('hidden',true)
    email.setAttribute('hidden',true)
    password.setAttribute('hidden',true)
    address.setAttribute('hidden',true)
    textaria.setAttribute('hidden',true)

    if (nameInpute.value === "") {
        names.removeAttribute('hidden')
    }
    else if (emailInpute.value === "") {
        email.removeAttribute('hidden')
    }
    else if (passwordInpute.value === "") {
        password.removeAttribute('hidden')
    }
    else if (addressInpute.value === "") {
        address.removeAttribute('hidden')
    }
    else if (textariaInpute.value === "") {
        textaria.removeAttribute('hidden')
    }
    else{
        alert('Submit')
    }
})