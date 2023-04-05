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
      }}
    >
      <Button
        onClick={handleRegister}
        variant="outlined"
        disabled={
          !email || !firstName || !lastName || !phoneNumber || !password
        }
        size="small"
        sx={{ mt: 3 }}
      >
        Register
      </Button>
      <Button variant="outlined" size="small" sx={{ mt: 3 }}>
        I already have an account
      </Button>
    </Box>
  )
}
