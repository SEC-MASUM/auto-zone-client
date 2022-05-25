import axios from "axios";
import { useQuery } from "react-query";

const useProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () => axios.get(`http://localhost:5000/product`));
  console.log(products);

  return { products, isLoading, refetch };
};

export default useProducts;
