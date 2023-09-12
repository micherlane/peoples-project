import { UsuarioExistenteError } from "../err/usuario-cadastrado.err";
import { PessoaEntity } from "../entities/pessoa.entity";
export declare class PessoaRepository {
    salvarPessoa(pessoa: PessoaEntity): Promise<UsuarioExistenteError | {
        id: string;
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
        created_at: Date;
        updated_at: Date;
    }>;
    consultarPessoa(id: string): Promise<{
        id: string;
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
        created_at: Date;
        updated_at: Date;
    }>;
    private criarCondicaoBusca;
    buscarPorTermoPessoa(termo: string): Promise<{
        apelido: string;
        nome: string;
        stack: string[];
        id: string;
        nascimento: Date;
    }[]>;
    getTotalDePessoasCadastradas(): Promise<number>;
}
