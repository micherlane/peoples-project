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
exports.CreatePessoaController = void 0;
const common_1 = require("@nestjs/common");
const create_pessoa_dto_1 = require("../dto/create-pessoa.dto");
const create_pessoa_command_1 = require("../services/create-pessoa.command");
const swagger_1 = require("@nestjs/swagger");
const pessoa_dto_1 = require("../dto/pessoa.dto");
const usuario_cadastrado_err_1 = require("../err/usuario-cadastrado.err");
let CreatePessoaController = class CreatePessoaController {
    constructor(createPessoaCommand) {
        this.createPessoaCommand = createPessoaCommand;
    }
    async create(res, createPessoaDto) {
        if (!createPessoaDto.apelido || !createPessoaDto.nome || !createPessoaDto.nascimento) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                "erro": "conteúdo inválido"
            });
        }
        if ((typeof createPessoaDto.nome !== "string") || (typeof createPessoaDto.apelido !== "string")) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                "erro": "conteúdo inválido"
            });
        }
        const novaPessoa = await this.createPessoaCommand.execute(createPessoaDto);
        if (novaPessoa instanceof usuario_cadastrado_err_1.UsuarioExistenteError) {
            return res.status(common_1.HttpStatus.UNPROCESSABLE_ENTITY).json({
                error: novaPessoa.message
            });
        }
        const pessoaDto = pessoa_dto_1.PessoaDto.tranformarPessoaPrisma(novaPessoa);
        return res.json(pessoaDto);
    }
};
exports.CreatePessoaController = CreatePessoaController;
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_pessoa_dto_1.CreatePessoaDto,
        description: 'Cria uma nova pessoa'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: pessoa_dto_1.PessoaDto
    }),
    (0, common_1.Post)("pessoas"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_pessoa_dto_1.CreatePessoaDto]),
    __metadata("design:returntype", Promise)
], CreatePessoaController.prototype, "create", null);
exports.CreatePessoaController = CreatePessoaController = __decorate([
    (0, swagger_1.ApiTags)('pessoas'),
    (0, common_1.Controller)({
        version: "1"
    }),
    __metadata("design:paramtypes", [create_pessoa_command_1.CreatePessoaCommandService])
], CreatePessoaController);
//# sourceMappingURL=create-pessoa.controller.js.map