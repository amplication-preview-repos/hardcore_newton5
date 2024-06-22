import { Inventory } from "../inventory/Inventory";
import { Shipment } from "../shipment/Shipment";
import { Warehouse } from "../warehouse/Warehouse";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  price: number | null;
  quantity: number | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
