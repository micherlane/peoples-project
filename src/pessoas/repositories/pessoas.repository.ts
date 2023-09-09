import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "../dto/create-pessoa.dto";
import { PessoaEntity } from "../entities/pessoa.entity";
import { v4 as uuidv4 } from 'uuid';
import { UsuarioExistenteError } from "../err/usuario-cadastrado.err";

@Injectable()
export class PessoaRepository {
    private pessoas: PessoaEntity[] = [];

    private existePessoa(apelido: string){
        const apelidoEncontrado = this.pessoas.find((pessoa) => pessoa.apelido === apelido);
        return apelidoEncontrado;
    }

    public salvarPessoa(pessoa: CreatePessoaDto) {
        if(this.existePessoa(pessoa.apelido)){
            return new UsuarioExistenteError();
        }

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