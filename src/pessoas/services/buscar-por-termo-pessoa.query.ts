import { Injectable } from "@nestjs/common";
import { PessoaRepository } from "../repositories/pessoas.repository";

@Injectable()

export class BuscarPorTermoQueryService {
    constructor(private pessoaRepository: PessoaRepository){}

    public async execute(termo: string){
        return await this.pessoaRepository.buscarPorTermoPessoa(termo);
    }
}