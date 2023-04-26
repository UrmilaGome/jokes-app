
let btn = document.querySelector('button');
async function getJoke(){
    
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json()
   let paragraph = document.querySelector('p')
   paragraph.innerText = joke.value
}
btn.addEventListener("click" , getJoke)