const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal (){
    let v1 = parseFloat(valor01.value);
    let v2 = parseFloat(valor02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Digite um número válido!");
        return;
    }

    document.getElementById('resultado').style.display = 'flex';

    let total = (v1 * v2);

    resultado.innerHTML = 
    `
    <h2>Valor total</h2>
        <p>Valor01:  ${v1} Valor02: ${v2}</p>
   
    <h2>Você irá pagar um valor total de ${total}</h2>
    `;
};

function desconto() {
    let v1 = parseFloat(valor01.value);
    let v2 = parseFloat(valor02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Digite um número válido!");
        return;
    }

    resultado.style.display = 'flex';

    let desconto = (v1 * v2) / 100;
    let total = v1 - desconto;

    resultado.innerHTML = `
    <h2>Total do desconto</h2>
        <p>DESCONTO</p>
        <p>Valor 01: ${v1} Porcentagem de desconto: ${v2} Valor do desconto: ${desconto}</p>
    <h2>Valor final com desconto: ${total}</h2>
    `;
}

function juros(){
    let v1 = parseFloat(valor01.value);
    let v2 = parseFloat(valor02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Digite um número válido!");
        return;
    }

    resultado.style.display = 'flex';

    let acrescimo = (v1 * v2) / 100;
    let total = v1 + acrescimo;

    resultado.innerHTML = `
    <h2>Total do Juros</h2>
        <p>JUROS</p>
        <p>Valor 01: ${v1} Valor 02: ${v2} Valor do juros ${acrescimo} Valor final: ${total}</p>
    `;
};

function comissao(){
    let v1 = parseFloat(valor01.value);
    let v2 = parseFloat(valor02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('valor01 ou valor02 invalido. Digite um numero');
        return;
    }

    resultado.style.display = 'flex';

    let comissao = (v2 / 100) * v1;

    resultado.innerHTML = `
    <h2>Comissão calculada</h2>
    <ul>
        <li>Comissão de ${v2} sobre uma venda de ${v1}</li>
        <h2>Valor da comissão: ${comissao}</h2>
    </ul>
    `;
};

function lucro(){
    let v1 = parseFloat(valor01.value);
    let v2 = parseFloat(valor02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Digite um número válido!");
        return;
    }

    resultado.style.display = 'flex';

    let lucro = (v1 - v2);

    resultado.innerHTML = `
    <h2>Total lucro obtido</h2>
        <p>LUCRO</p>
        <p>Valor 01: ${v1} Valor 02: ${v2} Valor final: ${lucro}</p>
    `;
};

function limpar(){
    document.getElementById('resultado').style.display = 'none';

}