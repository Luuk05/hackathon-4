import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Link to="/">Home</Link>
          <Button color="inherit">
            <Link to="/cart">
              <Badge badgeContent={totalItems} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
