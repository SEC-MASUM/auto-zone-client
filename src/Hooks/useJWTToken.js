import { useEffect, useState } from "react";
import axios from "axios";

const useJWTToken = (user) => {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const userData = {
      email: email,
    };
    if (email) {
      // const url = `http://localhost:5000/user/${email}`;
      const url = `https://auto-zone-01.herokuapp.com/user/${email}`;
      (async () => {
        await axios.put(url, userData).then((res) => {
          const accessToken = res.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setUserToken(accessToken);
          // console.log(res.data);
          console.log(accessToken);
        });
      })();
    }
  }, [user]);

  return [userToken];
};

export default useJWTToken;
