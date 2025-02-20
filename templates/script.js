//Adicionando os items do usuário
const listDebt = document.getElementById("list-debt");

//Resultado da soma das dividas
const debt = document.getElementById("result-debt");
//Resultado do dinheiro restante
const rest = document.getElementById("result-rest");

//Salário do usuário
const wage = document.getElementById("wage");

//Mensagem de erro
const menssage = document.getElementById("menssage");

//Ano atual, ele se atualiza sozinho
const year = document.getElementById("year");
let nowYear = new Date;
year.innerText = `${nowYear.getFullYear()}`;

//Ação do botão CALCULAR
const buttonCalc = document.getElementById("wage-button");
buttonCalc.onclick = function(){
    const total = totalWage(wage.value);
    
    //mudando a cor do item, caso seja negativo
    if(total <= 0){
        rest.style.backgroundColor = "rgb(196, 122, 122)";
        
    }
    else{
        rest.style.backgroundColor = "rgb(176, 196, 222)";
    }
}

//Ação do botão ADICIONAR
const button = document.getElementById("new-name");
button.addEventListener("click", newBlock);

let count = 0;
let sum_debt = 0;
let subtraction = 0;

function newBlock(){
    
    //Informações fornecidas pelo usuário
    const nameblock = document.getElementById("name");
    const price = document.getElementById("price");

    

    //mensagem de erro sendo resetado
    menssage.innerHTML = ``;

    if(nameblock.value == "" || isLetter(nameblock.value)){
        menssage.innerHTML = `<p id="isError">Preencha o <strong>nome</strong> do produto ou empresa corretamente.</p>`;
        return;
    }

    if(price.value <= 0){
        menssage.innerHTML = `<p id="isError">Preencha o <strong>preço</strong> do produto ou empresa.</p>`;
        return;
    }

    //formatando o nome
    const name = formatName(nameblock.value);

    count++
    const newList = `
    <li>${count} - ${name}</li>
    <p>Preço: ${price.value}</p>
    <hr>
    `
    listDebt.insertAdjacentHTML('beforeend', newList);

    //chamando a função de cálculo
    totalPrice(price.value);

    return;
}


function totalPrice(price){

    sum_debt += 1 * price;
    debt.innerText = `${sum_debt}`;   
}
function totalWage(wage){
    //mensagem de erro sendo resetado
    menssage.innerHTML = ``;

    if(price.value <= 0){
        menssage.innerHTML = `<p id="isError">Preencha o <strong>salário</strong>.</p>`;
        return;
    }

    subtraction =  1 * wage - sum_debt;
    wage = subtraction;
    rest.innerText = `${subtraction}`;
    return wage;
}

function formatName(name){
    
    const upperLetter = name[0].toUpperCase();
    return name.replace(name[0], upperLetter);
}

function isLetter(name){
  return /\d/.test(name);
}

