import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ShipmentCreateInput = {
  product?: ProductWhereUniqueInput | null;
  shipmentDate?: Date | null;
  status?: "Option1" | null;
  trackingNumber?: string | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
