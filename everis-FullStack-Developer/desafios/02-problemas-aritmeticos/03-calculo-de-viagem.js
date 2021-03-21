const retorno = (gets());
const base = retorno.split(" ");
const tempoGasto = base.shift();
const velocidade = base.pop();
const distanciaPercorrida = tempoGasto * velocidade;
const litros = distanciaPercorrida / 12;
const totalLitros = litros.toFixed(3);
console.log(totalLitros);