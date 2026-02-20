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

    resultado.style.display = 'flex';

    let total = (v1 * v2);

    resultado.innerHTML = `
    <h2>Valor total</h2>
        <p>Valor 01: R$ ${v1.toFixed(2)}</p>
        <p>Valor 02: ${v2}</p>
    <h2>Você irá pagar um valor total de R$ ${total.toFixed(2)}</h2>
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
        <p>Valor 01: R$ ${v1.toFixed(2)}</p>
        <p>Porcentagem de desconto: ${v2}%</p>
        <p>Valor do desconto: R$ ${desconto.toFixed(2)}</p>
    <h2>Valor final com desconto: R$ ${total.toFixed(2)}</h2>
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
        <p>Valor 01: R$ ${v1.toFixed(2)}</p>
        <p>Percentual: ${v2}%</p>
        <p>Valor do juros: R$ ${acrescimo.toFixed(2)}</p>
        <p>Valor final: R$ ${total.toFixed(2)}</p>
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
        <p>Valor da venda: R$ ${v1.toFixed(2)}</p>
        <p>Percentual: ${v2}%</p>
        <p>Valor da comissão: R$ ${comissao.toFixed(2)}</p>
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
        <p>Valor 01: R$ ${v1.toFixed(2)}</p>
        <p>Valor 02: R$ ${v2.toFixed(2)}</p>
        <p>Lucro final: R$ ${lucro.toFixed(2)}</p>
    `;
};


function limpar(){
    document.getElementById('resultado').style.display = 'none';

}