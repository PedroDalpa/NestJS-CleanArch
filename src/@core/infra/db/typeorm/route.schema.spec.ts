import { DataSource, Repository } from 'typeorm';
import { RouteSchema } from './route.schema';
import { Route } from '../../../domain/route.entity';

let repository: Repository<Route>;
let dataSource: DataSource;
describe('RouteSchema suite', () => {
  beforeAll(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [RouteSchema],
    });

    await dataSource.initialize();

    repository = dataSource.getRepository(Route);
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

    await repository.save(route);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });
});
