import { callApi } from "../callApi";

export const menuApi = {
  getMenuList: async (data) => {
    return await callApi.get("/api/sys/mnu/list", data);
  },
  getPrgmList: async (data) => {
    return await callApi.get("/api/sys/mnu/pgmList", data);
  },
  saveMenuList: async (data) => {
    return await callApi.post("/api/sys/mnu/list", data);
  },
  deleteMenu: async (data) => {
    return await callApi.delete("/api/sys/mnu/list", data);
  },
};
