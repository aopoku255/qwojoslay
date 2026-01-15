import { TextField, MenuItem } from "@mui/material";

const FloatingSelect = ({
  label,
  name,
  rules,
  register,
  error,
  options = [],
  defaultValue = "",
}) => {
  return (
    <TextField
      select
      fullWidth
      size="small"
      label={label}
      defaultValue={defaultValue}
      variant="outlined"
      error={!!error}
      helperText={error?.message}
      {...register(name, rules)}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "rgb(220 38 38)",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "rgb(220 38 38)",
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FloatingSelect;
