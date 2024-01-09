import { createAction, props } from "@ngrx/store";
import { NewDistributor, Distributor, DistributorWithRelations } from "src/app/features/shared/sdk/models";

export enum ActionTypes {
    GetDistributors = '[DISTDATASTORE] GetDistributors',
    GetDistributorsSuccessful = '[DISTDATASTORE] GetDistributorsSuccessful',
    GetDistributorsFailure = '[DISTDATASTORE] GetDistributorsFailure',
    CreateDistributor = '[DISTDATASTORE] CreateDistributor',
    CreateDistributorSuccessful = '[DISTDATASTORE] CreateDistributorSuccessful',
    CreateDistributorFailure = '[DISTDATASTORE] CreateDistributorFailure',
    DeleteDistributor = '[DISTDATASTORE] DeleteDistributor',
    DeleteDistributorSuccessful = '[DISTDATASTORE] DeleteDistributorSuccessful',
    DeleteDistributorFailure = '[DISTDATASTORE] DeleteDistributorFailure',
    UpdateDistributor = '[DISTDATASTORE] UpdateDistributor',
    UpdateDistributorSuccessful = '[DISTDATASTORE] UpdateDistributorSuccessful',
    UpdateDistributorFailure = '[DISTDATASTORE] UpdateDistributorFailure'

}
export const GetDistributors = createAction(ActionTypes.GetDistributors);
export const GetDistributorsSuccessful = createAction(ActionTypes.GetDistributorsSuccessful, props<{ payload: { distributors: DistributorWithRelations[] } }>())
export const GetDistributorsFailure = createAction(ActionTypes.GetDistributorsFailure, props<{ error: any }>());
export const CreateDistributor = createAction(ActionTypes.CreateDistributor, props<{ payload: { distributor: NewDistributor } }>());
export const CreateDistributorSuccessful = createAction(ActionTypes.CreateDistributorSuccessful, props<{ payload: { distributor: Distributor } }>());
export const CreateDistributorsFailure = createAction(ActionTypes.CreateDistributorFailure, props<{ error: any }>());
export const DeleteDistributor = createAction(ActionTypes.DeleteDistributor, props<{ payload: { deletedDistributorId } }>());
export const DeleteDistributorSuccessful = createAction(ActionTypes.DeleteDistributorSuccessful, props<{ payload: { deletedDistributorId: string } }>());
export const DeleteDistributorsFailure = createAction(ActionTypes.DeleteDistributorFailure, props<{ error: any }>());
export const UpdateDistributor = createAction(ActionTypes.UpdateDistributor, props<{ payload: { id: string, updatedDistributor: Partial<DistributorWithRelations> } }>());
export const UpdateDistributorSuccessful = createAction(ActionTypes.UpdateDistributorSuccessful, props<{ payload: { id: string, updatedDistributor: Partial<Distributor> } }>());
export const UpdateDistributorsFailure = createAction(ActionTypes.UpdateDistributorFailure, props<{ error: any }>());