/* angular */
import { createAction, props } from '@ngrx/store';
import { create } from 'lodash';
import { Address, Cart, CartWithRelations, Category, CommentWithRelations, Distributor, DistributorWithRelations, NewCategory, NewComment, NewDistributor, NewOrder, NewProduct, Order, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',
  GetProducts = '[APP] GetProducts',
  GetProductsSuccessful = '[APP] GetProductsSuccessful',
  GetCategoriesSuccessful = '[APP] GetCategoriesSuccessful',
  GetDistributorsSuccessful = '[APP] GetDistributorsSuccessful',
  AddToCart = '[APP] AddToCart',
  GetCart = '[APP] GetCart',
  GetCartSuccessful = '[APP] GetCartSuccessful',
  AddToCartSuccessful = '[APP] AddToCartSuccessful',
  CreateOrder = '[APP] CreateOrder',
  CreateOrderSuccessful = '[APP] CreateOrderSuccessful',
  GetOrdersSuccessful = '[APP] GetOrdersSuccessful',
  GetOrders = '[APP] GetOrders',
  UpdateProductRate = '[APP] UpdateProductRate',
  UpdateProduct = '[APP] UpdateProduct',
  UpdateProductSuccessful = '[APP] UpdateProductSuccessful',
  UpdateProductRateSuccessful = '[APP] UpdateProductRateSuccessful',
  CreateComment = '[APP] CreateComment',
  CreateCommentSuccessful = '[APP] CreateCommentSuccessful',
  UpdateComment = '[APP] UpdateComment',
  UpdateCommentSuccessful = '[APP] UpdateCommentSuccessful',
  UpdateCart = '[APP] UpdateCart',
  UpdateCartSuccessful = '[APP] UpdateCartSuccessful',
  CreateCategory = '[APP] CreateCategory',
  CreateCategorySuccessful = '[APP] CreateCategorySuccessful',
  DeleteCategory = '[APP] DeleteCategory',
  DeleteCategorySuccessful = '[APP] DeleteCategorySuccessful',
  UpdateCategory = '[APP] UpdateCategory',
  UpdateCategorySuccessful = '[APP] UpdateCategorySuccessful',
  CreateProduct = '[APP] CreateProduct',
  CreateProductSuccessful = '[APP] CreateProductSuccessful',
  DeleteProduct = '[APP] DeleteProduct',
  DeleteProductSuccessful = '[APP] DeleteProductSuccessful',
  RefundCarts = '[APP] RefundCarts',
  RefundCartsSuccessful = '[APP] RefundCartsSuccessful',
  UpdateOrder = '[APP] UpdateOrder',
  UpdateOrderSuccessful = '[APP] UpdateOrderSuccessful',
  GetAddresses = '[APP] GetAddresses',
  GetAddressesSuccessful = '[APP] GetAddressesSuccessful',
  GetAdminOrdersSuccessful = '[APP] GetAdminOrdersSuccessful',
  CreateDistributor = '[APP] AddDistributor',
  CreateDistributorSuccessful = '[APP] AddDistributorSuccessful',
  DeleteDistributor = '[APP] DeleteDistributor',
  DeleteDistributorSuccessful = '[APP] DeleteDistributorSuccessful',
  UpdateDistributor = '[APP] UpdateDistributor',
  UpdateDistributorSuccessful = '[APP] UpdateDistributorSuccessful'
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);

export const GetProducts = createAction(ActionTypes.GetProducts)

