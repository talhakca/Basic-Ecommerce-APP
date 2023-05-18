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
  Distributor,
  DistributorRelations,
  } from '../models';

/* repository imports */


export class DistributorRepository extends DefaultCrudRepository<
  Distributor,
  typeof Distributor.prototype.id,
  DistributorRelations
> {
  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    ) {
    super(Distributor, dataSource);

    }
}
