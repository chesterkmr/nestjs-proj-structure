import { Module } from '@nestjs/common';
import { CarsModule } from 'src/features/cars/cars.module';
import { DogsModule } from 'src/features/dogs/dogs.module';
import { GetBunchOfMetricsExecutable } from 'src/use-cases/get-bunch-of-metrics/get-bunch-of-metrics.executable';

@Module({
  imports: [DogsModule, CarsModule],
  providers: [GetBunchOfMetricsExecutable],
  exports: [GetBunchOfMetricsExecutable],
})
export class GetBunchOfMetricsModule {}
