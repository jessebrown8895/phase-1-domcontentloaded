

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);  

let btn = document.getElementById('text')

btn.addEventListener('click', (e) =>){
    console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")
}
