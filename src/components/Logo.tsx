import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoFull from "../assets/logo-full.svg";

function Logo() {
  return (
    <Box>
      <Image src={logoFull} alt="logo" />
    </Box>
  );
}

export default Logo;
