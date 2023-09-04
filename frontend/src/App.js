import { CookiesProvider } from "react-cookie";
import { Navbar } from "./components/Navbar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Customers from "./components/Customers";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { AddPost } from "./components/AddPost";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./interceptors/axios";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <CookiesProvider>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: " wrap",
                justifyContent: "space-evenly",
              }}
              bgcolor={"background.default"}
              color={"text.primary"}
            >
              <Sidebar mode={mode} setMode={setMode} />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/" element={<Feed />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Rightbar mode={mode} setMode={setMode} />
            </Box>

            {/* <Stack
            spacing={4}
            direction="row"
            justifyContent="space-between"
          ></Stack> */}
            <AddPost />
          </Box>

          {/* <Route path="/transactions" element={<Products />} />
          <Route path="/breakdown" element={<Products />} />
          <Route path="/geography" element={<Products />} /> */}
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
