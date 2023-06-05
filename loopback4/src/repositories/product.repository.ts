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
  Product,
  ProductRelations,
  Distributor,
  Category,
  ProductCategory,
  Cart,
  User,
} from '../models';

/* repository imports */
import {
  DistributorRepository,
  CategoryRepository,
  ProductCategoryRepository,
  UserRepository,
  CartRepository,
} from '.';


export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  public readonly distributor: BelongsToAccessor<Distributor, typeof Product.prototype.id>;

  public readonly category: BelongsToAccessor<
    Category,
    typeof Product.prototype.id
  >;

  public readonly products: HasManyThroughRepositoryFactory<
    User, typeof User.prototype.id,
    Cart,
    typeof Product.prototype.id
  >;


  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('DistributorRepository')
    protected distributorRepositoryGetter: Getter<DistributorRepository>,

    @repository.getter('CategoryRepository')
    protected categoryRepositoryGetter: Getter<CategoryRepository>,

    @repository.getter('ProductCategoryRepository')
    protected productCategoryRepositoryGetter: Getter<ProductCategoryRepository>,

    @repository.getter('UserRepository')
    protected userRepositoryGetter: Getter<UserRepository>,

    @repository.getter('CartRepository')
    protected cartRepositoryGetter: Getter<CartRepository>,

  ) {
    super(Product, dataSource);

    this.distributor = this.createBelongsToAccessorFor('distributor', distributorRepositoryGetter);
    this.registerInclusionResolver('distributor', this.distributor.inclusionResolver);

    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter);
    this.registerInclusionResolver('category', this.category.inclusionResolver);

    this.products = this.createHasManyThroughRepositoryFactoryFor('cart', userRepositoryGetter, cartRepositoryGetter,);
    this.registerInclusionResolver('cart', this.products.inclusionResolver);

  }
}
