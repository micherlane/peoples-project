import { ConsultarPessoaQueryService } from "../services/consultar-pessoa.query";
export declare class ConsultarPessoaController {
    private readonly consultarPessoaQuery;
    constructor(consultarPessoaQuery: ConsultarPessoaQueryService);
    consultarPessoa(res: any, id: string): Promise<any>;
}
