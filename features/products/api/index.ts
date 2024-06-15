import axiosInstance from "@/api/api";

export const getProducts = () => {
  return axiosInstance.get("/products");
};
