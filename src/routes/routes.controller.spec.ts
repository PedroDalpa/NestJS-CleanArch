import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [
        RoutesService,
        {
          provide: RouteInMemoryRepository,
          useClass: RouteInMemoryRepository,
        },
        {
          provide: CreateRouteUseCase,
          useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new CreateRouteUseCase(routeRepo);
          },
          inject: [RouteInMemoryRepository],
        },
        {
          provide: ListAllRoutesUseCase,
          useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new ListAllRoutesUseCase(routeRepo);
          },
          inject: [RouteInMemoryRepository],
        },
      ],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
