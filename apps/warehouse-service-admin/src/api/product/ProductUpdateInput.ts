import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { ShipmentUpdateManyWithoutProductsInput } from "./ShipmentUpdateManyWithoutProductsInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  shipments?: ShipmentUpdateManyWithoutProductsInput;
  warehouse?: WarehouseWhereUniqueInput | null;
};
