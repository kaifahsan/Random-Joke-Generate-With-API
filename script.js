let joke =document.getElementById("joke");
let btn =document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,sexist,explicit&type=single"

let getFacts =()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        joke.textContent=`${item.joke}`
    });
}
btn.addEventListener("click",getFacts);