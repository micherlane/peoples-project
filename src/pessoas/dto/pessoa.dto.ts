import { ApiProperty } from "@nestjs/swagger";

export class PessoaDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly apelido: string;

    @ApiProperty()
    readonly nome: string;

    @ApiProperty()
    readonly nascimento: Date;

    @ApiProperty()
    readonly stack?: Array<string>;

    constructor(id: string, apelido:string, nome: string, nascimento: Date, stack?: Array<string>){
        this.id = id;
        this.apelido = apelido;
        this.nome = nome;
        this.nascimento = nascimento;
        this.stack = stack;
    }

    static tranformarPessoaPrisma(pessoaPrisma): PessoaDto {
        return new PessoaDto(pessoaPrisma.id, pessoaPrisma.apelido, pessoaPrisma.nome, pessoaPrisma.nascimento, pessoaPrisma.stack);
    }
}