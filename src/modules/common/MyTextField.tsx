import React, { ChangeEvent } from "react"
import { TextField } from "@mui/material"

interface MyTextFieldProps {
  id: string
  label: string
  value: any
  onChange: (value: string) => void
}

export const MyTextField: React.FC<MyTextFieldProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onChange(value)
  }

  return (
    <TextField
      sx={{ mt: 1.5, mb: 1.5 }}
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      onChange={handleChange}
      value={value}
    />
  )
}
