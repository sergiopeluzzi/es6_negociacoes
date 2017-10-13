class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    // Função que renderiza o template da table...
    // Utiza uma template string para montar o html e no tbody um map que vai percorrer o array passado no parametro
    // e retorna outro array. Porem, o tbody precisa receber uma string ao inves de um array
    // por este motivo, utilizamos o metodo join() com uma string vazia, que vai pegar o array gerado pelo map e
    // transformar todos os itens em uma string 
    template(model) {
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
                ${model.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.dateToText(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>                    
                `).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>${
                    // A Expressão dentro de uma template string retorna um unico valor, por isso não podemos codificar multilinhas
                    // se utilizarmos uma função por si só, a expressão nos retorna a função e tb n queremos isso
                    // Então utilizamos de um recurso q autoinvoca uma função. IIFE Função autoinvocável.
                    // Nesse caso o retorno é o da função e não a função
                    /*
                    (function() {
                        let total = 0;
                        model.negociacoes.forEach(n => total+= n.volume);
                        return total;
                    })()
                    */
                    //Existe porem uma outra forma q é utilizando a função reduce de um array
                    // reduce recebe 2 parametros o primeiro é uma callback com 2 parametros 1 var qualquer  e 2 apelido do meu array
                    // no segundo parametro do reduce podemos colocar a inicialização da variavel, neste caso, total
                    model.negociacoes.reduce( (total, n) => total + n.volume, 0.0 )
                }
                </td>
            </tfoot>
        </table>        
        `;
    }
}