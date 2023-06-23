import { Injectable } from '@nestjs/common';
import { GetCarsParams } from 'src/features/cars/cars.types';
import { GetCarsQuery } from 'src/features/cars/repository/cars-repository.types';
import { CarsRepository } from 'src/features/cars/repository/cars.repository';
import { CarModel } from 'src/models/car.model';

@Injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}

  async getCars(params: GetCarsParams): Promise<CarModel[]> {
    const query = {
      ...params,
    } as GetCarsQuery;

    return await this.carsRepository.findCars(query);
  }

  async getMetrics(): Promise<any> {
    return {};
  }
}
