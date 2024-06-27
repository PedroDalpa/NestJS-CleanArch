import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';
import { Route } from '../../../domain/route.entity';
import { RouteTypeOrmRepository } from './route-typeorm.repository';

let repository: RouteTypeOrmRepository;
let dataSource: DataSource;
describe(' RouteTypeOrmRepository suite', () => {
  beforeAll(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [RouteSchema],
    });

    await dataSource.initialize();

    repository = new RouteTypeOrmRepository(dataSource.getRepository(Route));
  });
  it('create', async () => {
    const route = Route.create({
      title: 'Test Route',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [
        { lat: 2, lng: 3 },
        { lat: 4, lng: 5 },
      ],
    });

    await repository.insert(route);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });
});
