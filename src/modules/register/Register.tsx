import { ChangeEvent, useEffect, useState } from "react"
import {
  TextField,
  Box,
  Button,
  InputAdornment,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material"
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import Logo from "assets/logo0.png"
import Header from "modules/register/components/header/Header"
import { MyTextField } from "modules/common/MyTextField"

export default function Register() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handleFirstNameChange = (value: string) => {
    setFirstName(value)
  }

  const handleLastNameChange = (value: string) => {
    setLastName(value)
  }

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const isScreenSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Box
      component={"form"}
      data-testid="form-box"
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #f95959,#ffffff,#ffffff,#ffffff, #f95959)",
      }}
    >
      <img src={Logo} style={{ height: "180px", width: "180px" }} />
      <Header />
      <Box
        data-testid="outer-box"
        sx={{
          p: 1,
          borderRadius: 1,
          width: "40vw",
        }}
      >
        <Box
          data-testid="inner-box"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: isScreenSmall ? "wrap" : undefined,
          }}
        >
          <MyTextField
            id="outlined-basic-email"
            label="Email"
            onChange={handleEmailChange}
            value={email}
          />
          <MyTextField
            id="outlined-basic-firstname"
            label="First name"
            onChange={handleFirstNameChange}
            value={firstName}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: isScreenSmall ? "wrap" : undefined,
          }}
        >
          <MyTextField
            id="outlined-basic-lastname"
            label="Last name"
            onChange={handleLastNameChange}
            value={lastName}
          />
          <MyTextField
            id="outlined-basic-phonenumber"
            label="Phone number"
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            label="Password"
            id="outlined-start-adornment"
            size="small"
            onChange={handlePasswordChange}
            value={password}
            type={visible ? "text" : "password"}
            fullWidth
            sx={{ m: 1.5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    data-testid="hidePassButton"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <VisibilityOutlined data-testid="VisibilityIcon" />
                    ) : (
                      <VisibilityOffOutlined data-testid="VisibilityOffIcon" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            m: 0,
          }}
        >
          <Button variant="outlined" size="small" sx={{ m: 1 }}>
            Register
          </Button>
          <Button variant="outlined" size="small" sx={{ m: 1 }}>
            I already have an account
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
