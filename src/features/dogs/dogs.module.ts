import { Module } from '@nestjs/common';
import { DogsService } from 'src/features/dogs/dogs.service';
import { DogsRepository } from 'src/features/dogs/repoository/dogs.repository';

@Module({
  providers: [DogsRepository, DogsService],
  exports: [DogsRepository, DogsService],
})
export class DogsModule {}
