import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  shipments?: ShipmentListRelationFilter;
  warehouse?: WarehouseWhereUniqueInput;
};
