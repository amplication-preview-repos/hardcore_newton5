import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Warehouse"
          source="warehouse.id"
          reference="Warehouse"
        >
          <TextField source={WAREHOUSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Inventory"
          target="productId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Shipment"
          target="productId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="shipmentDate" source="shipmentDate" />
            <TextField label="status" source="status" />
            <TextField label="trackingNumber" source="trackingNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
