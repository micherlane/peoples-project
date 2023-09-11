import { PessoaRepository } from "../repositories/pessoas.repository";
export declare class CalcularPessoasCadastradasQueryService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    execute(): Promise<number>;
}
