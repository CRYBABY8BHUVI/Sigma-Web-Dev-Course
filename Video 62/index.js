/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let a = Math.random();
let b = Math.random();
let c = Math.random();
let a1 = ["Crazy","Amazing","Fire"];
let b1 = ["Engine","Foods","Garments"];
let c1 = ["Bros","Limited","Hub"];
let d1 = Math.floor(a*3);
let d2 = Math.floor(b*3);
let d3 = Math.floor(c*3);

console.log(a1[d1]+b1[d2]+c1[d3]);


