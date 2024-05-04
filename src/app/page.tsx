"use client";
import { Admin, Resource } from "react-admin";
import { Login } from "@/module/auth/login";
import { authProvider } from "@/provider/authProvider";
import { dataProvider } from "@/provider/dataProvider";
import { ListAreas, CreateAreas, EditArea } from "@/module/Areas/Areas";


export default function Home() {
  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="areas"  list={ListAreas} create={CreateAreas} edit={EditArea} />
    </Admin>
  );
}
