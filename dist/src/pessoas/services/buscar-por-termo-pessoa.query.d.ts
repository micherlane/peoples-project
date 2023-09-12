import { PessoaRepository } from "../repositories/pessoas.repository";
export declare class BuscarPorTermoQueryService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    execute(termo: string): Promise<{
        apelido: string;
        nome: string;
        stack: string[];
        id: string;
        nascimento: Date;
    }[]>;
}
