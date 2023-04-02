import { Box, Button } from "@mui/material"
import { FooterProps } from "modules/register/components/footer/types"

export default function Footer({
  handleRegister,
  email,
  firstName,
  lastName,
  phoneNumber,
  password,
}: FooterProps) {
  return (
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
      <Button
        onClick={handleRegister}
        variant="contained"
        disabled={
          !email || !firstName || !lastName || !phoneNumber || !password
        }
        size="small"
        sx={{ m: 1 }}
      >
        Register
      </Button>
      <Button variant="outlined" size="small" sx={{ m: 1 }}>
        I already have an account
      </Button>
    </Box>
  )
}
