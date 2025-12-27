/* localStorage se last saved theme ("dark" ya "light") le raha hai

Aur body pe class apply kar raha hai, taake page load hone ke baad same theme dikhe */

let theme = localStorage.getItem("theme");
document.body.classList.add(theme);

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
