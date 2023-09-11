"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaEntity = void 0;
class PessoaEntity {
    constructor(id, apelido, nome, nascimento, stack) {
        this._id = id;
        this._apelido = apelido;
        this._nome = nome;
        this._nascimento = nascimento;
        this._stack = stack || null;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get apelido() {
        return this._apelido;
    }
    set apelido(apelido) {
        this._apelido = apelido;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nascimento() {
        return this._nascimento;
    }
    set nascimento(nascimento) {
        this._nascimento = nascimento;
    }
    get stack() {
        return this._stack;
    }
    set stack(stack) {
        this._stack = stack;
    }
    toJSON() {
        return {
            id: this.id,
            apelido: this.apelido,
            nome: this.nome,
            nascimento: this.nascimento,
            stack: this.stack
        };
    }
}
exports.PessoaEntity = PessoaEntity;
//# sourceMappingURL=pessoa.entity.js.map