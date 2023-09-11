import { PessoaRepository } from '../repositories/pessoas.repository';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
export declare class CreatePessoaCommandService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    execute(createPessoaDto: CreatePessoaDto): Promise<import("../err/usuario-cadastrado.err").UsuarioExistenteError | {
        id: string;
        apelido: string;
        nome: string;
        nascimento: Date;
        stack: string[];
        created_at: Date;
        updated_at: Date;
    }>;
}
