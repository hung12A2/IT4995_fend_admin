import { stringify } from "query-string";
import { fetchUtils } from "react-admin";
import { BASE_URL } from "@/api/constant";
import { get } from "http";

const getOptions = () => {
  let options: any = {};
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const data: any = localStorage.getItem("token");
  const { token } = JSON.parse(data);
  options.headers.set("Authorization", `Bearer ${token}`);
  return options;
};

export const dataProvider = {
  remote: async (resource: string, params: any, method: string) => {
    console.log("remote");
    const { filter } = params;
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    if (method === "GET") {
      const query = {
        filter: JSON.stringify(filter),
      };
      url = `${apiUrl}/${resource}?${stringify(query)}`;
      options = {
        ...options,
        method,
      };
    } else {
      options = {
        ...options,
        method,
        body: JSON.stringify(params.data),
      };
    }
    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },

  create: async (resource: string, params: any) => {
    console.log("create");
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: "POST",
      body: JSON.stringify(params.data),
    };

    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },

  update: async (resource: string, params: any) => {
    console.log("update");
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: "PATCH",
      body: JSON.stringify(params.data),
    };

    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },

  getList: async (resource: string, params: any) => {
    console.log("getList");
    const { filter } = params;
    const { where } = filter;

    const apiUrl = `${BASE_URL}`;

    const query = {
      filter: JSON.stringify(filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options = getOptions();
    const res = await fetchUtils.fetchJson(url, options);

    const { json = {} } = res;

    const data = {
      data: json,
      total: json.length,
    };

    return data;
  },

  getOne: async (resource: string, params: any) => {
    console.log("getOne");
    const { id } = params;

    const apiUrl = `${BASE_URL}`;

    const url = `${apiUrl}/${resource}/${id}`;
    const options = getOptions();
    const res = await fetchUtils.fetchJson(url, options);

    const { json = {} } = res;

    const data = {
      data: json,
    };

    if (resource == "areas") {
      const dataAreas = {
        data: {
          ...json,
          province: `${json.provinceName}-${json.provinceId}`,
          district: `${json.districtName}-${json.districtId}`,
        },
      };

      return dataAreas;
    }

    return data;
  },

  getMany: async (resource: string, params: any) => {
    console.log("getMany");
    const { filter } = params;
    const { where } = filter;

    const apiUrl = `${BASE_URL}`;

    const query = {
      filter: JSON.stringify(filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options = getOptions();
    const res = await fetchUtils.fetchJson(url, options);

    const { json = {} } = res;

    const data = {
      data: json,
      total: json.length,
    };

    return data;
  },

  getManyReference: async (resource: string, params: any) => {
    console.log("getManyReference");
    const { filter } = params;
    const { where } = filter;

    const apiUrl = `${BASE_URL}`;

    const query = {
      filter: JSON.stringify(filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options = getOptions();
    const res = await fetchUtils.fetchJson(url, options);

    const { json = {} } = res;

    const data = {
      data: json,
      total: json.length,
    };

    return data;
  },

  delete: async (resource: string, params: any) => {
    console.log("delete");
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}/${params.id}`;
    let options = getOptions();
    options = {
      ...options,
      method: "DELETE",
    };
    const res = await fetch(url, options);
    const data = await res.json(); // Sửa ở đây
    return { data };
  },

  deleteMany: async (resource: string, params: any) => {
    console.log("deleteMany");
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}/${params.id}`;
    let options = getOptions();
    options = {
      ...options,
      method: "DELETE",
    };
    const res = await fetch(url, options);
    const data = await res.json(); // Sửa ở đây
    return { data };
  },

  updateMany: async (resource: string, params: any) => {
    console.log("updateMany");
    const apiUrl = `${BASE_URL}`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: "PATCH",
      body: JSON.stringify(params.data),
    };

    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },
};
