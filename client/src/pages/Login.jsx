import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [register, setRegister] = useState({
    name: "",
    bio: "",
    username: "",
    password: "",
    image: "",
  });

  function handleLoginChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleRegisterChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    // Check if an image is selected
    if (selectedImage) {
      // Read the image file as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the image data URL in the state
        setRegister({ ...register, image: e.target.result });
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="Username"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  value={login.username}
                  onChange={handleLoginChange}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={login.password}
                  onChange={handleLoginChange}
                />
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  LOGIN
                </Button>
                <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="text"
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  SIGNIN INSTEAD
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Signup</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }}>
                <Stack position="relative" width="10rem" margin="auto">
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                      backgroundColor: "rgba(0,0,0,.1)",
                    }}
                    alt="Avatar"
                    src={register.image}
                  >
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        color: "white",
                        bgcolor: "rgba(0,0,0,.5)",
                        "&:hover": { bgcolor: "rgba(0,0,0,.7)" },
                      }}
                      component="label"
                    >
                      <CameraAlt />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleImageChange}
                      />
                    </IconButton>
                  </Avatar>
                </Stack>

                <TextField
                  required
                  fullWidth
                  name="name"
                  value={register.name}
                  label="Name"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  onChange={handleRegisterChange}
                />
                <TextField
                  required
                  fullWidth
                  name="bio"
                  value={register.bio}
                  label="Bio"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  onChange={handleRegisterChange}
                />
                <TextField
                  required
                  fullWidth
                  name="username"
                  value={register.username}
                  label="Username"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  onChange={handleRegisterChange}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={register.password}
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  onChange={handleRegisterChange}
                />
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  SIGN UP
                </Button>
                <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="text"
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  LOGIN INSTEAD
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Login;
