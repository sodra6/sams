import { callApi } from "../callApi"

export const userApi = {
	login: async (data) => {
		return await callApi.post("/api/auth/usr/login", data);
	},
	reissue: async (data) => {
		return await callApi.post("/api/auth/usr/reissue", data);
	},
}

