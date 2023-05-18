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
  Tax,
  TaxRelations,
  } from '../models';

/* repository imports */


export class TaxRepository extends DefaultCrudRepository<
  Tax,
  typeof Tax.prototype.id,
  TaxRelations
> {
  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    ) {
    super(Tax, dataSource);

    }
}
