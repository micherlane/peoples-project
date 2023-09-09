import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ConsultarPessoaQueryService } from "../services/consultar-pessoa.query";
import { PessoaDto } from "../dto/pessoa.dto";

@ApiTags('pessoas')

@Controller({
    version: "1"
})

export class ConsultarPessoaController {
    constructor(
        private readonly consultarPessoaQuery: ConsultarPessoaQueryService
    ){}

    @ApiResponse({
        type: PessoaDto
    })
    @Get("pessoas/:id")
    async consultarPessoa(@Res() res, @Param("id") id: string){
        const pessoaEncontrada = await this.consultarPessoaQuery.execute(id);

        if(pessoaEncontrada === null){
            return res.status(HttpStatus.NOT_FOUND).json({
                erro: "Pessoa não encontrada."
            });
        }

        const getPessoaDto = PessoaDto.tranformarPessoaPrisma(pessoaEncontrada);

        return res.json(getPessoaDto);
    }
}
