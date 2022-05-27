import axios from "axios";
import { useQuery } from "react-query";

const useReviews = () => {
  // const url = `http://localhost:5000/review`;
  // const url = `https://auto-zone-01.herokuapp.com/review`;
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    axios.get(`https://auto-zone-01.herokuapp.com/review`, {
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
