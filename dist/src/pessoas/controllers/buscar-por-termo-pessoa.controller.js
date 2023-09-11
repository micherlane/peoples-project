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
exports.BuscarPorTermoPessoaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const buscar_por_termo_pessoa_query_1 = require("../services/buscar-por-termo-pessoa.query");
const pessoa_dto_1 = require("../dto/pessoa.dto");
let BuscarPorTermoPessoaController = class BuscarPorTermoPessoaController {
    constructor(buscarPorTermoPessoaService) {
        this.buscarPorTermoPessoaService = buscarPorTermoPessoaService;
    }
    async buscarPorTermoPessoa(res, t) {
        return res.status(200).json(await this.buscarPorTermoPessoaService.execute(t));
    }
};
exports.BuscarPorTermoPessoaController = BuscarPorTermoPessoaController;
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 't',
        description: "Termo que deve ser buscado."
    }),
    (0, swagger_1.ApiResponse)({
        type: [pessoa_dto_1.PessoaDto],
        status: common_1.HttpStatus.OK
    }),
    (0, common_1.Get)('pessoas'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("t")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BuscarPorTermoPessoaController.prototype, "buscarPorTermoPessoa", null);
exports.BuscarPorTermoPessoaController = BuscarPorTermoPessoaController = __decorate([
    (0, swagger_1.ApiTags)('pessoas'),
    (0, common_1.Controller)({
        version: "1"
    }),
    __metadata("design:paramtypes", [buscar_por_termo_pessoa_query_1.BuscarPorTermoQueryService])
], BuscarPorTermoPessoaController);
//# sourceMappingURL=buscar-por-termo-pessoa.controller.js.map