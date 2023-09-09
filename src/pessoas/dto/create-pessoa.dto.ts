import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePessoaDto {
    @ApiProperty()
    @IsNotEmpty()
    apelido: string;

    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    nascimento: Date;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    stack?: Array<string> = [];
}
