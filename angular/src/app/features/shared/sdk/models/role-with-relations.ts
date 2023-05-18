/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: RoleWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RoleWithRelations {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  id: string;
  isDeleted?: boolean;
  key: string;
  title: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
