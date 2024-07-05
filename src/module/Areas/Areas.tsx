import { useToast } from "@/components/ui/use-toast";
import { dataProvider } from "@/provider/dataProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  FilterForm,
  List,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useGetIdentity,
} from "react-admin";
import axios from "../../module/AxiosCustom/custome_Axios";
import { checkPermission } from "@/lib/helper";

const postFilters = [
  <TextInput key={"id"} label="id" source="where.id.like" alwaysOn={true} />,
  <TextInput
    key={"name"}
    label="name"
    source="where.name.like"
    alwaysOn={true}
  />,
  <TextInput
    key={"provinceName"}
    label="provinceName"
    source="where.provinceName.like"
    alwaysOn={true}
  />,
  <TextInput
    key={"districtName"}
    label="districtName"
    source="where.districtName.like"
    alwaysOn={true}
  />,
];

export const ListAreas = (props: any) => {
  return (
    <List>
      <FilterForm filters={postFilters}></FilterForm>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="provinceName" />
        <TextField source="districtName" />
        <DateField source="createdAt" showTime />
        <TextField source="createdBy" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const CreateAreas = (props: any) => {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const { toast } = useToast();

  const { data } = useGetIdentity();

  const user = data?.user;

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .post("/location/province")
        .then((res) => res.data)
        .catch((e) => console.log(e));

      console.log(data);

      const returnData = await data.map((item: any) => {
        return {
          proviceWithId: `${item.provinceName}-${item.provinceId}`,
          province: item.provinceName,
        };
      });

      setProvince(returnData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const selectedProvinceId = selectedProvince.split("-")[1];
      const data = await axios.post(`location/district/${selectedProvinceId}`);

      const returnData = await data.data.map((item: any) => {
        return {
          districtWithId: `${item.districtName}-${item.districtId}`,
          district: item.districtName,
        };
      });

      setDistrict(returnData);
    }

    fetchData();
  }, [selectedProvince]);

  if (checkPermission("all", user?.permissions) == false) {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center text-xl font-medium">
        Bạn không có quyền truy cập
      </div>
    );
  }

  return (
    <Create {...props}>
      <SimpleForm
        onSubmit={async (data) => {
          try {
            const dataReturn: any = (
              await dataProvider.create("areas", { data })
            ).data;
            console.log(dataReturn);
            if (dataReturn.code == 200) {
              toast({
                title: "Tạo thành công",
                description: `Tạo thành công luc ${new Date().toLocaleString()}.`,
              });
            }
          } catch (error) {
            toast({
              title: "Tạo thất bại",
              description: `Tạo thất bại luc ${new Date().toLocaleString()}.`,
            });
          }
        }}
      >
        <div className="grid grid-cols-3 w-full gap-x-4 px-3">
          <TextInput source="name" />
          <SelectInput
            source="province"
            choices={province}
            optionText="province"
            optionValue="proviceWithId"
            onChange={(e) => {
              setSelectedProvince(e.target.value);
            }}
          ></SelectInput>
          <SelectInput
            source="district"
            choices={district}
            optionText="district"
            optionValue="districtWithId"
          ></SelectInput>
        </div>
      </SimpleForm>
    </Create>
  );
};

export const EditArea = (props: any) => {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [areaData, setAreaData] = useState<any>({});
  const [selectedProvince, setSelectedProvince] = useState("");
  const params = useParams();
  const { id } = params;

  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      const data = await dataProvider.getOne("areas", { id });
      let dataReturn = data.data;
      dataReturn = {
        ...dataReturn,
        province: `${dataReturn.provinceName}-${dataReturn.provinceId}`,
        district: `${dataReturn.districtName}-${dataReturn.districtId}`,
      };

      setAreaData({ ...dataReturn });
      setSelectedProvince(dataReturn.province);
    }
    async function fetchData2() {
      const data = await  axios.post(`location/province`);

      const returnData = await data.data.map((item: any) => {
        return {
          proviceWithId: `${item.provinceName}-${item.provinceId}`,
          province: item.provinceName,
        };
      });

      setProvince(returnData);
    }

    fetchData2();

    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const selectedProvinceId = selectedProvince.split("-")[1];
      const data = await axios.post(`location/district/${selectedProvinceId}`);

      const returnData = await data.data.map((item: any) => {
        return {
          districtWithId: `${item.districtName}-${item.districtId}`,
          district: item.districtName,
        };
      });

      setDistrict(returnData);
    }

    fetchData();
  }, [selectedProvince]);

  const { data } = useGetIdentity();

  const user = data?.user;

  if (checkPermission("all", user?.permissions) == false) {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center text-xl font-medium">
        Bạn không có quyền truy cập 
      </div>
    );
  }

  return (
    <SimpleForm
      defaultValues={areaData}
      onSubmit={async (data) => {
        try {
          data.id = id;
          data.provinceName = data.province.split("-")[0];
          data.provinceId = data.province.split("-")[1];
          data.districtName = data.district.split("-")[0];
          data.districtId = data.district.split("-")[1];

          data = {
            data,
            id: data.id,
          };
          const dataReturn: any = (
            await dataProvider.update("areas", { ...data })
          ).data;
          if (dataReturn) {
            toast({
              title: "Cập nhập thành công",
              description: `Cập nhập thành công luc ${new Date().toLocaleString()}.`,
            });
          }
        } catch (error) {
          toast({
            title: "Cập nhập thất bạt ",
            description: `Cập nhập thất bạt luc ${new Date().toLocaleString()}.`,
          });
        }
      }}
    >
      <div className="grid grid-cols-3 w-full gap-x-4 px-3">
        <TextInput source="id" disabled={true} />

        <TextInput source="name" />
        <SelectInput
          source="province"
          choices={province}
          optionText="province"
          optionValue="proviceWithId"
          onChange={(e) => {
            setSelectedProvince(e.target.value);
          }}
        ></SelectInput>
        <SelectInput
          source="district"
          choices={district}
          optionText="district"
          optionValue="districtWithId"
        ></SelectInput>
      </div>
      <Button></Button>
    </SimpleForm>
  );
};
