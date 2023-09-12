import { Injectable } from '@nestjs/common';
import { PessoaRepository } from '../repositories/pessoas.repository';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { PessoaEntity } from '../entities/pessoa.entity';


@Injectable()
export class CreatePessoaCommandService {
  constructor(private pessoaRepository: PessoaRepository) { }

  public async execute(createPessoaDto: CreatePessoaDto) {
    const novaPessoa = new PessoaEntity(null, createPessoaDto.apelido, createPessoaDto.nome, createPessoaDto.nascimento, createPessoaDto.stack,);
    return await this.pessoaRepository.salvarPessoa(novaPessoa);
  }
}
