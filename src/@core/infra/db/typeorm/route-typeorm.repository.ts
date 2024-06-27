import { Route } from '../../../../@core/domain/route.entity';
import { RouteRepositoryInterface } from '../../../../@core/domain/route.repository';
import { Repository } from 'typeorm';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private readonly repository: Repository<Route>) {}
  async insert(route: Route): Promise<void> {
    await this.repository.save(route);
  }
  findAll(): Promise<Route[]> {
    return this.repository.find();
  }
}
