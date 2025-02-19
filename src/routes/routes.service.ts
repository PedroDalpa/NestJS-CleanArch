import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

@Injectable()
export class RoutesService {
  constructor(
    private readonly createUseCase: CreateRouteUseCase,
    private readonly listAllRouteUseCase: ListAllRoutesUseCase,
  ) {}
  create(createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  findAll() {
    return this.listAllRouteUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
