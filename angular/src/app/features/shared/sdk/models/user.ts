/* tslint:disable */

import { ProductWithRelations } from "./product-with-relations";

/* eslint-disable */
export interface User {
  avatar?: string;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  email?: string;
  firstName: string;
  id: string;
  isDeleted?: boolean;
  lastName: string;
  middleName?: string;
  password: string;
  phoneNumber?: string;
  taxId?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  username: string;
  cart?: ProductWithRelations[];
}
