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
  Product, User} from '../models';

/* repository imports */
import {
  ProductRepository,
  } from '.';
import {UserRepository} from './user.repository';

export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id,
  CommentRelations
> {
  public readonly commentOwner: BelongsToAccessor<Product, typeof Comment.prototype.id>;

  public readonly user: BelongsToAccessor<User, typeof Comment.prototype.id>;

    constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,

    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,

    ) {
    super(Comment, dataSource);
      this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
      this.registerInclusionResolver('user', this.user.inclusionResolver);

    this.commentOwner = this.createBelongsToAccessorFor('commentOwner', productRepositoryGetter);
      this.registerInclusionResolver('commentOwner', this.commentOwner.inclusionResolver);

      }
}
