const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function calcularTotal (){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);
    
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    const resultado = document.getElementById('resultado');

    
    resultado.innerHTRML = `<h2> Valor total<h2>
    <ul>
        <li>Operação: <span>total</span> </li>
        <li>Valor 01 digitado pelo usuário: <span> ${v1} </span>  </li>
        <li>Valor 02 digitado pelo usuário: <span> ${v2} </span>  </li>
        <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
    </ul>`



};


function desconto(){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);
    
    document.getElementById('resultado').style.display = 'flex';
    let desconto(valor01 * valor02) / 100;
    let total = valor01 - desconto;


}


function juros(){

}

function comissao(){

}

function limpar(){
    resultado.style.display = 'none';
}