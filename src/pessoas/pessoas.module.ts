import { Module } from '@nestjs/common';
import { CreatePessoaCommandService} from './services/create-pessoa.command';
import { CreatePessoaController } from './controllers/create-pessoa.controller';
import { PessoaRepository } from './repositories/pessoas.repository';
import { ConsultarPessoaController } from './controllers/consultar-pessoa.controller';
import { ConsultarPessoaQueryService } from './services/consultar-pessoa.query';

@Module({
  controllers: [CreatePessoaController, ConsultarPessoaController],
  providers: [CreatePessoaCommandService, ConsultarPessoaQueryService, PessoaRepository],
})
export class PessoasModule {}
