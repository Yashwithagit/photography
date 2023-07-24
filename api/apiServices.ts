import { API_BASE_PATH } from "@/lib/apiPath";

export const handleData = (data: any) => {
  if (data.responseCode === 10001) {
    const res =
      data.responseData == undefined ||
      Object.keys(data.responseData).length == 0
        ? data.responseMessage
        : data.responseData;
    return res;
  } else {
    throw data.responseMessage;
  }
};

const handleError = (err: Error) => {
  if (typeof err === "string" || typeof err === "number") {
    throw err;
  } else {
    throw err;
  }
};

//API post request
const makePostRequest = ({
  path,
  payload,
  headers = {},
  uploadJSON = false,
}: {
  path: string;
  payload?: Record<string, string>;
  headers?: object;
  uploadJSON?: boolean;
}): Promise<any | string> => {
  const requestOption: object = {
    method: "POST",
    headers: { ...headers },
    body: uploadJSON
      ? JSON.stringify(payload)
      : new URLSearchParams(payload).toString(),
  };

  return fetch(API_BASE_PATH + path, requestOption)
    .then((response) => response.json())
    .then((data) => {
      return handleData(data);
    })
    .catch((err) => {
      handleError(err);
    });
};

//API get request
const makeGetRequest = ({
  path,
  payload,
  headers = {},
}: {
  path: string;
  payload?: { [key: string]: string | number };
  headers?: object;
}): Promise<any | string> => {
  let data = "";
  for (let key in payload) {
    data += key + "=" + payload[key] + "&";
  }
  const requestOption: object = {
    method: "GET",
    headers: { ...headers, "Content-Type": "application/json" },
  };

  return fetch(API_BASE_PATH + path + "?" + data, requestOption)
    .then((response) => response.json())
    .then((data) => {
      return handleData(data);
    })
    .catch((err) => {
      handleError(err);
    });
};

export { makePostRequest, makeGetRequest };
