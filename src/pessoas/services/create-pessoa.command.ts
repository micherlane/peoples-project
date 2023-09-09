import { Injectable } from '@nestjs/common';
import { PessoaRepository } from '../repositories/pessoas.repository';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';


@Injectable()
export class CreatePessoaCommandService{
  constructor( private pessoaRepository: PessoaRepository){}

  public async execute(createPessoaDto: CreatePessoaDto){
    return await this.pessoaRepository.salvarPessoa(createPessoaDto);
  }
}
