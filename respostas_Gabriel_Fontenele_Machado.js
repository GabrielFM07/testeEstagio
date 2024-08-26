function questao_1(P, i, n){
    var A = P * ((1+i)^n-1/i)
    console.log(A)
}

/*Texto de debug para checar a resopsta da questão 1
questao_1(p, i, n);
//substitua 'p', 'i' & 'n' pelas as variáveis que desejar
*/

function questao_2(num){
    const produtos = [
        { sku: 1001, nome: 'Camiseta', quantidade: 5 },
        { sku: 1002, nome: 'Calça', quantidade: 10 },
        { sku: 1003, nome: 'Vestido', quantidade: 3 }
    ];
    let x = produtos.find(({sku}) => sku === num);
    if(x == null)
        console.log("Não pudemos encontrar um produto com o 'sku' informado.");
    else{
        if(x.quantidade > 0){
            console.log("true");
            return true;
        }
        else{
            console.log("false");
            return false;
        }
    }
}

/*Texto de debug para checar a resopsta da questão 2
questao_2(1000);
questao_2(1001);
questao_2(1002);
questao_2(1003);
questao_2(1004);
*/

function questao_3(peso, dis){
    const tabelaPrecos = {
        '0-1,0-5': 10.0, // Até 1 kg e até 5 km: R$ 10.00
        '0-1,6-10': 15.0, // Até 1 kg e 6-10 km: R$ 15.00
        '1-5,0-5': 20.0, // 1-5 kg e até 5 km: R$ 20.00
        '1-5,6-10': 25.0, // 1-5 kg e 6-10 km: R$ 25.00
        '5-10,0-5': 30.0, // 5-10 kg e até 5 km: R$ 30.00
        '5-10,6-10': 35.0 // 5-10 kg e 6-10 km: R$ 35.00
    };
    if(peso >= 0 && peso <= 1){
        if(dis >= 0 && dis <= 5){
            return tabelaPrecos["0-1,0-5"];
        }
        else if(dis > 5 && dis <= 10){
            return tabelaPrecos["0-1,6-10"];
        }
    }
    if(peso > 1 && peso <= 5){
        if(dis >=0 && dis <= 5){
            return tabelaPrecos["1-5,0-5"];
        }
        else if(dis > 5 && dis <= 10){
            return tabelaPrecos["1-5,6-10"];
        }
    }
    if(peso > 5 && peso <=10){
        if(dis >=0 && dis <= 5){
            return tabelaPrecos["5-10,0-5"];
        }
        else if(dis > 5 && dis <= 10){
            return tabelaPrecos["5-10,6-10"];
        }
    }
}

/*Texto de debug para checar a resopsta da questão 3
questao_3(1,1);
questao_3(1,6);
questao_3(2,1);
questao_3(2,6);
questao_3(6,1);
questao_3(6,6);
*/

function questao_4(n){
    const estoque = [
        { sku: 1001, quantidade: 5 },
        { sku: 1002, quantidade: 2 },
        { sku: 1003, quantidade: 5 }
    ];
    let a = estoque.find(({sku}) => sku === n.sku)
    for(i = 0; i < Object.keys(n).length; i++){
        for(y = 0; y < Object.keys(estoque).length; y++){
            if(n[i].sku === estoque[y].sku)
                estoque[y].quantidade = estoque[y].quantidade - n[i].quantidade;
        }
    }
    console.log("Lista de estoque atualizada:");
    for(i=0;i<Object.keys(estoque).length;i++)
        console.log(estoque[i]);
}

/*Texto de debug para checar a resopsta da questão 4
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
    ];

questao_4(itensVendidos);
*/

function questao_5(n){
    for(i = 0; i < Object.keys(n).length; i++){
        if(n[i].sku === 1001){
            console.log("Para o produto de sku:", n[i].sku, "\nA quantidade de produtos vendida foi:", n[i].quantidade, "\nO valor total vendido foi:", n[i].valorTotal, "\nDurante o período:", n[i].data)
        }
        if(n[i].sku === 1002){
            console.log("Para o produto de sku:", n[i].sku, "\nA quantidade de produtos vendida foi:", n[i].quantidade, "\nO valor total vendido foi:", n[i].valorTotal, "\nDurante o período:", n[i].data)
        }
        if(n[i].sku === 1003){
            console.log("Para o produto de sku:", n[i].sku, "\nA quantidade de produtos vendida foi:", n[i].quantidade, "\nO valor total vendido foi:", n[i].valorTotal, "\nDurante o período:", n[i].data)
        }
    }
}

/*Texto de debug para checar a resopsta da questão 5
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01'},
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01'},
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02'}
    ];

    questao_5(vendas);
    */