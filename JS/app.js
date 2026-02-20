const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal (){

    if (isNaN(valor01) || isNaN(valor02)) {
        alert("Digite um número válido!");
        return;
    }

    document.getElementById('resultado').style.display = 'flex';

    let total = (valor01 * valor02);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Valor total</h2>
        <p>Valor01:  ${valor01} Valor02: ${valor02}</p>
   
    <h2>Você irá pagar um valor total de ${total}</h2>
    
  
    `;

};

function desconto() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);


    if (isNaN(valor01) || isNaN(valor02)) {
        alert("Digite um número válido!");
        return;
    }

    document.getElementById('resultado').style.display = 'flex';

    let desconto = (valor01 * valor02) / 100;
    let total = valor01 - desconto;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total do desconto</h2>
        <p>DESCONTO </p>
        <p>Valor 01: ${valor01}   Porcentagem de desconto: ${valor02}   Valor do desconto: ${desconto} </p>
    <h2>Valor final com desconto:  ${total}</h2>
    
    `;
}

function juros(){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);


    if (isNaN(valor01) || isNaN(valor02)) {
        alert("Digite um número válido!");
        return;
    }

    document.getElementById('resultado').style.display = 'flex';

    let acrescimo = (valor01 * valor02) / 100
    let total = valor01 + acrescimo;

    const resultado = document.getElementById('resultado');
        resultado.innerHTML = 
        `
        <h2>Total do Juros</h2>
        
            <p>JUROS</p>
            <p>Valor 01: ${valor01}      Valor 02: ${valor02}     Valor do juros ${acrescimo}    Valor final: ${total}  </p>
       
        `;
};

    function comissao(){
        let valor01 = parseFloat(document.getElementById('valor01').value);
        let valor02 = parseFloat(document.getElementById('valor02').value);
    
        document.getElementById('resultado').style.display = 'flex';
    
        let comissao = (valor02 / 100) * valor01;
    
        if(isNaN (valor01) || isNaN(valor02)) {
    
            alert('valor01 ou valor02 invalido. Digite um numero');
    
        } else {
            resultado.style.display = 'flex';
    
            resultado.innerHTML = 
            `
            <h2>Comissão calculada</h2>
            <ul>
                <li>Comissão de ${valor02} sobre uma venda de ${valor01}</li>
                <h2>Valor da comissão: ${comissao}</h2>
            </ul>
            `};

};

function lucro(){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    if (isNaN(valor01) || isNaN(valor02)) {
        alert("Digite um número válido!");
        return;
    }


    document.getElementById('resultado').style.display = 'flex';

    let lucro = (valor01 - valor02)

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total lucro obtido</h2>
        <p>LUCRO</p>
        <p>Valor 01: ${valor01}    Valor 02: ${valor02}   Valor final: ${lucro}</p>
    `;

};

function limpar(){
    document.getElementById('resultado').style.display = 'none';

}