import { Getter, inject } from '@loopback/core';
import {
  repository,
  DefaultCrudRepository,
  BelongsToAccessor,
  HasOneRepositoryFactory,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory
} from '@loopback/repository';

/* datasource imports */
import { ELearningDataSource } from '../datasources';

/* model imports */
import {
  Delivery,
  DeliveryRelations,
  } from '../models';

/* repository imports */


export class DeliveryRepository extends DefaultCrudRepository<
  Delivery,
  typeof Delivery.prototype.id,
  DeliveryRelations
> {
  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    ) {
    super(Delivery, dataSource);

    }
}
