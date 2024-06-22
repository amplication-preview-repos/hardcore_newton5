import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ShipmentWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  shipmentDate?: DateTimeNullableFilter;
  status?: "Option1";
  trackingNumber?: StringNullableFilter;
  warehouse?: WarehouseWhereUniqueInput;
};
