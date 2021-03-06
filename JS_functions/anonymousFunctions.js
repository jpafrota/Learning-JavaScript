const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) // makes no difference bc 'soma' function is already a default parameter
imprimirResultado(3, 4, function(x, y) {
    return x - y
})
imprimirResultado(3, 4, (a, b) => a * b)

const pessoa = {
    falar: function () {
        console.log("Hello!")
    }
}

pessoa.falar()