import { Route } from '../../../domain/route.entity';
import { EntitySchema } from 'typeorm';

export const RouteSchema = new EntitySchema<Route>({
  name: 'Route',
  target: Route,
  columns: {
    id: { type: 'uuid', primary: true },
    title: { type: String, length: 255 },
    startPosition: { type: 'simple-json' },
    endPosition: { type: 'simple-json' },
    points: { type: 'simple-json' },
  },
});
