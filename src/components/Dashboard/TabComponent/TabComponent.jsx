import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import { p } from "motion/react-client";

export default function TabComponent({ coins }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  const style = {
    color: "var(--white)",
    fontWeight: 600,
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>

        <TabPanel value="Grid">
          <div>
            {coins.map((item, i) => {
              return (
                <p key={i}>
                  {i + 1}.{item.name}
                </p>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <div>
            {coins.map((item, i) => {
              return (
                <p key={i}>
                  {i + 1}
                  <img src={item.image} />
                </p>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
