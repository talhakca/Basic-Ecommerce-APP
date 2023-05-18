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
  Wishlist,
  WishlistRelations,
  User,
  Product,
  } from '../models';

/* repository imports */
import {
  UserRepository,
  ProductRepository,
  } from '.';


export class WishlistRepository extends DefaultCrudRepository<
  Wishlist,
  typeof Wishlist.prototype.id,
  WishlistRelations
> {
  public readonly user: BelongsToAccessor<User, typeof Wishlist.prototype.id>;

    public readonly product: BelongsToAccessor<Product, typeof Wishlist.prototype.id>;

    constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('UserRepository')
    protected userRepositoryGetter: Getter<UserRepository>,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>,

    ) {
    super(Wishlist, dataSource);

    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
      this.registerInclusionResolver('user', this.user.inclusionResolver);

      this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
      this.registerInclusionResolver('product', this.product.inclusionResolver);

      }
}
