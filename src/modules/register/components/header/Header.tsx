import { Typography, Chip } from "@mui/material"

export default function Header() {
  return (
    // <Typography variant="caption" sx={{ color: "gray", mb: 1 }}>
    //   Protect your digital identity with Credkeep.
    // </Typography>
    <Chip
      sx={{ mb: 1.5, color: "gray" }}
      size="small"
      label="Protect your digital identity with Credkeep."
      variant="filled"
    />
  )
}
