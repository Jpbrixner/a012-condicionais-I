//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = prompt("Qual sua idade?");
let isTerminouEnsinoMedio = confirm("Você terminou o Ensino Médio?");
let isCursandoOutraFaculdade = confirm("Você está cursando faculdade?");

/* Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade; 
Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira. */

if (idade >= 18) {
  console.log("afirmacão é verdadeira");
} else console.log("afirmação não é verdadeira");

if (isTerminouEnsinoMedio) {
  console.log("afirmacão é verdadeira");
} else console.log("afirmação não é verdadeira");

if (isCursandoOutraFaculdade) {
  console.log("afirmacão é verdadeira");
} else console.log("afirmação não é verdadeira");