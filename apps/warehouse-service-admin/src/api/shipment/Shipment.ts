import { Product } from "../product/Product";
import { Warehouse } from "../warehouse/Warehouse";

export type Shipment = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  shipmentDate: Date | null;
  status?: "Option1" | null;
  trackingNumber: string | null;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
