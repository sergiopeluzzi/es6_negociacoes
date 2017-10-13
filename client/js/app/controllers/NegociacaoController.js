class NegociacaoController {

    constructor() {
        // Transforma o dolar $ em um querySelector
        // Assim não é necessário utilizar o document.querySelector toda hora
        // Por padrão o metodo querySelector, internament, possui uma referencia this para document.
        // Quando atribuimos a $, o querySelect deixa de ser um método do Objeto e passa a ser uma função solta,
        // então o this não referencia mais o document.
        // Nesse caso é necessário usar o metodo bind(), que mantém em $ a referencia do this para document
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        
      }


    add(event) {
        event.preventDefault();
        this._listaNegociacoes.add(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaForm();                
    }

    _criaNegociacao() {
        // Cria a negociação. Como data vem como string, é necessário criar uma nova data a partir de um array [ano, mes, dia]
        // Isso é feito com o split que pega a string e transforma em um array usando o separador 
        // Tb poderia ser new Date(this.inputData.value.replace(/-/g, ',')) que trocaria globalmente todos os - da string para virgula
        // deixando a tring '2017,10,05' q é uma forma que o new Date() tb aceita
        // Podemos tb usar o spread operator new Date(...this.inputData.value.split('-')); q ele pega o array e desmembra em parametros
        // Ex: ['2017', '10', '05'] vira '2017', '10', '05'
        // Utilizamos tb a função map que percorre o array/objeto e retorna um novo array/objeto de acordo com o comportamento do seu callback
        // Nesse caso, qndo o index for ímpar, ele tira -1 do item, q será o segundo parametro (mês) passado pra Date
        // Isso pq o mes do Objeto date é contado de 0 a 11
        let data = DateHelper.textToDate(this._inputData.value); 
        let qnt =  this.inputQuantidade.value;
        let vlr = this.inputValor.value;
        
        return new Negociacao(data, qnt, vlr);
    }

    _limpaForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.00;

        this._inputData.focus();
    }

    get inputData() {
        return this._inputData;
    }

    get inputQuantidade() {
        return this._inputQuantidade;
    }

    get inputValor() {
        return this._inputValor;
    }
}