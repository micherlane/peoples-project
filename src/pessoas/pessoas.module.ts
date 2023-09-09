import { Module } from '@nestjs/common';
import { CreatePessoaCommandService} from './services/create-pessoa.command';
import { CreatePessoaController } from './controllers/create-pessoa.controller';
import { PessoaRepository } from './repositories/pessoas.repository';

@Module({
  controllers: [CreatePessoaController],
  providers: [CreatePessoaCommandService, PessoaRepository],
})
export class PessoasModule {}
