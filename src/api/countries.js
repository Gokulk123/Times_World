import API from "./Api";

export const getAllCountry = async (payload) => {
  return await API.get("/all?fields=name;flag;region");
};

// export const getAllCountry = async (payload) => {
//   return await API.get("/all", {
//     params: {
//       fields: "name;flag;region",
//     },
//   });
// };
