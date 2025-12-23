/* ye code 5 seconds ke bad chle ga. */
// setTimeout(function(){
//     console.log('hello');
// }, 5000)

/* setInterval code ko bar bar chlata hai, aik specific time ke hisab se */
// setInterval(function(){
//     console.log('hello');
//     console.log('buy');

// }, 3000)

/* clearTimeout  */
// let tm = setTimeout(function(){
//     console.log('hey');
// }, 3000);

// clearTimeout(tm)

/* clearInterval */
// let tm = setInterval(function(){
//     console.log('hey');
// }, 3000);

// clearInterval(tm)

/* Ye code setInterval ka use karke 10 se 1 tak ka countdown banata hai aur 0 par interval stop kar deta hai. */
// let count = 10;

// let id = setInterval(function () {
//   if (count > 0) {
//     console.log(count);
//     count--;
//   } else {
//     clearInterval(id);
//   }
// }, 1000);
