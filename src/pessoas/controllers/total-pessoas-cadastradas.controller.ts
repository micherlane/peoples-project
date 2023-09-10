import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { CalcularPessoasCadastradasQueryService } from "../services/calcular-pessoas-cadastradas.query";

@ApiTags('pessoas')

@Controller({
    version: "1"
})

export class TotalPessoasCadastradasController {
    constructor(
        private readonly totalPessoaCadastradasQuery: CalcularPessoasCadastradasQueryService
    ){}

    @ApiResponse({
        status: HttpStatus.OK,
        type: Number,
        description: 'Número de pessoas cadastradas no banco de dados.'
    })
    @Get("contagem-pessoas")
    async totalPessoasCadastradas(){
        const totalPessoasCadastradas = await this.totalPessoaCadastradasQuery.execute();

        return totalPessoasCadastradas;
    }
}