import axios from "axios";
import { useQuery } from "react-query";

const useProducts = () => {
  // const url = `http://localhost:5000/product`;
  // const url = `https://auto-zone-01.herokuapp.com/product`;
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    axios.get(`https://auto-zone-01.herokuapp.com/product`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  // console.log(products);

  return { products, isLoading, refetch };
};

export default useProducts;
