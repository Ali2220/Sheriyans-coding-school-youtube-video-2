// 1. What is the difference between element node and a text node.

// Ans:
// 🟦 Element Node:
// Ye basically HTML tags hote hain. Examples: <div>, <p>, <h1> etc. Inka kaam: Structure banana, attributes rakhna (id, class), andar content rakhna, styling/control allow karna hota hai.

// 🟩 Text Node:
// Ye actual text content hota hai jo tags ke andar likha hota hai. Example: <p>Hello World</p>, Hello World → text node.

// 2. What does getElementsByClassName return ? Is it an array ?

// Ans:
// Ye return karta hai: HTMLCollection. HTMLCollection ≠ Array. Ye array nahi hota, lekin ye array ki trh hota hai.

// 3. Select the heading of a page by ID and change its text to "Welcome to Sheriyans!"

// let heading = document.querySelector("#heading")
// heading.textContent = "Welcome to Sheriyans!"

// 4. Select all <li> elements and print their text using a loop

// let lis = document.querySelectorAll('li')
// lis.forEach(function(li){
//     console.log(li.textContent);

// })

// 5. What is the difference between innerText, textContent and innerHTML

// Ans:
// textContent → “jo likha hai, sab de do, hidden bhi.”
// innerText → “jo user ko dikh raha, sirf woh de.”
// innerHTML → “poora HTML de do bhai, tags samet.”

// 6. Select a paragraph and replace its content with: {<b> Updated </b> by JavaScript}

// const p = document.querySelector('p')
// p.innerHTML = "<b> Updated </b> by JavaScript"

// 7. How do you get an src of an image using js.

// const img = document.querySelector('img')
// console.log(img.getAttribute("src"));

// 8. Select a link and update its href to point to https://sheryians.com

// let a = document.querySelector('a')
// a.setAttribute("href", "https://sheryians.com")

// 9. Add a title attribute to a div dynamically

// let div = document.querySelector("div")
// div.setAttribute("title", "This is a div")

// 10. Remove the disabled attribute from a button.

// let btn = document.querySelector('button')
// btn.removeAttribute('disabled')

// 11. Whats the difference between appendChild() and prepend.

// appendChild() → last me add, 1 element
// prepend() → first me add, multiple elements/text bhi possible

// 12. Can you remove an element using removeChild() ?

// let div = document.querySelector("div")
// let p = document.querySelector("p")
// div.removeChild(p)

// 13. Create a new list item <li> el </li> and add it to the end of a <ul>

// let ul = document.querySelector("ul")
// let newItem = document.createElement('li')
// newItem.textContent = "el"
// ul.append(newItem)

// 14. Create a new image element with a placeholder, source and add it at the top of a div.

// let div = document.querySelector("div")
// let img = document.createElement("img")
// img.setAttribute("placeholder", "image")
// img.setAttribute("src", "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg")
// div.prepend(img)

// 15. Select the first item in a list and delete it from the DOM.

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// ul.removeChild(li)

// 16. Add a highlight class to every even item in a list

// let lis = document.querySelectorAll("li");
// lis.forEach(function (li, idx) {
//   if ((idx + 1) % 2 === 0) {
//     li.classList.add("highlight");
//   }
// });
