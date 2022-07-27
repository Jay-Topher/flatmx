import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}));

export default AppBtn;
