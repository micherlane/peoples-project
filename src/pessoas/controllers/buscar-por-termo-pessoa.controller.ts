import { Controller, Get, HttpStatus, Query, Res } from "@nestjs/common";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BuscarPorTermoQueryService } from "../services/buscar-por-termo-pessoa.query";
import { PessoaDto } from "../dto/pessoa.dto";

@ApiTags('pessoas')

@Controller({
  version: "1"
})

export class BuscarPorTermoPessoaController {
    constructor(
        private readonly buscarPorTermoPessoaService: BuscarPorTermoQueryService,
    ){}

    @ApiQuery({
        name: 't',
        description: "Termo que deve ser buscado."
    })
    @ApiResponse({
        type: [PessoaDto],
        status: HttpStatus.OK
    })
    @Get('pessoas')
    public async buscarPorTermoPessoa(@Res() res, @Query("t") t: string){
        return res.status(200).json(await this.buscarPorTermoPessoaService.execute(t));
    }
}