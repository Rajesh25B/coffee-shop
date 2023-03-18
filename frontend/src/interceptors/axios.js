// import axios from "axios";
// import { useCookies } from "react-cookie";

// export function Axios() {
//   const [cookies, setCookie] = useCookies(["name"]);

//   const axiosURL = axios.create({
//     baseURL: "http://localhost:8000/api/",
//   });

//   axiosURL.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error.response.status === 401) {
//         const response = await axiosURL.post(
//           "token/refresh",
//           {},
//           { withCredentials: true }
//         );
//         if (response.status === 200) {
//           axiosURL.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${cookies.jwt_access_token}`;
//           return axiosURL(error.config);
//         }
//       }
//       return error;
//     }
//   );
// }
// // There are two ways to set JWT token on request,
// // One is global setup, where axios always look for JWT
// // Second is to have a fine-grained approach, where we have an instance of axios
// // that we use for our api

// // first way
// // axios.interceptors.request.use(
// //   (config) => {
// //     config.headers.Authorization = `Bearer ${accessToken}`;
// //     return config;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

// // second way
// // const authAxios = axios.create({
// //   baseURL: "http://localhost:8000/api/",
// //   headers: {
// //     Authorization: `Bearer ${cookies.jwt_access_token}`,
// //   },
// // });
