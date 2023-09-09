import { Injectable } from '@nestjs/common';
import { PessoaRepository } from '../repositories/pessoas.repository';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';


@Injectable()
export class CreatePessoaCommandService{
  constructor( private pessoaRepository: PessoaRepository){}

  public execute(createPessoaDto: CreatePessoaDto){
    return this.pessoaRepository.salvarPessoa(createPessoaDto);
  }
}
