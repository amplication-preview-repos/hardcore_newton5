import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type WarehouseWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  location?: StringNullableFilter;
  manager?: StringNullableFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  shipments?: ShipmentListRelationFilter;
};
