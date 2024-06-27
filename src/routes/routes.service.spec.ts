import { Test, TestingModule } from '@nestjs/testing';
import { RoutesService } from './routes.service';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

describe.only('RoutesService', () => {
  let service: RoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<RoutesService>(RoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
