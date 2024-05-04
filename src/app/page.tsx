"use client";
import { Admin, Resource, useGetIdentity } from "react-admin";
import { Login } from "@/module/auth/login";
import { authProvider } from "@/provider/authProvider";
import { dataProvider } from "@/provider/dataProvider";
import { ListAreas, CreateAreas, EditArea } from "@/module/Areas/Areas";
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Home() {


  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="areas"  list={ListAreas} create={CreateAreas} edit={EditArea} icon={DashboardIcon}  options={{
        label: "Areas",
      }}/>
    </Admin>
  );
}
