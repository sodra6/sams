import customAxios from "./instance";

export const callApi = {
  call: async (data, options) => {
    if (options && options.isDownload) {
      console.log(options);
      data["responseType"] = "blob";
    } else if (options && options.isUpload) {
      data["headers"] = { "Content-type": "multipart/form-data" };
    } else if (options && options.isImage) {
      data["responseType"] = "arraybuffer";
    }

    const result = await customAxios(data);
    //console.log("◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆ RESULT", result);
    return result;
  },
  get: async (url, params, options) => {
    const result = await callApi.call(
      {
        method: "GET",
        url,
        params,
      },
      options
    );

    return result.data;
  },
  post: async (url, data, options) => {
    const result = await callApi.call(
      {
        method: "POST",
        url,
        data,
      },
      options
    );

    return result.data;
  },
  upload: async (url, data, options) => {
    const result = await callApi.call(
      {
        method: "POST",
        url,
        data,
      },
      { ...options, isUpload: true }
    );

    return result;
  },
  download: async (url, data, options) => {
    const result = await callApi.call(
      {
        method: "POST",
        url,
        data,
      },
      { ...options, isDownload: true }
    );

    return result;
  },
};
