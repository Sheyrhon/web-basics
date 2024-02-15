// funtion that takes two parameters and returns their sum
function addTwoNumbers(a,b){
    return a+b;


}
console.log(addTwoNumbers(5,6))
console.log(addTwoNumbers(10,6))

// function that randomly describes inputted name
const names=['Sheyrhon', 'Mike','Bryan', 'Adalia','Leonie','Eugenie','Ashley']
function userName(){
    const yourName =prompt('What is your name? ');
    let randomIndex = Math.floor(Math.random()*names.length);
    yourName=names[randomIndex];
console.log(names[randomIndex] + " " +yourName);
}
userName();