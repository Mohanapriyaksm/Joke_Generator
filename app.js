const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',joke)
button.addEventListener('click',joke)
async function joke(){
    const jokeapi = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    });
    const jokedata =await jokeapi.json();
   
    jokeText.innerHTML =jokedata.joke;
}