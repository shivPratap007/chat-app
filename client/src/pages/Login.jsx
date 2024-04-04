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
                  label="Username"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
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
                      <VisuallyHiddenInput type="file" />
                    </IconButton>
                  </Avatar>
                </Stack>

                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
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
