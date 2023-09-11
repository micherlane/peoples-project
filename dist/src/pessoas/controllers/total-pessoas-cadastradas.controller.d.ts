import { CalcularPessoasCadastradasQueryService } from "../services/calcular-pessoas-cadastradas.query";
export declare class TotalPessoasCadastradasController {
    private readonly totalPessoaCadastradasQuery;
    constructor(totalPessoaCadastradasQuery: CalcularPessoasCadastradasQueryService);
    totalPessoasCadastradas(): Promise<number>;
}
