class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    // Função que renderiza o template da table...
    // Utiza uma template string para montar o html e no tbody um map que vai percorrer o array passado no parametro
    // e retorna outro array. Porem, o tbody precisa receber uma string ao inves de um array
    // por este motivo, utilizamos o metodo join() com uma string vazia, que vai pegar o array gerado pelo map e
    // transformar todos os itens em uma string 
    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(n => {
                    return `<tr>
                                <td>${DateHelper.dateToText(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>`;
                    
                }).join('')}
            </tbody>
        </table>        
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}