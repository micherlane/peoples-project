import { BuscarPorTermoQueryService } from "../services/buscar-por-termo-pessoa.query";
export declare class BuscarPorTermoPessoaController {
    private readonly buscarPorTermoPessoaService;
    constructor(buscarPorTermoPessoaService: BuscarPorTermoQueryService);
    buscarPorTermoPessoa(res: any, t: string): Promise<any>;
}
