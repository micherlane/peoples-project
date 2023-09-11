"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioExistenteError = void 0;
class UsuarioExistenteError extends Error {
    constructor() {
        super('O usuário já existe.');
        this.name = "UsuarioExistenteError";
    }
}
exports.UsuarioExistenteError = UsuarioExistenteError;
//# sourceMappingURL=usuario-cadastrado.err.js.map