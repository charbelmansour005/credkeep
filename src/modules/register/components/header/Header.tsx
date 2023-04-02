import { Typography, Chip } from "@mui/material"

export default function Header() {
  return (
    <Chip
      sx={{ mb: 1.5, color: "black" }}
      size="small"
      label="Protect your digital identity with Credkeep."
      variant="filled"
    />
  )
}
