import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "../dto/create-pessoa.dto";
import { UsuarioExistenteError } from "../err/usuario-cadastrado.err";

import prismaClient from '../../prisma';

@Injectable()
export class PessoaRepository {

    public async salvarPessoa(pessoa: CreatePessoaDto) {

        const usuarioJaExiste = await prismaClient.pessoa.findFirst({
            where: {
                apelido: pessoa.apelido,
            }
        });

        if(usuarioJaExiste){
            return new UsuarioExistenteError();
        }

        const novaPessoa = await prismaClient.pessoa.create({
            data: {
                apelido: pessoa.apelido,
                nome: pessoa.nome,
                nascimento: new Date(pessoa.nascimento),
                stack: pessoa.stack || [],
            }
        });

        return novaPessoa;
    }

    public async consultarPessoa(id: string){
        const pessoa = await prismaClient.pessoa.findFirst({
            where: {
                id: id
            }
        });

        return pessoa;
    }
}