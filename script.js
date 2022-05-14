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
    return `1º Colocado: ${competidores[0]}, 2º Colocado: ${competidores[1]}, 3º Colocado: ${competidores[2]}`
}
console.log(ranking("Rafael", "Manoel", "Daniel"))