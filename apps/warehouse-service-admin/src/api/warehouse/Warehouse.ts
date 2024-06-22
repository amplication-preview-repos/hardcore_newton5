import { Inventory } from "../inventory/Inventory";
import { Product } from "../product/Product";
import { Shipment } from "../shipment/Shipment";

export type Warehouse = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  location: string | null;
  manager: string | null;
  name: string | null;
  products?: Array<Product>;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
