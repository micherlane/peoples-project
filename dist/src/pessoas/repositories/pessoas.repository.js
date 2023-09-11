"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaRepository = void 0;
const common_1 = require("@nestjs/common");
const usuario_cadastrado_err_1 = require("../err/usuario-cadastrado.err");
const prisma_1 = require("../../prisma");
var ColunasBusca;
(function (ColunasBusca) {
    ColunasBusca["apelido"] = "apelido";
    ColunasBusca["nome"] = "nome";
    ColunasBusca["stack"] = "stack";
})(ColunasBusca || (ColunasBusca = {}));
let PessoaRepository = class PessoaRepository {
    async salvarPessoa(pessoa) {
        const usuarioJaExiste = await prisma_1.default.pessoa.findFirst({
            where: {
                apelido: pessoa.apelido,
            }
        });
        if (usuarioJaExiste) {
            return new usuario_cadastrado_err_1.UsuarioExistenteError();
        }
        const novaPessoa = await prisma_1.default.pessoa.create({
            data: {
                apelido: pessoa.apelido,
                nome: pessoa.nome,
                nascimento: new Date(pessoa.nascimento),
                stack: pessoa.stack || [],
            }
        });
        return novaPessoa;
    }
    async consultarPessoa(id) {
        const pessoa = await prisma_1.default.pessoa.findFirst({
            where: {
                id: id
            }
        });
        return pessoa;
    }
    criarCondicaoBusca(termo) {
        const condicao = {};
        condicao.OR = Object.keys(ColunasBusca).map((key) => {
            const coluna = ColunasBusca[key];
            const condicaoColuna = {};
            if (coluna === "stack") {
                condicaoColuna[coluna] = { hasSome: [termo] };
            }
            else {
                condicaoColuna[coluna] = { contains: termo };
            }
            return condicaoColuna;
        });
        return condicao;
    }
    async buscarPorTermoPessoa(termo) {
        const condicao = this.criarCondicaoBusca(termo);
        const pessoasEncontradas = await prisma_1.default.pessoa.findMany({
            where: condicao,
            select: {
                id: true,
                apelido: true,
                nome: true,
                nascimento: true,
                stack: true
            }
        });
        return pessoasEncontradas;
    }
    async getTotalDePessoasCadastradas() {
        const quantidadePessoasCadastradas = await prisma_1.default.pessoa.count();
        return quantidadePessoasCadastradas;
    }
};
exports.PessoaRepository = PessoaRepository;
exports.PessoaRepository = PessoaRepository = __decorate([
    (0, common_1.Injectable)()
], PessoaRepository);
//# sourceMappingURL=pessoas.repository.js.map