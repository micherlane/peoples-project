import { PessoaRepository } from "../repositories/pessoas.repository";
export declare class ConsultarPessoaQueryService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    execute(id: string): Promise<{
        id: string;
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
        created_at: Date;
        updated_at: Date;
    }>;
}
