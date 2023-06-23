import { Module } from '@nestjs/common';
import { CarsService } from 'src/features/cars/cars.service';
import { CarsRepository } from 'src/features/cars/repository/cars.repository';

@Module({
  providers: [CarsRepository, CarsService],
  exports: [CarsService],
})
export class CarsModule {}
