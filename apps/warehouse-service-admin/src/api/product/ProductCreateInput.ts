import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { ShipmentCreateNestedManyWithoutProductsInput } from "./ShipmentCreateNestedManyWithoutProductsInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  shipments?: ShipmentCreateNestedManyWithoutProductsInput;
  warehouse?: WarehouseWhereUniqueInput | null;
};
