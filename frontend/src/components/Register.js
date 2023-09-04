import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { instance } from "../interceptors/axios";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/api/users/register/",
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
      }
    );
    setNavigate(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber(0);
    setPassword("");
    console.log(response.status);
    return response.data;
  };
  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <Box
      flex={1}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5">Register an account</Typography>
      <form>
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Enter first_name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Enter last_name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="email"
          label="Enter Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="number"
          label="Enter Phonenumber"
          variant="outlined"
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          Register
        </Button>
      </form>
    </Box>
  );
}
