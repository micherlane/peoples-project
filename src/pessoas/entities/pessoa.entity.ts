export class PessoaEntity {
    private _id: string;
    private _apelido: string;
    private _nome: string;
    private _nascimento: Date;
    private _stack?: Array<string> | null;

    constructor(id: string, apelido: string, nome: string, nascimento: Date, stack?: Array<string>) {
        this._id = id;
        this._apelido = apelido;
        this._nome = nome;
        this._nascimento = nascimento;
        this._stack = stack || null;
    }

    get id(){
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get apelido(){
        return this._apelido;
    }
    
    set apelido(apelido: string) {
        this._apelido = apelido;
    }
    get nome(){
        return this._nome;
    }
    
    set nome(nome: string) {
        this._nome = nome;
    }

    get nascimento(){
        return this._nascimento;
    }

    set nascimento(nascimento: Date) {
        this._nascimento = nascimento;
    }
    
    get stack(){
        return this._stack;
    }
    
    set stack(stack: Array<string>) {
        this._stack = stack;
    }
    
    toJSON(){
        return {
            id: this.id,
            apelido: this.apelido,
            nome: this.nome,
            nascimento: this.nascimento,
            stack: this.stack
        }
    }
    

    
}
