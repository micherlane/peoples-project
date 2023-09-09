export class UsuarioExistenteError extends Error {
    constructor(){
        super('O usuário já existe.');
        this.name = "UsuarioExistenteError";
    }
}