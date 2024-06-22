import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { ShipmentList } from "./shipment/ShipmentList";
import { ShipmentCreate } from "./shipment/ShipmentCreate";
import { ShipmentEdit } from "./shipment/ShipmentEdit";
import { ShipmentShow } from "./shipment/ShipmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WarehouseService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Shipment"
          list={ShipmentList}
          edit={ShipmentEdit}
          create={ShipmentCreate}
          show={ShipmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
