// fazer o ranekamento do 1º 2º e 3º -> PARÂMETRO
// declarar variável de 1º 2º e 3º -> VARIÁVEL
// se for competidor índice 0 -> MANTÉM
// se for competidor índice 1 -> 1 VAI PRA 0 E 0 É "DANIEL" 
// se for competidor índice 2 -> 1 VAI PRA 1 E 1 É "DANIEL"
// mostrar no console o resultado da variável, dentro da função -> CONSOLE.LOG(VARIÁVEL)
// fora, chamar a função e declarar os valores -> "Fulano" "Cicrano" "Beltrano"

function ranking(primeiro, segundo, terceiro) {
    let competidores = [primeiro, segundo, terceiro]
    if (competidores[0] === "Daniel") {
        competidores[0] === "Daniel"
    }
    if (competidores[1] === "Daniel") {
        competidores[1] = competidores[0]
        competidores[0] = "Daniel"
    }
    if (competidores[2] === "Daniel") {
        competidores[2] = competidores[1]
        competidores[1] = "Daniel"
    }
    console.log(competidores)
}
ranking("Rafael", "Manoel", "Daniel")