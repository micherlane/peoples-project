import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { CreatePessoaCommandService } from '../services/create-pessoa.command';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPessoaDto } from '../dto/get-pessoa.dto';

@ApiTags('pessoas')

@Controller({
  version: "1"
})

export class CreatePessoaController {
  constructor(
    private readonly createPessoaCommand: CreatePessoaCommandService,
  ) { }

  @ApiBody({ 
    type: CreatePessoaDto,
    description: 'Cria uma nova pessoa'
  })
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: GetPessoaDto
  })

  @Post("pessoas")
  create(@Res() res, @Body() createPessoaDto: CreatePessoaDto) {
    if (!createPessoaDto.apelido || !createPessoaDto.nome || !createPessoaDto.nascimento) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        "erro": "conteúdo inválido"
      });
    }

    if((typeof createPessoaDto.nome !== "string") || (typeof createPessoaDto.apelido !== "string")){
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        "erro": "conteúdo inválido"
      })
    }

    const novaPessoa = this.createPessoaCommand.execute(createPessoaDto);
    
    return res.json(novaPessoa);
  }


}
