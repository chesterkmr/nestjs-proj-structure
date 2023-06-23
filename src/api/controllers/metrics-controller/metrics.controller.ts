import { Controller, Get } from '@nestjs/common';
import { GetBunchOfMetricsExecutable } from 'src/use-cases/get-bunch-of-metrics/get-bunch-of-metrics.executable';

@Controller('/metrics')
export class MetricsController {
  constructor(
    private readonly getBunchOfMetricExecutable: GetBunchOfMetricsExecutable,
  ) {}

  @Get('/')
  async getMetrics() {
    return await this.getBunchOfMetricExecutable.execute();
  }
}
