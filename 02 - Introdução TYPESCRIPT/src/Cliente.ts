import Telefone from "./Telefone";
import Endereco from "./Endereco";

enum SEXO{
    masculino,
    feminino,
    indefinido,
}

export default class Cliente{
    /*nome cpf data_nascimento sexo endereco telefone*/
    
    
    private  _nome: string;
    private _cpf: number;
    private _dataNascimento: number;
    private _sexo: SEXO;
    private _endereco: Endereco;
    private _telefone: Telefone;

    constructor (cpf: number,dataNascimento: number,nome: string, sexo: SEXO, endereco: Endereco, telefone: Telefone){
        this._nome = nome;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefone = telefone;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
    }

    get nome() : string{
        return this._nome;
    }

    get sexo() : SEXO{
        return this._sexo;
    }

    get endereco() : Endereco{
        return this._endereco;
    }

    get telefone() : Telefone{
        return this._telefone;
    }
    
    get cpf() : number{
        return this._cpf;
    }

    get dataNascimento() : number{ 
        return this._dataNascimento;
    }

    set nome(nome :string){
        this._nome = nome;
    }
    set sexo(sexo: SEXO){
        this._sexo = sexo;
    }
    set endereco(endereco: Endereco){
        this._endereco=endereco;
    }
    set telefone(telefone: Telefone){
        this._telefone = telefone;
    }
    set cpf (cpf: number){
        this._cpf = cpf;
    }
    set dataNascimento(dataNascimento: number){
        this._dataNascimento = dataNascimento;
    }

}