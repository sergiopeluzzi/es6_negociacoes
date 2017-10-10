var campos = [
    //querySelect permite buscar uma informação do dom utilizando um seletor
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector("#valor")
];

console.log(campos);

//pega o elemento tbody para anexar futuramente os valores
var tbody = document.querySelector('table tbody');

//Pega o elemento da classe form e adiciona um comportamento quando o evento submit for acionado
document.querySelector('.form').addEventListener('submit', function(event) {
    //Não submete o form, fazendo com que a página não seja recarregada
    event.preventDefault();

    //cria uma tr
    var tr = document.createElement('tr');

    //percorre o array campos e cria um td pra cada campo, em seguida anexa ao tr
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    //cria uma nova td que não é um campo, somente um campo totalizador
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    //anexa ao tr
    tr.appendChild(tdVolume);

    //anexa a tr ao tbody da table
    tbody.appendChild(tr);

    //apos o processo, zera os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //manda o foco para o campo de data
    campos[0].focus();


})


