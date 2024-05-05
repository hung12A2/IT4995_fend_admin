"use client";
import { Admin, CustomRoutes, Resource, useGetIdentity } from "react-admin";
import { Login } from "@/module/auth/login";
import { authProvider } from "@/provider/authProvider";
import { dataProvider } from "@/provider/dataProvider";
import { ListAreas, CreateAreas, EditArea } from "@/module/Areas/Areas";
import { Route } from "react-router-dom";
import { MainLayout } from "@/module/layout/Layout";
import CameraRearRoundedIcon from '@mui/icons-material/CameraRearRounded';
import { Profile } from "@/module/pages/Profile";

export default function Home() {


  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
      layout={MainLayout}
    >
      <Resource name="areas"  list={ListAreas} create={CreateAreas} edit={EditArea} icon={CameraRearRoundedIcon}  options={{
        label: "Areas",
      }}/>

      <CustomRoutes>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes>
    </Admin>
  );
}
