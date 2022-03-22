import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavBar from "../../Components/Bars/NavBar";

const MainLayout = () => {
  const APP_BAR_MOBILE = 64;
  const APP_BAR_DESKTOP = 84;

  const RootStyle = styled("div")({
    backgroundColor: "#051527",
    height: "100%",
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  });

  const MainStyle = styled("div")(({ theme }) => ({
    flexGrow: 1,
    color: "#F2FFFF",
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE + 24,
    "&::-webkit-scrollbar": {
      width: "0.5vw"
    },
    // "&::-webkit-scrollbar-track": {
    //   backgroundColor: "#e4e4e4",
    //   borderRadius: "100px",
    // },
    "&::-webkit-scrollbar-thumb" : {
      borderRadius: "100px",
      backgroundColor: "#5F7B84",
      boxShadow: "inset 2px 2px 5px 0 rgba(#fff, 0.5)"
    },
    // paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
      paddingTop: APP_BAR_DESKTOP ,
    },
  }));

  return (
    <RootStyle>
      <NavBar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default MainLayout;
