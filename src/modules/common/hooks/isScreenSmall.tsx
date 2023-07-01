import { useMediaQuery, Theme } from "@mui/material"
// ! fix top level
export const isScreenSmall = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down("sm")
)
