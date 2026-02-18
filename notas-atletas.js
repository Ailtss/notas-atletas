function calculoMedia(atletas) {
    
    let matrixAux = []
    
    atletas.forEach(function(atleta) {
        
        let tamanho = atleta.notas.length;
        matrixAux = atleta.notas.sort((a, b) => b -a).slice(1, tamanho-1)
        
        
        let soma = matrixAux.reduce(function(total, atual) {
            return total + atual;
        },0);
        
        //console.log(`A soma é ${soma}`)
        let media = soma/matrixAux.length;
        
        //console.log(`A média é ${media}`)    
        
        console.log(`Atleta: ${atleta.nome}`)
        console.log(`Notas Obtidas em Ordem Decrescente: ${atleta.notas.sort((a, b) => b -a)}`)
        console.log(`Média Válida: ${media}`)
        console.log()
        
        
    });
    
}



let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calculoMedia(atletas)


