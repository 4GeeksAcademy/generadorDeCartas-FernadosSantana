/* eslint-disable */
//
import "bootstrap";
import "./style.css";
import { Alert } from "bootstrap";


document.getElementsByClassName('.numero')//Numero Central
const num = document.querySelector('.numero')
document.getElementsByClassName('.superior')//Naipe Superior
const naipeSup = document.querySelector('.superior')
document.getElementsByClassName('.inferior')//Naipe Inferior
const infNaipe = document.querySelector('.inferior')

document.getElementsByClassName('.card')
const carta = document.querySelector('.card')

document.getElementById('#height')
const altura = document.querySelector('#height')
document.getElementById('#width')
const anchura = document.querySelector('#width')

document.getElementsByClassName('.reloj')
const reloj = document.querySelector('.reloj')

document.getElementsByClassName('.cronometro')
const crono = document.querySelector('.cronometro')

document.getElementsByClassName('.alert')
const alerta = document.querySelector('.alert')

document.getElementById('#eligeUnPalo')
const inputPalo = document.querySelector('#eligeUnPalo')

document.getElementsByClassName('.form-select2')
const inputNumero = document.querySelector('.form-select2')

document.getElementsByClassName('.guardar')
const save = document.querySelector('.guardar')

window.onload = function() {
    
    let intervalId = null;
    let valor = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; //En este caso es mas facil generar los arrays tal y como se reproduciran en la carta
    let numbers = (Math.floor(Math.random()*valor.length));//estoy definiendo un numero aleatoriamente
    let naipes = ["♦", "♥", "♠", "♣"];//estoy indentificando Naipes
    let naipesAleatorios = (Math.floor(Math.random()*naipes.length));
    if (naipes[naipesAleatorios]==="♦" || naipes[naipesAleatorios]=== "♥") {
        naipeSup.style.color = 'red', infNaipe.style.color = 'red', num.style.color = 'red';
    } //estoy definiendo un naipe aleatoreamente
    //Generando una carta aleatoria cada vez que se actualice la pagina
     num.textContent= (valor[numbers]);
     naipeSup.textContent = (naipes[naipesAleatorios]);
     infNaipe.textContent = (naipes[naipesAleatorios]);

     //Generando una cuenta atras
    let contador = 10;
      function iniciarCuentaRegresiva() {
        const intervalo = setInterval(() => {
          crono.textContent = `00:${contador}`;
          if (`${contador}`<10) {
          crono.textContent= `00:0${contador}`;
          }
          contador--;
          if (contador < 0) {
          newCard ()
          contador = 10;
          clearInterval(intervalId)
          }
        }, 1000);
      }
        iniciarCuentaRegresiva();

    //Button
    let button = document.querySelector('.CardGenerator')
    button.addEventListener('click', () => {
      clicar();
      clearInterval(intervalId);
    })
    button.addEventListener('mouseenter', () => {
      intervalId=setInterval(draw, 10)
    })
    button.addEventListener('mouseleave', () => {
      clearInterval(intervalId)
    })
    altura.addEventListener('input',function () {
    carta.style.height = `${altura.value}px`;
    })
    anchura.addEventListener('input',function () {
    carta.style.width = `${anchura.value}px`;
    });
    save.addEventListener ('click', () => {
      clicar();
      clearInterval(intervalId);
    })
   
    function clicar() {
    newCard();
    contador = 10;
    }
   
    function draw() {
      let valor = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; //En este caso es mas facil generar los arrays tal y como se reproduciran en la carta
      let numbers = (Math.floor(Math.random()*valor.length));//estoy definiendo un numero aleatoriamente
        for (let i = 0; i < valor.length; i++) 
        num.textContent = (valor[numbers])
        let naipes = ["♦", "♥", "♠", "♣"];//estoy indentificando Naipes
        let naipesAleatorios = (Math.floor(Math.random()*naipes.length));
        for (let j = 0; j < naipes.length; j++) {
          if (naipes[naipesAleatorios]==="♦" || naipes[naipesAleatorios]=== "♥") {
            naipeSup.style.color = 'red'; infNaipe.style.color = 'red'; num.style.color = 'red';
          } else {  naipeSup.style.color = 'black'; infNaipe.style.color = 'black'; num.style.color = 'black';
          }
          naipeSup.textContent = (naipes[naipesAleatorios])
          infNaipe.textContent = (naipes[naipesAleatorios])
        }
      
  }
};

function newCard (){
  let valor = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; //En este caso es mas facil generar los arrays tal y como se reproduciran en la carta
  let numbers = (Math.floor(Math.random()*valor.length));//estoy definiendo un numero aleatoriamente
  let naipes = ["♦", "♥", "♠", "♣"];//
  let naipesAleatorios = (Math.floor(Math.random()*naipes.length)); //estoy definiendo un naipe aleatoreamente
    if (naipes[naipesAleatorios]==="♦" || naipes[naipesAleatorios]=== "♥") {
      naipeSup.style.color = 'red'; infNaipe.style.color = 'red'; num.style.color = 'red';
    } else {  naipeSup.style.color = 'black'; infNaipe.style.color = 'black'; num.style.color = 'black';
    };
    const intervaloSuerte = setTimeout(() => {
      const input1 = `${inputPalo.value}`
      const input2 = `${inputNumero.value}`
      if (naipes[naipesAleatorios]=== input1 && valor[numbers] === input2) {
        alert("ES TU DIA DE SUERTE!!");
        alert.style.color = 'green'
        naipeSup.textContent = (naipes[naipesAleatorios])
        num.textContent = (valor[numbers])
       };
      },500)
  num.textContent= (valor[numbers])
  naipeSup.textContent = (naipes[naipesAleatorios])
  infNaipe.textContent = (naipes[naipesAleatorios])
}