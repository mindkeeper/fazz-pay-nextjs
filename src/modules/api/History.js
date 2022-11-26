import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/history`;

export const getHistory = (token, params) => {
  return axios({
    method: "GET",
    url: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });
};
