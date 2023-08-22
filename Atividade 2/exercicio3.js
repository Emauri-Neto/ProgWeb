var matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

var matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

if (matrizA[0].length !== matrizB.length) {
    console.log("Não é possível calcular a multiplicação. O número de colunas de A não é igual ao número de linhas de B.");
} else {
    function multiplicarMatrizes(matrizA, matrizB) {
        var linhasA = matrizA.length;
        var colunasA = matrizA[0].length;
        var colunasB = matrizB[0].length;
        
        var matrizC = new Array(linhasA);
        
        for (var i = 0; i < linhasA; i++) {
            matrizC[i] = new Array(colunasB);
            for (var j = 0; j < colunasB; j++) {
                matrizC[i][j] = 0;
                for (var k = 0; k < colunasA; k++) {
                    matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
                }
            }
        }
        
        return matrizC;
    }
    
    var matrizC = multiplicarMatrizes(matrizA, matrizB);
    
    console.log("Matriz A:");
    console.log(matrizA);
    
    console.log("\nMatriz B:");
    console.log(matrizB);
    
    console.log("\nMatriz Resultante C:");
    console.log(matrizC);
}