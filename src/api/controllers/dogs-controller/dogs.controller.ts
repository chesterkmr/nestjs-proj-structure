import { Controller, Get, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetDogsDto } from 'src/api/controllers/dogs-controller/dto/input/get-dogs.dto';
import { GetDogsReponseDto } from 'src/api/controllers/dogs-controller/dto/output/get-dogs-reponse.dto';
import { DogsService } from 'src/features/dogs/dogs.service';

@Controller('/dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get('/')
  async getDogs(@Query() query: GetDogsDto): Promise<GetDogsReponseDto> {
    const dogsList = await this.dogsService.getDogs(query);

    return dogsList.map((dog) => plainToClass(GetDogsReponseDto, dog));
  }
}
