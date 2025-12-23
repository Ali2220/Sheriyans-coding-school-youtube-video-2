// Auto-hide alert banner after 3s

let alert = document.querySelector('.alert')

setTimeout(function(){
    alert.style.display = 'none'
}, 3000)