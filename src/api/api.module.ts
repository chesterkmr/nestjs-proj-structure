import { Module } from '@nestjs/common';
import { CarsController } from 'src/api/controllers/cars-controller/cars-controller';
import { DogsController } from 'src/api/controllers/dogs-controller/dogs.controller';
import { CarsModule } from 'src/features/cars/cars.module';
import { DogsModule } from 'src/features/dogs/dogs.module';
import { GetBunchOfMetricsExecutable } from 'src/use-cases/get-bunch-of-metrics/get-bunch-of-metrics.executable';

@Module({
  imports: [DogsModule, CarsModule, GetBunchOfMetricsExecutable],
  controllers: [DogsController, CarsController],
})
export class ApiModule {}
