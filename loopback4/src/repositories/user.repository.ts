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
  User,
  UserRelations,
  Product,
  Tax,
  Wishlist, Cart
} from '../models';

/* repository imports */
import {
  ProductRepository,
  TaxRepository,
  WishlistRepository,
} from '.';
import { CartRepository } from './cart.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly wishlist: HasManyThroughRepositoryFactory<
    Product,
    typeof Product.prototype.id,
    Wishlist,
    typeof User.prototype.id
  >;

  public readonly tax: BelongsToAccessor<Tax, typeof User.prototype.id>;

  public readonly products: HasManyThroughRepositoryFactory<
    Product, typeof Product.prototype.id,
    Cart,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>,

    @repository.getter('TaxRepository')
    protected taxRepositoryGetter: Getter<TaxRepository>,

    @repository.getter('WishlistRepository')
    protected wishlistRepositoryGetter: Getter<WishlistRepository>, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>,

  ) {
    super(User, dataSource);
    this.products = this.createHasManyThroughRepositoryFactoryFor('cart', productRepositoryGetter, cartRepositoryGetter,);
    this.registerInclusionResolver('cart', this.products.inclusionResolver);

    this.wishlist = this.createHasManyThroughRepositoryFactoryFor('wishlist', productRepositoryGetter, wishlistRepositoryGetter);
    this.registerInclusionResolver('wishlist', this.wishlist.inclusionResolver);

    this.tax = this.createBelongsToAccessorFor('tax', taxRepositoryGetter);
    this.registerInclusionResolver('tax', this.tax.inclusionResolver);

  }
}
