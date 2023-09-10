import { Injectable } from "@nestjs/common";
import { PessoaRepository } from "../repositories/pessoas.repository";

@Injectable()

export class CalcularPessoasCadastradasQueryService {
    constructor(private pessoaRepository: PessoaRepository){}

    public async execute(){
        return await this.pessoaRepository.getTotalDePessoasCadastradas();
    }
}