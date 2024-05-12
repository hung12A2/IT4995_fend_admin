"use client";
import { Admin, CustomRoutes, Resource, useGetIdentity } from "react-admin";
import { Login } from "@/module/auth/login";
import { authProvider } from "@/provider/authProvider";
import { dataProvider } from "@/provider/dataProvider";
import { ListAreas, CreateAreas, EditArea } from "@/module/Areas/Areas";
import { Route } from "react-router-dom";
import { MainLayout } from "@/module/layout/Layout";
import CameraRearRoundedIcon from "@mui/icons-material/CameraRearRounded";
import { Profile } from "@/module/pages/Profile";
import { ListUser } from "@/module/Users/users";
import { ListStores, ShowStores } from "@/module/Stores/stores";
import {
  ListRequestShops,
  ShowRequestShopsDetails,
} from "@/module/ReqCreateShops/RequestCreateShops";
import { ListKiots, ShowKiot } from "@/module/Kiots/kiots";
import { ListEmployee, ShowEmployee } from "@/module/Employees/Employees";
import { ListAdmin, CreateAdmin, EditAdmin } from "@/module/Admin/admin";
import {
  CreateCategories,
  EditCategories,
  ListCategories,
} from "@/module/Categories/categories";
import {
  ListRequestProducts,
  ShowRequest,
} from "@/module/CreateProducts/requestCreateProducts";
import { ListProducts, ShowProducts } from "@/module/Products/Products";
import { ListOrder, ShowOrder } from "@/module/Orders/orders";
import { ListOrdersKiot, ShowOrdersKiot } from "@/module/OrdersKiot/ordersKiot";
import { ListUserTrangsaction } from "@/module/UserTransaction/userTransaction";

export default function Home() {
  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
      layout={MainLayout}
    >
      <Resource
        name="areas"
        list={ListAreas}
        create={CreateAreas}
        edit={EditArea}
        icon={CameraRearRoundedIcon}
        options={{
          label: "Areas",
        }}
      />
      <Resource
        name="getAllUser"
        list={ListUser}
        options={{
          label: "Users",
        }}
      />

      <Resource
        name="stores"
        list={ListStores}
        edit={ShowStores}
        options={{
          label: "Stores",
        }}
      />

      <Resource
        name="request-create-shops"
        list={ListRequestShops}
        edit={ShowRequestShopsDetails}
        options={{
          label: "Request create",
        }}
      />

      <Resource
        name="kiots"
        list={ListKiots}
        edit={ShowKiot}
        options={{
          label: "Kiots",
        }}
      />

      <Resource
        name="employees"
        list={ListEmployee}
        edit={ShowEmployee}
        options={{
          label: "Employees",
        }}
      />

      <Resource
        name="admins"
        list={ListAdmin}
        create={CreateAdmin}
        edit={EditAdmin}
      />

      <Resource
        name="categories"
        list={ListCategories}
        create={CreateCategories}
        edit={EditCategories}
        options={{
          label: "Categories",
        }}
      />

      <Resource
        name="products"
        list={ListProducts}
        edit={ShowProducts}
        options={{ label: "Products" }}
      />

      <Resource
        name="request-create-products"
        list={ListRequestProducts}
        edit={ShowRequest}
      />

      <Resource
        name="ordersAdmin"
        list={ListOrder}
        edit={ShowOrder}
        options={{ label: "Orders" }}
      />

      <Resource
        name="ordersKiotAdmin"
        list={ListOrdersKiot}
        edit={ShowOrdersKiot}
        options={{ label: "OrdersKiot" }}
      />

      <Resource name="transactions"  list={ListUserTrangsaction} options={{label: "User transaction"}}/> 

      <CustomRoutes>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes>
    </Admin>
  );
}
