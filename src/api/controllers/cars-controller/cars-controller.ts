import { Controller, Get, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetCarsDto } from 'src/api/controllers/cars-controller/dto/input/get-cars.dto';
import { GetCarsResponseDto } from 'src/api/controllers/cars-controller/dto/output/get-cars-response.dto';
import { CarsService } from 'src/features/cars/cars.service';

@Controller('/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/')
  async getCars(@Query() query: GetCarsDto): Promise<GetCarsResponseDto> {
    const carsList = await this.carsService.getCars(query);

    return carsList.map((car) => plainToClass(GetCarsResponseDto, car));
  }
}
