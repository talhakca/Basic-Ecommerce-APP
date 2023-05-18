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
  ProductCategory,
  ProductCategoryRelations,
  Product,
  Category,
  } from '../models';

/* repository imports */
import {
  ProductRepository,
  CategoryRepository,
  } from '.';


export class ProductCategoryRepository extends DefaultCrudRepository<
  ProductCategory,
  typeof ProductCategory.prototype.id,
  ProductCategoryRelations
> {
  public readonly product: BelongsToAccessor<Product, typeof ProductCategory.prototype.id>;

    public readonly category: BelongsToAccessor<Category, typeof ProductCategory.prototype.id>;

    constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>,

    @repository.getter('CategoryRepository')
    protected categoryRepositoryGetter: Getter<CategoryRepository>,

    ) {
    super(ProductCategory, dataSource);

    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
      this.registerInclusionResolver('product', this.product.inclusionResolver);

      this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter);
      this.registerInclusionResolver('category', this.category.inclusionResolver);

      }
}
