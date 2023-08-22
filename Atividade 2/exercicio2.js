var matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposeMatriz(matriz) {
    var transposta = [];
    
    for (var i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (var j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    
    return transposta;
}

function writeMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

console.log("Matriz A:");
writeMatriz(matrizA);

var matrizTransposta = transposeMatriz(matrizA);

console.log("\nTransposta de Matriz A:");
writeMatriz(matrizTransposta);