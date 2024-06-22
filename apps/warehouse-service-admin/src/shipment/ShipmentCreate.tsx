import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="shipmentDate" source="shipmentDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="trackingNumber" source="trackingNumber" />
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
