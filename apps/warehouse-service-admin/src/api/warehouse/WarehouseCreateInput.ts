import { InventoryCreateNestedManyWithoutWarehousesInput } from "./InventoryCreateNestedManyWithoutWarehousesInput";
import { ProductCreateNestedManyWithoutWarehousesInput } from "./ProductCreateNestedManyWithoutWarehousesInput";
import { ShipmentCreateNestedManyWithoutWarehousesInput } from "./ShipmentCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  capacity?: number | null;
  inventories?: InventoryCreateNestedManyWithoutWarehousesInput;
  location?: string | null;
  manager?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutWarehousesInput;
  shipments?: ShipmentCreateNestedManyWithoutWarehousesInput;
};
