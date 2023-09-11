"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalPessoasCadastradasController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const calcular_pessoas_cadastradas_query_1 = require("../services/calcular-pessoas-cadastradas.query");
let TotalPessoasCadastradasController = class TotalPessoasCadastradasController {
    constructor(totalPessoaCadastradasQuery) {
        this.totalPessoaCadastradasQuery = totalPessoaCadastradasQuery;
    }
    async totalPessoasCadastradas() {
        const totalPessoasCadastradas = await this.totalPessoaCadastradasQuery.execute();
        return totalPessoasCadastradas;
    }
};
exports.TotalPessoasCadastradasController = TotalPessoasCadastradasController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: Number,
        description: 'Número de pessoas cadastradas no banco de dados.'
    }),
    (0, common_1.Get)("contagem-pessoas"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TotalPessoasCadastradasController.prototype, "totalPessoasCadastradas", null);
exports.TotalPessoasCadastradasController = TotalPessoasCadastradasController = __decorate([
    (0, swagger_1.ApiTags)('pessoas'),
    (0, common_1.Controller)({
        version: "1"
    }),
    __metadata("design:paramtypes", [calcular_pessoas_cadastradas_query_1.CalcularPessoasCadastradasQueryService])
], TotalPessoasCadastradasController);
//# sourceMappingURL=total-pessoas-cadastradas.controller.js.map