import { CreatePessoaDto } from "../dto/create-pessoa.dto";
import { UsuarioExistenteError } from "../err/usuario-cadastrado.err";
export declare class PessoaRepository {
    salvarPessoa(pessoa: CreatePessoaDto): Promise<UsuarioExistenteError | {
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
        nascimento: Date;
        stack: string[];
        id: string;
    }[]>;
    getTotalDePessoasCadastradas(): Promise<number>;
}
