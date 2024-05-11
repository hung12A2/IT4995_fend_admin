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
import { ListRequestProducts } from "@/module/CreateProducts/requestCreateProducts";

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

      <Resource name="request-create-products" list={ListRequestProducts} />

      <CustomRoutes>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes>
    </Admin>
  );
}
