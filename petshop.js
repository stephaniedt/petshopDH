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

function addPet(tipo,nome,idade,raça,porte,sexo,vacinado,tutor) {
    let novoPet = {
        tipo,
        nome,
        idade,
        raça,
        porte,
        sexo,
        vacinado,
        tutor:{
            nome: tutor,
            telefone: undefined
        }
    }

    listaDeAnimais.push(novoPet);
    console.log("Pet cadastrado com sucesso!")
    
}

function viewPet() {
    for(let i = 0; i <listaDeAnimais.length; i++) {
        let animal = listaDeAnimais[i]
        console.log("--------------------------")
        console.log(`Nome do animal: ${animal.nome}`)
        console.log(`Tipo do animal: ${animal.tipo}`)
        console.log(`Sexo do animal: ${animal.sexo}`)
    }
}