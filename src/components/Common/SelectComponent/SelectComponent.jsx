import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./SelectComponent.css";
import { useState } from "react";

export default function SelectComponent({ days, handleDaysChange }) {
  return (
    <div className="select-days">
      <p>Price Change in the last</p>
      <Select
        value={days}
        onChange={handleDaysChange}
        displayEmpty
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        //   inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={15}>15 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
      </Select>
    </div>
  );
}
