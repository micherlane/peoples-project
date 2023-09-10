import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "../dto/create-pessoa.dto";
import { UsuarioExistenteError } from "../err/usuario-cadastrado.err";

import prismaClient from '../../prisma';

enum ColunasBusca {
    apelido = "apelido",
    nome = "nome",
    stack = "stack"
}

interface PessoaCondicao {
    OR?: { [key: string ] : any } [];
}

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

    private criarCondicaoBusca(termo: string): PessoaCondicao{
        const condicao: PessoaCondicao = {};

        condicao.OR = Object.keys(ColunasBusca).map((key) => {
            const coluna = ColunasBusca[key];

            const condicaoColuna: any = {};

            if (coluna === "stack"){
                condicaoColuna[coluna] = { hasSome: [termo]}
            } else {
                condicaoColuna[coluna] = { contains: termo };
            }

            return condicaoColuna;
        })

        return condicao;
    }

    public async buscarPorTermoPessoa(termo: string){
        const condicao = this.criarCondicaoBusca(termo);
        
        const pessoasEncontradas = await prismaClient.pessoa.findMany({
            where: condicao,
            select: {
                id: true,
                apelido: true,
                nome: true,
                nascimento: true,
                stack: true
            }
        });

        return pessoasEncontradas;
    }
}