class Negociacao {
    //O underscore é uma convenção que diz ao programador que a variável privada, ja que o javascript ainda n permite;
    //a utilização de modificadores de acesso. O Typescript ja tem essa funcionalidade 
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;                              
        this._valor = valor;
        Object.freeze(this); // Congela o objeto para não sofrer modificação
    }

   
    // A Passagem do get antes do nome do metodo indica que o método é um acessor/getter do atributo
    // Podendo ser chamado sem os (), como se fosse um atributo
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}