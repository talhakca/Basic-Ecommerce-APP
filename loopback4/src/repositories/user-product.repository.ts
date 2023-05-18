import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { ELearningDataSource } from '../datasources';
import { UserProduct, UserProductRelations } from '../models';

export class UserProductRepository extends DefaultCrudRepository<
  UserProduct,
  typeof UserProduct.prototype.id,
  UserProductRelations
> {
  constructor(
    @inject('datasources.') dataSource: ELearningDataSource,
  ) {
    super(UserProduct, dataSource);
  }
}
