import { callApi } from "../callApi";

export const codeApi = {
  getListCode: async (data) => {
    return await callApi.get("/api/sys/cd/list", data);
  },
  getOneCodeDetail: async (data) => {
    return await callApi.get("/api/sys/cd/detail", data);
  },
};
