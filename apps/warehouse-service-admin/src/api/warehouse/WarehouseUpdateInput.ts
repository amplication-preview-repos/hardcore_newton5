import { InventoryUpdateManyWithoutWarehousesInput } from "./InventoryUpdateManyWithoutWarehousesInput";
import { ProductUpdateManyWithoutWarehousesInput } from "./ProductUpdateManyWithoutWarehousesInput";
import { ShipmentUpdateManyWithoutWarehousesInput } from "./ShipmentUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  capacity?: number | null;
  inventories?: InventoryUpdateManyWithoutWarehousesInput;
  location?: string | null;
  manager?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutWarehousesInput;
  shipments?: ShipmentUpdateManyWithoutWarehousesInput;
};
