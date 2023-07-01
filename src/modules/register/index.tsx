import { ChangeEvent, useCallback, useState } from "react"
import { TextField, Box, InputAdornment, IconButton, Grid } from "@mui/material"
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import Header from "modules/register/components/header/Header"
import { MyTextField } from "modules/common/components/MyTextField"
import { register } from "modules/register/core/Register"
import Footer from "modules/register/components/footer/Footer"
import HeaderLogo from "modules/register/components/header/HeaderLogo"

export default function Register() {
  type Nullable = string | null
  const [visible, setVisible] = useState<boolean>(false)
  const [email, setEmail] = useState<Nullable>(null)
  const [firstName, setFirstName] = useState<Nullable>(null)
  const [lastName, setLastName] = useState<Nullable>(null)
  const [phoneNumber, setPhoneNumber] = useState<Nullable>(null)
  const [password, setPassword] = useState<Nullable>(null)

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

  const handleRegister = useCallback(() => {
    register(email, firstName, lastName, phoneNumber, password)
    setEmail("")
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setPassword("")
  }, [email, firstName, lastName, phoneNumber, password])

  const parentGridStyle = {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background:
      "linear-gradient(45deg, #f95959,#ffffff,#ffffff,#ffffff, #ffffff)",
  }

  return (
    <Grid
      component={"form"}
      data-testid="form-box"
      container
      sx={parentGridStyle}
    >
      <Grid
        data-testid="outer-grid-1"
        item
        xs={12}
        md={6}
        sx={{
          p: 1,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderLogo />
        <Header />
      </Grid>
      <Grid
        sx={{
          p: 1,
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        md={6}
      >
        <Grid
          data-testid="outer-grid-2"
          item
          xs={12}
          md={6}
          sx={{
            p: 1,
            borderRadius: 1,
          }}
        >
          <Box data-testid="inner-box">
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
          <TextField
            label="Password"
            id="outlined-start-adornment"
            size="small"
            onChange={handlePasswordChange}
            value={password}
            type={visible ? "text" : "password"}
            fullWidth
            sx={{ mt: 1.5 }}
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
          <Footer
            handleRegister={handleRegister}
            email={email}
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            password={password}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
