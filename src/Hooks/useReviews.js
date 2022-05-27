import axios from "axios";
import { useQuery } from "react-query";

const useReviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    axios.get(`http://localhost:5000/review`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  // console.log(reviews);

  return { reviews, isLoading, refetch };
};

export default useReviews;
