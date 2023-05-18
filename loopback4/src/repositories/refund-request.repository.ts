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
  RefundRequest,
  RefundRequestRelations,
  } from '../models';

/* repository imports */


export class RefundRequestRepository extends DefaultCrudRepository<
  RefundRequest,
  typeof RefundRequest.prototype.id,
  RefundRequestRelations
> {
  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    ) {
    super(RefundRequest, dataSource);

    }
}
