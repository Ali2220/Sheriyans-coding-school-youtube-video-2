// Dom Manipulation:
// 1. html se element select karna
// 2. text badalna
// 3. html badalna
// 4. css badalna
// 5. attribute badalna
// 6. event-listners add karna.


// let element = document.querySelector("h1")
// console.log(element);

// Text Badalna......

// sirf tag ke andr ka text badle ga..
// let h1 = document.querySelector("h1")
// h1.innerText = "Ali is a backend engineer"

// text ke sth sth element bhi badal skte hain.
// let h1 = document.querySelector("h1")
// h1.innerHTML = "<i>Acha kese hai</>"


// ATTRIBUTE MANIPULATION:
// 1. get attribute
// 2. set attribute
// 3. remove attribute

// setAttribute() → attribute ka value badalna
// let a = document.querySelector("a")
// a.setAttribute("href", "https://www.google.com")
// console.dir(a);


// let img = document.querySelector("img")
// img.setAttribute("src", "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-art-1080p-2k-4k-5k-hd-wallpapers-free-download-background-image_16123072.jpg")

// let a = document.querySelector("a")
// a.href = "https://www.google.com"
// console.log(a);


// GET ATTRIBUTE

// let a = document.querySelector("a")
// let value = a.getAttribute("href")
// console.log(value);

// REMOVE ATTRIBUTE

// let a = document.querySelector("a")
// a.removeAttribute("href")


// Dynamic Dom Manipulation

// 1. Create Element
// 2. Append Child
// 3. Remove Child
// 4. Prepend 


// let h1 = document.createElement("h1");
// h1.textContent = "Hey system design walay"

// let div = document.querySelector("div")
// div.append(h1)

// div.removeChild(h1)


// Styles Update...
// js se css badlo

// let h1 = document.querySelector("h1")
// h1.style.backgroundColor = "green"
// h1.style.textTransform = "capitalize"
// console.dir(h1);

// second way
// let h1 = document.querySelector("h1")
// h1.classList.add("ali")
// h1.classList.remove("ali")

// agr class lgi hui hai to hta dega or agr hti hui hai to lga dega.
// h1.classList.toggle("ali")