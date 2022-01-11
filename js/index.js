// Iteration 1: Names and Input

let hacker1 = 'Alexandre';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Osiris';
console.log("The driver's name is " + hacker2);

let space = ' '


// Iteration 2: Conditionals

let cont1 = hacker1.length
let cont2 = hacker2.length

let soma = cont2 + cont1;

if(cont1 > cont2){
  console.log('The driver has the longest name, it has ' + cont1 + ' characters')
}else if(cont1 == cont2){
  console.log('Wow, you both have equally long names, ' + soma + ' characters!');
}else{
    console.log('It seems that the navigator has the longest name, it has ' + cont2 + 'characters.')
};

// Iteration 3: Loops

const spaceChar = hacker1.split("").join(" ").toUpperCase();
const reverse = hacker1.split("").reverse();
for(valor of spaceChar){
    console.log(valor);
};

for (valor of reverse){
    console.log(valor);
}

if (hacker1 < hacker2){
    console.log(hacker1)
}else if(hacker2 == hacker1){
    console.log('What?! You both have the same name?');
}else{
    console.log(hacker2);
}


