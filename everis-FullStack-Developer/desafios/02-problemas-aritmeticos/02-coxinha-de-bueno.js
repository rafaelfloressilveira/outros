const retorno = (gets());
const base = retorno.split(" ");
const H = base.shift();
const P = base.pop();
const calculo = H / P;
const media = calculo.toFixed(2);
console.log(media);