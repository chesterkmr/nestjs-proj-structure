import { Injectable } from '@nestjs/common';
import { GetCarsQuery } from 'src/features/cars/repository/cars-repository.types';
import { CarModel } from 'src/models/car.model';

@Injectable()
export class CarsRepository {
  async findCars(query: GetCarsQuery): Promise<CarModel[]> {
    return [];
  }
}
