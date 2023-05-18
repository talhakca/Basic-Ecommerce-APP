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
} from '../models';

/* repository imports */
import {
  DistributorRepository,
  CategoryRepository,
  ProductCategoryRepository,
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

  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('DistributorRepository')
    protected distributorRepositoryGetter: Getter<DistributorRepository>,

    @repository.getter('CategoryRepository')
    protected categoryRepositoryGetter: Getter<CategoryRepository>,

    @repository.getter('ProductCategoryRepository')
    protected productCategoryRepositoryGetter: Getter<ProductCategoryRepository>,

  ) {
    super(Product, dataSource);

    this.distributor = this.createBelongsToAccessorFor('distributor', distributorRepositoryGetter);
    this.registerInclusionResolver('distributor', this.distributor.inclusionResolver);

    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter);
    this.registerInclusionResolver('category', this.category.inclusionResolver);

  }
}
