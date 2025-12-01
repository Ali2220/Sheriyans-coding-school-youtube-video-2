// browser mein page par koi bhi harkat karo, event raise ho jae ga.

// kuch screen par ho aur apko reaction dena ho to aus wqt apko event handle karna ana chahiye.

// event matlb kuch action hua

// event listner ka matlb hai apne koi action ka reaction dia.

/* click karne par h1 ka color red ho jae  */
// let h1 = document.querySelector('h1')
// h1.addEventListener('click', function(){
//     h1.style.color = 'red'
// })

/* double click karne par h1 ka color yellow ho jae. */
// let h1 = document.querySelector('h1')
// h1.addEventListener("dblclick", function(){
//     h1.style.color = 'yellow'

// })

/* event ko hta rhe hain. */
// let h1 = document.querySelector('h1')
// function dblClick(){
//     h1.style.color = "yellow"
// }
// h1.addEventListener("dblclick", dblClick)
// h1.removeEventListener("dblclick", dblClick)

/* "input" event tab fire hota hai jab user type kare, delete kare, copy-paste kare → basically value change ho */
// let input = document.querySelector('input')
// input.addEventListener("input", function(e){
//     console.log(e.target.value);
// })

/* Sirf type hone wale characters ko log karo, deletion(backspace click krna) ko ignore karo. */
// let input = document.querySelector('input')
// input.addEventListener("input", function(details){
//     if(details.data !== null){
//         console.log(details.data);
//     }
// })

/* change event tab chalta hai jab apka koi input select ya textarea mein koi change hojaye */

/* Jab bhi dropdown change hota hai → h3 instantly update ho jata hai. */
// let sel = document.querySelector("select")
// let h3 = document.querySelector("h3")
// sel.addEventListener("change", function(details){
//     h3.textContent = `Device Selected: ${details.target.value}`

// })

/* Space press karne pe "SPC" show karna hai aur baaki keys ka naam normal show karna hai, */
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    h1.textContent = "SPC";
  } else {
    h1.textContent = e.key;
  }
});
