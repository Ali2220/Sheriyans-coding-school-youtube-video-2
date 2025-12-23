// Ye code har 30 milliseconds (very fast ) mein progress bar ki width 1% barhata hai, jisse 3 seconds mein 0% se 100% tak download animation complete hoti hai

let count = 0;
let progress = document.querySelector(".progress");
let p = document.querySelector("#p");
let h3 = document.querySelector('h3')

setInterval(function () {
  if (count < 100) {
    count++;
    progress.style.width = `${count}%`;
    p.textContent = `${count}%`;
  }
  else{
    h3.textContent = 'Download Complete ✅'
  }
}, 30);
