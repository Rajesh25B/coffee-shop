import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";

export const Rightbar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" } }} // added breakpoints
      flex={1}
      p={3}
    >
      <Box position="fixed" width={180} ml={6} mt={2}>
        <Typography variant="h6" fontWeight={100}>
          Online Branches
        </Typography>
        <AvatarGroup max={6}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Warangal"
              src="https://sites.google.com/site/tshistrocicalplaces/_/rsrc/1482968786174/kakatiya-kala-thoranam/warangal-e1422526175554.jpg"
            />
          </StyledBadge>

          <Avatar
            alt="Hyderabad"
            src="https://lh3.googleusercontent.com/p/AF1QipNy1rROm72wUAbgz1OT3bGjWqDQDnE4urAsvkJl=s1360-w1360-h1020"
          />
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Bangalore"
              src="https://www.shutterstock.com/image-vector/bangalore-logo-vidhana-soudha-260nw-1506258893.jpg"
            />
          </StyledBadge>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Chennai"
              src="https://www.shutterstock.com/image-vector/chennais-iconic-chennai-central-railway-260nw-1880159464.jpg"
            />
          </StyledBadge>
          <Avatar
            alt="Trevor Henderson"
            src="https://img.icons8.com/bubbles/600/000000/new-delhi.png"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Coffee Updates
        </Typography>
        <ImageList
          sx={{ width: 250, height: 250 }}
          cols={3}
          gap={5}
          rowHeight={100}
        >
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              loading="lazy"
              alt="name"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};
