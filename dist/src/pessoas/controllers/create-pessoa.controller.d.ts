import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { CreatePessoaCommandService } from '../services/create-pessoa.command';
export declare class CreatePessoaController {
    private readonly createPessoaCommand;
    constructor(createPessoaCommand: CreatePessoaCommandService);
    create(res: any, createPessoaDto: CreatePessoaDto): Promise<any>;
}
