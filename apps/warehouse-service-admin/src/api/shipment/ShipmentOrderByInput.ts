import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  shipmentDate?: SortOrder;
  status?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
  warehouseId?: SortOrder;
};
