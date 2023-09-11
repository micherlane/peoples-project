import { PessoaRepository } from "../repositories/pessoas.repository";
export declare class BuscarPorTermoQueryService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    execute(termo: string): Promise<{
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
        id: string;
    }[]>;
}
