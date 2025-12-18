/* agr nam ki length 2 kr brabr ya 2 se choti hogi to #hide wala div display ho jae ga jis mai likha hai (your name should be greater the 2 characters)  */
// let nam = document.querySelector('#name')
// let form = document.querySelector('form')
// form.addEventListener('submit', function(dets){
//     dets.preventDefault()

//     if(nam.value.length <= 2){
//         document.querySelector('#hide').style.display = 'initial'
//     } else{
//         document.querySelector('#hide').style.display = 'none'

//     }
// })

/* Using regex (regular expression in forms) */

// let nam = document.querySelector('#name')
// let form = document.querySelector('form')

// form.addEventListener('submit', function(dets){
//     dets.preventDefault()
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     let ans = emailRegex.test('ali@gmail.com')
//     console.log(ans);

// })


/* Email, Password Validation */
/* Code form submit par email & password validate karta hai, errors show/hide karta hai, aur sab sahi ho to success message dikhata hai. */
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')
let msg = document.querySelector('p')

form.addEventListener('submit', function(dets){
    dets.preventDefault()

    // reset message every submit
    msg.textContent = ''
    msg.style.color = ''

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,12}$/;

    let isValid = true

    if(!emailRegex.test(email.value)){
        document.querySelector('#email-error').textContent = 'Email is incorrect'
        document.querySelector('#email-error').style.display = 'initial'
        isValid = false
    } else {
        document.querySelector('#email-error').style.display = 'none'
    }

    if(!passwordRegex.test(password.value)){
        document.querySelector('#pass-error').textContent = 'Password is incorrect'
        document.querySelector('#pass-error').style.display = 'initial'
        isValid = false
    } else {
        document.querySelector('#pass-error').style.display = 'none'
    }

    if(isValid){
        msg.textContent = 'Everything is correct'
        msg.style.color = 'green'
    }
})
