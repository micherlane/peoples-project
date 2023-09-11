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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultarPessoaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const consultar_pessoa_query_1 = require("../services/consultar-pessoa.query");
const pessoa_dto_1 = require("../dto/pessoa.dto");
let ConsultarPessoaController = class ConsultarPessoaController {
    constructor(consultarPessoaQuery) {
        this.consultarPessoaQuery = consultarPessoaQuery;
    }
    async consultarPessoa(res, id) {
        const pessoaEncontrada = await this.consultarPessoaQuery.execute(id);
        if (pessoaEncontrada === null) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                erro: "Pessoa não encontrada."
            });
        }
        const getPessoaDto = pessoa_dto_1.PessoaDto.tranformarPessoaPrisma(pessoaEncontrada);
        return res.json(getPessoaDto);
    }
};
exports.ConsultarPessoaController = ConsultarPessoaController;
__decorate([
    (0, swagger_1.ApiResponse)({
        type: pessoa_dto_1.PessoaDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, common_1.Get)("pessoas/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ConsultarPessoaController.prototype, "consultarPessoa", null);
exports.ConsultarPessoaController = ConsultarPessoaController = __decorate([
    (0, swagger_1.ApiTags)('pessoas'),
    (0, common_1.Controller)({
        version: "1"
    }),
    __metadata("design:paramtypes", [consultar_pessoa_query_1.ConsultarPessoaQueryService])
], ConsultarPessoaController);
//# sourceMappingURL=consultar-pessoa.controller.js.map