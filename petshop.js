let divPets = document.getElementById('pets');

let listaDeAnimais = [
    {
        tipo: "Cachorro",
        nome: "Pudim",
        idade: 2,
        raça: "Pug",
        porte: "Pequeno",
        sexo: "M",
        vacinado: true,
        tutor: {
            nome:"Stephanie",
            tel:"(11)99999-7929"
        }
    },
    {
        tipo: "Gato",
        nome: "Pamonha",
        idade: 7,
        raça: undefined,
        porte: "médio",
        sexo: "F",
        vacinado: true,
        tutor: {
            nome:"Gustavo",
            tel:"(11)99999-7929"
        }
    },
    {
        tipo: "Gato",
        nome: "Kika",
        idade: 9,
        raça: undefined,
        porte: "Pequeno",
        sexo: "F",
        vacinado: true,
        tutor: {
            nome:"Maristela",
            tel:"(11)99999-7977"
        }
    }
];

const addPet = (tipo,nome,idade,raça,porte,sexo,vacinado,tutor) => {
    let novoPet = {
        tipo,
        nome,
        idade,
        raça,
        porte,
        sexo,
        vacinado,
        tutor: {
            nome: tutor,
            telefone: undefined
        }
    }

    listaDeAnimais.push(novoPet);
    console.log("Pet cadastrado com sucesso!")

}

const viewPet = () => {

    listaDeAnimais.forEach((animal, index) => {

        let divPetContent = document.createElement('div')
        divPetContent.setAttribute('class', 'bixinho')

        let pLayout = document.createElement('p')
        pLayout.textContent = "--------------------------"

        let pNomePet = document.createElement('p')
        pNomePet.textContent = `Nome do animal: ${animal.nome}`

        let pPetTipo =  document.createElement('p')
        pPetTipo.textContent = `Tipo do animal: ${animal.tipo}`
        
        divPetContent.appendChild(pLayout)
        divPetContent.appendChild(pNomePet)
        divPetContent.appendChild(pPetTipo)

        divPets.appendChild(divPetContent)
    }) 
}

// exercicio:
// Nessa função você vai receber o nome do pet como parametro lembre-se que
// é uma string, seu trabalho é buscar esse pet dentro da nossa lista de pet, e
// dizer se existe ou não um pet com esse nome. Lembre-se de usar o console.log
// .    para dar o feedback ao usuario.

const searchPet = nomePet => {
    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animal = listaDeAnimais[i]
            if (nomePet == animal.nome) {
                console.log(`O cadastro do animal ${nomePet} foi localizado!`)
                console.log("--------------------------")
                console.log(`Nome do animal: ${animal.nome}`)
                console.log(`Tipo do animal: ${animal.tipo}`)
                console.log(`Sexo do animal: ${animal.sexo}`)
                return
            } 
        }
        console.log("Pet não cadastrado.");
}

const deletePet = nomePet => {

    let totalDePets = listaDeAnimais.length

    listaDeAnimais = listaDeAnimais.filter((animal, index) => {
        return animal.nome != nomePet
    })

    if(totalDePets == listaDeAnimais.length) {
        return console.log("Não encontramos um animal com o nome de " + nomePet)
    }
}

// // função expressa. 
// // só existe a partir da linha em que foi escrita. se chamar a função somar agora, não será executada.
// //utilizar com const, preferencialmente.

// const somar = function (a,b) {
//     return a + b
// }



// // ARROW FUNCTION

// //se a função tiver apenas UMA linha, pode-se tirar o return e as chaves. 
// // fica implícito no código da arrow function.

// const multiplicar = (a,b) => a*b

// // se a função tiver apenas UM parâmetro, os parentes podem ser omitidos.

// const deletePet = nomePet => {}

// // funções sem parâmetros (ou com 2+), parênteses obrigatórios.

// const listPet = () => {}


const somar = (a,b) => a + b
const subtrair = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b

function calc(a,b,acao) {
    return acao(a,b)
}

/*
//metodos mais comuns de uso
.forEach
.map
.filter
.reduce
*/


let listaDeFruta = ["Maçã", "Uva", "Limão"]

listaDeAnimais.forEach(function(animal, index){
    console.log(`O valor da posição ${index} é ${animal.nome}`)
}) 

//extrair valor. nao altera array original, cria um novo array

listaDeFruta.filter((fruta, index) => {
    return fruta != "Uva"
})

//modificar todos os itens de um array
listaDeFruta.map((fruta, index) => {
    return "Fruta" + fruta
})

let numeros = [2.3, 6.7, 1.2, 10.87]

numeros.map((numero,index) => {
    return Math.round(numero);
})

// .reduce --- procurar o q é, pq não entendi

let valores = [3, 8, 5, 0, 16]

valores.reduce((resultado, valor, index) => {
    return resultado + valor;
})