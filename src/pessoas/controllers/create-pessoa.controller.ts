import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { CreatePessoaCommandService } from '../services/create-pessoa.command';

@Controller({
  version: "1"
})

export class CreatePessoaController {
  constructor(
    private readonly createPessoaCommand: CreatePessoaCommandService,
  ) { }

  @Post("pessoas")
  create(@Res() res, @Body() createPessoaDto: CreatePessoaDto) {
    if (!createPessoaDto.apelido || !createPessoaDto.nome || !createPessoaDto.nascimento) {
      return res.status(422).json({
        "erro": "conteúdo inválido"
      });
    }

    if((typeof createPessoaDto.nome !== "string") || (typeof createPessoaDto.apelido !== "string")){
      return res.status(422).json({
        "erro": "conteúdo inválido"
      })
    }

    const novaPessoa = this.createPessoaCommand.execute(createPessoaDto);
    
    return res.json(novaPessoa);
  }


}
