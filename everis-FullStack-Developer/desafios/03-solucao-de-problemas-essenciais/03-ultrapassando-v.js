let R = parseInt(gets());
let V = parseInt(gets());
let i = 1;
let total = 0;

while (V <= R) V = parseInt(gets());

while(total + R <= V){
  total = total + R + i;
  i++;
} 

console.log(i);