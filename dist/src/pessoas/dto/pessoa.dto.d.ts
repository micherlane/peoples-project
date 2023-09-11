export declare class PessoaDto {
    readonly id: string;
    readonly apelido: string;
    readonly nome: string;
    readonly nascimento: Date;
    readonly stack?: Array<string>;
    constructor(id: string, apelido: string, nome: string, nascimento: Date, stack?: Array<string>);
    static tranformarPessoaPrisma(pessoaPrisma: any): PessoaDto;
}
