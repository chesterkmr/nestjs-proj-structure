import { Injectable } from '@nestjs/common';
import { GetDogsQuery } from 'src/features/dogs/repoository/dogs-repository.types';
import { DogModel } from 'src/models/dog.model';

@Injectable()
export class DogsRepository {
  async findDogs(query: GetDogsQuery): Promise<DogModel[]> {
    return [];
  }
}
