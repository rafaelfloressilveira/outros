let valores = [8, 1, 7, 4, 2, 9]

// maneira prática
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("Nova maneira:")

// maneira otimizada (versão mais atualizada)
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//buscar o valor três e informa a posição no elemento
console.log(valores.indexOf(7))