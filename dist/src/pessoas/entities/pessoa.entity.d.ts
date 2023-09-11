export declare class PessoaEntity {
    private _id;
    private _apelido;
    private _nome;
    private _nascimento;
    private _stack?;
    constructor(id: string, apelido: string, nome: string, nascimento: Date, stack?: Array<string>);
    get id(): string;
    set id(id: string);
    get apelido(): string;
    set apelido(apelido: string);
    get nome(): string;
    set nome(nome: string);
    get nascimento(): Date;
    set nascimento(nascimento: Date);
    get stack(): Array<string>;
    set stack(stack: Array<string>);
    toJSON(): {
        id: string;
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
    };
}
