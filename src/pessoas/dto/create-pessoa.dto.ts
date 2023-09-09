import { IsArray, IsDateString, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePessoaDto {
    @IsNotEmpty()
    apelido: string;

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    @IsDateString()
    nascimento: Date;

    @IsArray()
    @IsOptional()
    stack?: Array<string> = [];
}
