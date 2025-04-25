for (let i=0 < 5; i++) {
    console.log("repetição número:" + i)
}

let saldo=100

while (saldo > 0) {
    console.log ("Gastando saldo atual:" + saldo);
    saldo-=10
}

let tentativas = 0;
do{
    console.log("tentando conexão...");
    tentativas++
} while (tentativas <3);

const frutas=["maçã","banana", "uva"];
for (const fruta of frutas) {
    console.log("frutas:"+ fruta)
}


const user={nome:"luan", Idade:37, cidade:"Fortaleza"};
for (const chave in user) {
    console.log(chave + " :" +user{chave});
}

const usuario= [{
    nome:"Luan", profissão:"professora"
    nome:"Leticia", profissão:"professora"
    nome:"Raphael", profissão:"professora"
    
}];

for (const usuario of usuario) {console.log('${usuario.nome} trabalha com 
    ${usuario.profissão})

}



const usuario= [{
    nome:"Luan", posição:"professora"
    nome:"Leticia", posição:"professora"
    nome:"Raphael", posição:"professora"}]

    for (const usuario of usuario) {console.log('${usuario.nome} 
        posição ${usuario.posição})