import { createAction, props } from "@ngrx/store";
import { Address } from "src/app/features/shared/sdk/models";

export enum ActionTypes {
    GetAddresses = '[ADDRESSDATASTORE] GetAddresses',
    GetAddressesSuccessful = '[ADDRESSDATASTORE] GetAddressesSuccessful',
    GetAddressesFailure = '[ADDRESSDATASTORE] GetAddressesFailure'
}

export const GetAddressesSuccessful = createAction(ActionTypes.GetAddressesSuccessful, props<{ payload: { addresses: Address[] } }>());
export const GetAddresses = createAction(ActionTypes.GetAddresses);
export const GetAddressesFailure = createAction(ActionTypes.GetAddressesFailure, props<{ error: any }>());