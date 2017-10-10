class DateHelper {

    constructor() {
        // Por ser uma classe sem atributos, sem construtor. Podemos criar um comportamento para q sempre que for instanciada
        // lance um erro, com a mensagem abaixo
        throw new Error('A classe (helper) DateHelper não pode ser instanciada!');
    }

    // Modificador static transforma o metodo em estatico, assim não é necessário uma instancia da classe pra executá-lo
    // podendo ser chamados diretamente da classe
    static textToDate(text) {
        // Se o texto não vier no padrao da expressão regular q eh: 4 digitos - 2 digitos - 2 digitos yyyy-mm-dd
        // lança o erro.
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
            throw new Error('A data deve estar no formato aaaa-mm-dd')
        }
        
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }

    static dateToText(date) {
        // Forma concatenando strings:
        // date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        // Forma template string
        return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() }`;
    }

}