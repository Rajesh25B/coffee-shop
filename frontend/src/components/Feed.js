import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import HomeCard from "./HomeCard";

export function Feed() {
  const [userName, setUserName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["jwt_access_token"]);
  const [navigate, setNavigate] = useState(false);

  const authAxios = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      Authorization: `Bearer ${cookies.jwt_access_token}`,
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await authAxios.get("/users/me/");
        console.log(res);
        if (res.status === 200) {
          setUserName(res.data.username);
          return res;
        }
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  if (cookies.jwt_access_token === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <Box
      flex={2}
      sx={{ display: "flex", flexDirection: "column", margin: "64px" }}
    >
      <HomeCard
        img={
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
        }
        src={
          "https://lh3.googleusercontent.com/p/AF1QipNy1rROm72wUAbgz1OT3bGjWqDQDnE4urAsvkJl=s1360-w1360-h1020"
        }
        title={userName}
      />
      <HomeCard
        img={
          "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        src={
          "https://sites.google.com/site/tshistrocicalplaces/_/rsrc/1482968786174/kakatiya-kala-thoranam/warangal-e1422526175554.jpg"
        }
        title={userName}
      />
    </Box>
  );
}
