import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="product" source="product.id" reference="Product">
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
      </SimpleShowLayout>
    </Show>
  );
};
