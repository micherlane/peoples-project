import { ApiProperty } from "@nestjs/swagger";

export class GetPessoaDto {
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
}