import { Injectable } from '@nestjs/common';
import { GetDogsParams } from 'src/features/dogs/dogs.types';
import { GetDogsQuery } from 'src/features/dogs/repoository/dogs-repository.types';
import { DogsRepository } from 'src/features/dogs/repoository/dogs.repository';
import { DogModel } from 'src/models/dog.model';

@Injectable()
export class DogsService {
  constructor(private readonly dogsRepository: DogsRepository) {}

  async getDogs(params: GetDogsParams): Promise<DogModel[]> {
    const query = {
      ...params,
    } as GetDogsQuery;

    return await this.dogsRepository.findDogs(query);
  }

  async getMetrics(): Promise<any> {
    return {};
  }
}
