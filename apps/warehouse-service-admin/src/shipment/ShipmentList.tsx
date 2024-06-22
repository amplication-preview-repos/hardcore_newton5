import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ShipmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shipments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
