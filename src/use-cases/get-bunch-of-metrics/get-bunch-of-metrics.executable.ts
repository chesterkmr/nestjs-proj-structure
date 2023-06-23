import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/features/cars/cars.service';
import { DogsService } from 'src/features/dogs/dogs.service';
import { Executable } from 'src/use-cases/executable.interface';
import { MetricEntity } from 'src/use-cases/get-bunch-of-metrics/entities/metric.entity';

@Injectable()
export class GetBunchOfMetricsExecutable implements Executable {
  constructor(
    private readonly dogsService: DogsService,
    private readonly carsService: CarsService,
  ) {}

  execute(): Promise<MetricEntity[]> {
    const bunchOfMetrics = Promise.all([
      this.dogsService.getMetrics(),
      this.carsService.getMetrics(),
    ]);

    return bunchOfMetrics;
  }
}