export const GetProductsSuccessful = createAction(ActionTypes.GetProductsSuccessful, props<{ payload: { products: ProductWithRelations[] } }>());
export const UpdateComment = createAction(ActionTypes.UpdateComment, props<{ payload: { id: string, comment: Partial<CommentWithRelations>, productId: string } }>());
export const UpdateCommentSuccessful = createAction(ActionTypes.UpdateCommentSuccessful, props<{ payload: { id: string, comment: CommentWithRelations, productId: string } }>());
export const CreateComment = createAction(ActionTypes.CreateComment, props<{ payload: { comment: NewComment } }>());
export const CreateCommentSuccessful = createAction(ActionTypes.CreateCommentSuccessful, props<{ payload: { comment: CommentWithRelations } }>());
export const UpdateProductRate = createAction(ActionTypes.UpdateProductRate, props<{ payload: { productId: string, rating: number } }>());
export const UpdateProductRateSuccessful = createAction(ActionTypes.UpdateProductRateSuccessful);
export const UpdateProduct = createAction(ActionTypes.UpdateProduct, props<{ payload: { id: string, updatedProduct: Partial<ProductWithRelations> } }>());
export const UpdateProductSuccessful = createAction(ActionTypes.UpdateProductSuccessful, props<{ payload: { id: string, updatedProduct: Partial<Product> } }>());
export const UpdateCart = createAction(ActionTypes.UpdateCart, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateCartSuccessful = createAction(ActionTypes.UpdateCartSuccessful, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateOrder = createAction(ActionTypes.UpdateOrder, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const UpdateOrderSuccessful = createAction(ActionTypes.UpdateOrderSuccessful, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const CreateOrder = createAction(ActionTypes.CreateOrder, props<{ payload: { order: NewOrder } }>());
export const CreateOrderSuccessful = createAction(ActionTypes.CreateOrderSuccessful, props<{ payload: { order: Order } }>());
export const GetOrdersSuccessful = createAction(ActionTypes.GetOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetOrders = createAction(ActionTypes.GetOrders);
export const GetAddressesSuccessful = createAction(ActionTypes.GetAddressesSuccessful, props<{ payload: { addresses: Address[] } }>());
export const GetAddresses = createAction(ActionTypes.GetAddresses);
export const GetAdminOrdersSuccessful = createAction(ActionTypes.GetAdminOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetCategoriesSuccessful = createAction(ActionTypes.GetCategoriesSuccessful, props<{ payload: { categories: Category[] } }>());
export const GetDistributorsSuccessful = createAction(ActionTypes.GetDistributorsSuccessful, props<{ payload: { distributors: DistributorWithRelations[] } }>());
export const AddToCart = createAction(ActionTypes.AddToCart, props<{ payload: { productId: string } }>());
export const GetCart = createAction(ActionTypes.GetCart);
export const GetCartSuccessful = createAction(ActionTypes.GetCartSuccessful, props<{ payload: { cart: CartWithRelations[], adminCart: CartWithRelations[] } }>());
export const AddToCartSuccessful = createAction(ActionTypes.AddToCartSuccessful, props<{ payload: { cart: CartWithRelations } }>());
export const CreateCategory = createAction(ActionTypes.CreateCategory, props<{ payload: { category: NewCategory } }>());
export const CreateCategorySuccessful = createAction(ActionTypes.CreateCategorySuccessful, props<{ payload: { category: Category } }>());
export const DeleteCategory = createAction(ActionTypes.DeleteCategory, props<{ payload: { deletedCategoryId } }>());
export const DeleteCategorySuccessful = createAction(ActionTypes.DeleteCategorySuccessful, props<{ payload: { deletedCategoryId: string } }>());
export const DeleteProductSuccessful = createAction(ActionTypes.DeleteProductSuccessful, props<{ payload: { deletedProductId: string } }>())
export const UpdateCategory = createAction(ActionTypes.UpdateCategory, props<{ payload: { id: string, updatedCategory: Partial<Category> } }>());
export const UpdateCategorySuccessful = createAction(ActionTypes.UpdateCategorySuccessful, props<{ payload: { id: string, updatedCategory: Partial<Category> } }>());
export const CreateProduct = createAction(ActionTypes.CreateProduct, props<{ payload: { product: NewProduct } }>());
export const CreateProductSuccessful = createAction(ActionTypes.CreateProductSuccessful, props<{ payload: { product: Product } }>());
export const DeleteProduct = createAction(ActionTypes.DeleteProduct, props<{ payload: { deletedProductId } }>());
export const RefundCarts = createAction(ActionTypes.RefundCarts, props<{ payload: { cartIds: string[] } }>());
export const RefundCartsSuccessful = createAction(ActionTypes.RefundCartsSuccessful, props<{ payload: { cartIds: string[] } }>());
export const CreateDistributor = createAction(ActionTypes.CreateDistributor, props<{ payload: { distributor: NewDistributor } }>());
export const CreateDistributorSuccessful = createAction(ActionTypes.CreateDistributorSuccessful, props<{ payload: { distributor: Distributor } }>());
export const DeleteDistributor = createAction(ActionTypes.DeleteDistributor, props<{ payload: { deletedDistributorId } }>());
export const DeleteDistributorSuccessful = createAction(ActionTypes.DeleteDistributorSuccessful, props<{ payload: { deletedDistributorId: string } }>());
export const UpdateDistributor = createAction(ActionTypes.UpdateDistributor, props<{ payload: { id: string, updatedDistributor: Partial<DistributorWithRelations> } }>());
export const UpdateDistributorSuccessful = createAction(ActionTypes.UpdateDistributorSuccessful, props<{ payload: { id: string, updatedDistributor: Partial<Distributor> } }>());