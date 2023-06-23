import { Module } from '@nestjs/common';
import { SharedRepository } from 'src/repositories/shared-repository/shared-repository.repository';

@Module({
  providers: [SharedRepository],
  exports: [SharedRepository],
})
export class SharedRepositoryModule {}
