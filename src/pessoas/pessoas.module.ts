import { Module } from '@nestjs/common';
import { CreatePessoaCommandService} from './services/create-pessoa.command';
import { CreatePessoaController } from './controllers/create-pessoa.controller';
import { PessoaRepository } from './repositories/pessoas.repository';
import { ConsultarPessoaController } from './controllers/consultar-pessoa.controller';
import { ConsultarPessoaQueryService } from './services/consultar-pessoa.query';
import { BuscarPorTermoPessoaController } from './controllers/buscar-por-termo-pessoa.controller';
import { BuscarPorTermoQueryService } from './services/buscar-por-termo-pessoa.query';

@Module({
  controllers: [CreatePessoaController, ConsultarPessoaController, BuscarPorTermoPessoaController],
  providers: [CreatePessoaCommandService, ConsultarPessoaQueryService, BuscarPorTermoQueryService, PessoaRepository],
})
export class PessoasModule {}
