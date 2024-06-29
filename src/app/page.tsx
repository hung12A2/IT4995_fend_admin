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
import {
  ListUserTrangsaction,
  ShowTransaction,
} from "@/module/UserTransaction/userTransaction";
import {
  ListShopTrangsaction,
  ShowShopTransaction,
} from "@/module/ShopTransaction/ShopTransaction";
import {
  ListReturnOrder,
  ShowReturnOrder,
} from "@/module/ReturnOrder/returnOrder";
import PaidIcon from "@mui/icons-material/Paid";
import { CustomDash } from "@/module/Dashboard/dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShopIcon from "@mui/icons-material/Shop";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddCardIcon from "@mui/icons-material/AddCard";
import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";
import SupervisorAccountSharpIcon from "@mui/icons-material/SupervisorAccountSharp";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

export default function Home() {
  if (typeof document !== "undefined") {
    return (
      <Admin
        loginPage={Login}
        authProvider={authProvider}
        dataProvider={dataProvider}
        layout={MainLayout}
        dashboard={CustomDash}
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
          icon={PersonIcon}
          options={{
            label: "Users",
          }}
        />

        <Resource
          name="stores"
          list={ListStores}
          edit={ShowStores}
          icon={ShopIcon}
          options={{
            label: "Stores",
          }}
        />

        <Resource
          name="request-create-shops"
          list={ListRequestShops}
          icon={AddBusinessIcon}
          edit={ShowRequestShopsDetails}
          options={{
            label: "Request create",
          }}
        />

        <Resource
          name="kiots"
          list={ListKiots}
          icon={AddCardIcon}
          edit={ShowKiot}
          options={{
            label: "Kiots",
          }}
        />

        <Resource
          name="admins"
          list={ListAdmin}
          create={CreateAdmin}
          edit={EditAdmin}
          icon={SupervisorAccountSharpIcon}
        />

        <Resource
          name="categories"
          list={ListCategories}
          create={CreateCategories}
          edit={EditCategories}
          icon={CategoryOutlinedIcon}
          options={{
            label: "Categories",
          }}
        />

        <Resource
          name="products"
          list={ListProducts}
          edit={ShowProducts}
          icon={ProductionQuantityLimitsOutlinedIcon}
          options={{ label: "Products" }}
        />

        <Resource
          name="request-create-products"
          list={ListRequestProducts}
          edit={ShowRequest}
          icon={ProductionQuantityLimitsOutlinedIcon}
        />

        <Resource
          name="ordersAdmin"
          list={ListOrder}
          edit={ShowOrder}
          options={{ label: "Orders" }}
          icon={ListAltIcon}
        />

        <Resource
          name="ordersKiotAdmin"
          list={ListOrdersKiot}
          edit={ShowOrdersKiot}
          options={{ label: "OrdersKiot" }}
          icon={ListAltIcon}
        />

        <Resource
          name="transactions"
          list={ListUserTrangsaction}
          edit={ShowTransaction}
          options={{ label: "User transaction" }}
          icon={PaidIcon}
        />
        <Resource
          name="transaction-shops"
          list={ListShopTrangsaction}
          edit={ShowShopTransaction}
          options={{ label: "Shop transaction" }}
          icon={PaidIcon}
        />

        <Resource
          name="return-orders"
          list={ListReturnOrder}
          edit={ShowReturnOrder}
          icon={AssignmentReturnIcon}
        />

        <CustomRoutes>
          <Route path="/profile" element={<Profile />} />
        </CustomRoutes>

        {/* <CustomRoutes noLayout={true}>
        </CustomRoutes> */}
      </Admin>
    );
  }
}
