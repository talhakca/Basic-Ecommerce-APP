import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { ELearningDataSource } from '../datasources';
import { Address, AddressRelations } from '../models';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.id,
  AddressRelations
> {
  constructor(
    @inject('datasources.') dataSource: ELearningDataSource,
  ) {
    super(Address, dataSource);
  }
}
