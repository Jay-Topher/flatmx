import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import menuIcon from "../assets/hamburger.svg";
import Image from "next/image";
import { pxToRem } from "../utils";
import AppBtn from "./AppBtn";

function Navbar() {
  const midNavLinks = [
    { name: "Sell", url: "/" },
    { name: "Compare", url: "/" },
    { name: "To Exchange", url: "/" },
    { name: "Credits", url: "/" },
  ];
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f5f7ff",
        borderBottomColor: "rgb(238, 238, 249)",
        borderBottomWidth: 1,
      }}
      elevation={0}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          mx: "auto",
        }}
      >
        <Logo />
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            display: "flex",
            p: 0,
          }}
        >
          {midNavLinks.map((navLink) => (
            <Box
              component="li"
              key={navLink.name}
              sx={{
                mx: 2,
                fontFamily: "Source Sans Pro",
                fontWeight: 600,
                fontSize: pxToRem(18),
              }}
            >
              <Link href={navLink.url} passHref>
                <MuiLink underline="none">{navLink.name}</MuiLink>
              </Link>
            </Box>
          ))}
        </Box>
        <Box>
          <AppBtn sx={{ mr: 2 }}>Get into</AppBtn>
          <IconButton disableFocusRipple>
            <Image alt="menu" src={menuIcon} />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
