import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SearchIcon from "@mui/icons-material/Search";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/search");
  }, [value, navigate]);

  return (
    <Box sx={{ width: 1000 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "purple", fontSize: "13rem" }}
          label="HOME"
          icon={<HomeSharpIcon />}
        />
        <BottomNavigationAction
          style={{ color: "purple", fontSize: "13rem" }}
          label="SEARCH"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
