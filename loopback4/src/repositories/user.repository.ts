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
  Wishlist, Cart, Address, Role
} from '../models';

/* repository imports */
import {
  ProductRepository,
  TaxRepository,
  WishlistRepository,
} from '.';
import { CartRepository } from './cart.repository';
import { AddressRepository } from './address.repository';
import { RoleRepository } from './role.repository';

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

  public readonly addresses: HasManyRepositoryFactory<Address, typeof User.prototype.id>;

  public readonly role: BelongsToAccessor<Role, typeof User.prototype.id>;

  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>,

    @repository.getter('TaxRepository')
    protected taxRepositoryGetter: Getter<TaxRepository>,

    @repository.getter('WishlistRepository')
    protected wishlistRepositoryGetter: Getter<WishlistRepository>, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,

  ) {
    super(User, dataSource);
    this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter,);
    this.registerInclusionResolver('role', this.role.inclusionResolver);
    this.addresses = this.createHasManyRepositoryFactoryFor('addresses', addressRepositoryGetter,);
    this.registerInclusionResolver('addresses', this.addresses.inclusionResolver);
    this.products = this.createHasManyThroughRepositoryFactoryFor('cart', productRepositoryGetter, cartRepositoryGetter,);
    this.registerInclusionResolver('cart', this.products.inclusionResolver);

    this.wishlist = this.createHasManyThroughRepositoryFactoryFor('wishlist', productRepositoryGetter, wishlistRepositoryGetter);
    this.registerInclusionResolver('wishlist', this.wishlist.inclusionResolver);

    this.tax = this.createBelongsToAccessorFor('tax', taxRepositoryGetter);
    this.registerInclusionResolver('tax', this.tax.inclusionResolver);

  }
}
