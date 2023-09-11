"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasModule = void 0;
const common_1 = require("@nestjs/common");
const create_pessoa_command_1 = require("./services/create-pessoa.command");
const create_pessoa_controller_1 = require("./controllers/create-pessoa.controller");
const pessoas_repository_1 = require("./repositories/pessoas.repository");
const consultar_pessoa_controller_1 = require("./controllers/consultar-pessoa.controller");
const consultar_pessoa_query_1 = require("./services/consultar-pessoa.query");
const buscar_por_termo_pessoa_controller_1 = require("./controllers/buscar-por-termo-pessoa.controller");
const buscar_por_termo_pessoa_query_1 = require("./services/buscar-por-termo-pessoa.query");
const total_pessoas_cadastradas_controller_1 = require("./controllers/total-pessoas-cadastradas.controller");
const calcular_pessoas_cadastradas_query_1 = require("./services/calcular-pessoas-cadastradas.query");
let PessoasModule = class PessoasModule {
};
exports.PessoasModule = PessoasModule;
exports.PessoasModule = PessoasModule = __decorate([
    (0, common_1.Module)({
        controllers: [create_pessoa_controller_1.CreatePessoaController, consultar_pessoa_controller_1.ConsultarPessoaController, buscar_por_termo_pessoa_controller_1.BuscarPorTermoPessoaController, total_pessoas_cadastradas_controller_1.TotalPessoasCadastradasController],
        providers: [create_pessoa_command_1.CreatePessoaCommandService, consultar_pessoa_query_1.ConsultarPessoaQueryService, buscar_por_termo_pessoa_query_1.BuscarPorTermoQueryService, calcular_pessoas_cadastradas_query_1.CalcularPessoasCadastradasQueryService, pessoas_repository_1.PessoaRepository],
    })
], PessoasModule);
//# sourceMappingURL=pessoas.module.js.map