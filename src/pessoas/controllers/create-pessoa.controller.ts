import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { CreatePessoaCommandService } from '../services/create-pessoa.command';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PessoaDto } from '../dto/pessoa.dto';
import { UsuarioExistenteError } from '../err/usuario-cadastrado.err';

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
    type: PessoaDto
  })

  @Post("pessoas")
  async create(@Res() res, @Body() createPessoaDto: CreatePessoaDto) {
    if (!createPessoaDto.apelido || !createPessoaDto.nome || !createPessoaDto.nascimento) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        "erro": "conteúdo inválido"
      });
    }

    if((typeof createPessoaDto.nome !== "string") || (typeof createPessoaDto.apelido !== "string")){
      return res.status(HttpStatus.BAD_REQUEST).json({
        "erro": "conteúdo inválido"
      })
    }

    const novaPessoa = await this.createPessoaCommand.execute(createPessoaDto);

    if(novaPessoa instanceof UsuarioExistenteError){
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        error: novaPessoa.message
      })
    }
    
    const pessoaDto = PessoaDto.tranformarPessoaPrisma(novaPessoa);
    return res.json(pessoaDto);
  }


}
