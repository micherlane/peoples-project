import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "../dto/create-pessoa.dto";
import { PessoaEntity } from "../entities/pessoa.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PessoaRepository {
    private pessoas: PessoaEntity[] = [];

    public salvarPessoa(pessoa: CreatePessoaDto) {
        const id = uuidv4();

        const novaPessoa = new PessoaEntity(
            id,
            pessoa.apelido,
            pessoa.nome,
            pessoa.nascimento,
            pessoa.stack
        );

        this.pessoas.push(novaPessoa);

        return novaPessoa;
    }
}