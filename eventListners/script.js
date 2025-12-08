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
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (e) {
//   if (e.key === " ") {
//     h1.textContent = "SPC";
//   } else {
//     h1.textContent = e.key;
//   }
// });

/* Humne input type="file" ko hide kar diya hai
aur uski jagah ek custom button bana diya —
jo dabane pe file picker open hota hai
aur phir selected file ka naam button pe show hota hai.  */
// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function () {
//   fileinp.click();
// });

// fileinp.addEventListener("change", (details) => {
//   const file = details.target.files[0];

//   if (file) {
//     btn.textContent = file.name;
//   }
// });



/* User form fill karta hai → name, age, email, profile pic URL.
Form submit hota hi →
tum JS se ek new card create karte ho jisme:
Profile image
Name
Age
Email  */

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let mainDiv = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();

//   console.log(
//     inputs[0].value,
//     inputs[1].value,
//     inputs[2].value,
//     inputs[3].value
//   );

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute(
//     "src",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxgPaTk566096PFj8DYACe0KDAqLOLYCr_Q&s"
//   );

//   let h3 = document.createElement("h3");
//   h3.textContent = "Gora ghuraya";

//   let h5 = document.createElement("h5");
//   h5.textContent = "Ghoda";

//   let p = document.createElement("p");
//   p.textContent = "Ghoda is a very good janwar";

//   card.appendChild(profile);
//   profile.appendChild(img);
//   card.append(h3, h5, p);

//   img.src = inputs[3].value;
//   h3.textContent = inputs[0].value;
//   h5.textContent = inputs[1].value;
//   p.textContent = inputs[2].value;

//   mainDiv.append(card);
// });



// Mouse Over event
/* jesi div par mouse aye ga, to color yello ho jae ga, or jese div se hte ga mouse, to color red ho jae ga. */
// let div = document.querySelector("#div")

// div.addEventListener('mouseover', function(){
//   div.style.backgroundColor = "yellow"
// })

// div.addEventListener("mouseout", function(){
//   div.style.backgroundColor = "red"
// })

/* jese hi mouse move hoga wese hi div bhi usi ke sth move hoga. */
// let div = document.querySelector('#div')

// window.addEventListener("mousemove", function(dets){
//   div.style.left = dets.clientX + "px"
//   div.style.top = dets.clientY + "px"
// })