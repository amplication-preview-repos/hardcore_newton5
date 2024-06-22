import { SortOrder } from "../../util/SortOrder";

export type WarehouseOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
