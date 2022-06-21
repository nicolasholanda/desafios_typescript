// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


class Pessoa {
    nome: string;
    idade: number;
    profissao: string;

    constructor(nome: string, idade: number, profissao: string) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}


let pessoa1: Pessoa = new Pessoa("maria", 29, "atriz");
let pessoa2: Pessoa = new Pessoa("roberto", 19, "Padeiro");
let pessoa3: Pessoa = new Pessoa("laura", 32, "Atriz");
let pessoa4: Pessoa = new Pessoa("carlos", 19, "padeiro");