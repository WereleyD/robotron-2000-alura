/*
const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", () => { // funcao anonima - arrow function
    //dizOi();
    dizOi("Josnei"); //funcao com parametro
});

function dizOi(nome) {
    console.log(`Oi ${nome}`);
}

dizOi("Wesley");
*/

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", () => {
    braco.value = Number(braco.value) + 1;
})

subtrair.addEventListener("click", () => {
    braco.value = Number(braco.value) - 1;
})
