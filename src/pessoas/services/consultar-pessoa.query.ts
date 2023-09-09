import { Injectable } from "@nestjs/common";
import { PessoaRepository } from "../repositories/pessoas.repository";

@Injectable()

export class ConsultarPessoaQueryService {
    constructor( private pessoaRepository: PessoaRepository){}

    public async execute(id: string){
        return await this.pessoaRepository.consultarPessoa(id);
    }
}