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
  Comment,
  CommentRelations,
  Product,
  } from '../models';

/* repository imports */
import {
  ProductRepository,
  } from '.';


export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id,
  CommentRelations
> {
  public readonly commentOwner: BelongsToAccessor<Product, typeof Comment.prototype.id>;

    constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>,

    ) {
    super(Comment, dataSource);

    this.commentOwner = this.createBelongsToAccessorFor('commentOwner', productRepositoryGetter);
      this.registerInclusionResolver('commentOwner', this.commentOwner.inclusionResolver);

      }
}
