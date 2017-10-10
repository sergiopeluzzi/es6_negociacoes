class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    add(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // Normalmente o retorno é return this._negociacoes; porem ao fazer isso o meu modelo não esta blindado
        // Podendo assim ser alterado de alguma outra forma
        // Então aplicamos uma programação defensiva. Ao inves de devolver a negociação, criamos uma cópia dela
        // e retornamos a copia, e não mais a negociação por si só
        // Fazemos isso retornando um array vazio e concatenamos a negociação. Assim quem der um get, vai obter a cópia da negociação
        return [].concat(this._negociacoes);
    }

}