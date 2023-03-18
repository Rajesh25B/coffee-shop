// import "./styles.css";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cookies, setCookie] = useCookies(["name"]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });
      setCookie("jwt_access_token", data.access);
      setNavigate(true);
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
      <Alert severity="error">`${errorMsg}, please try again`</Alert>;
    }
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      flex={1}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5">Login into our system</Typography>
      <form>
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Enter Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="password"
          label="Enter password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "130px" }}
          onClick={handleClick}
        >
          Login
        </Button>
        <Box>
          <Alert severity="error">{errorMsg}</Alert>
        </Box>
      </form>
    </Box>
  );
}
