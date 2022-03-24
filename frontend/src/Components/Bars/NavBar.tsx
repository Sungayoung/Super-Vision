import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, Slide, useScrollTrigger } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBarBtn from "./NavBarBtn";
import logo from "../../Assets/Image/logo.png";

function NavBar() {
  interface scrollProps {
    window?: () => Window;
    children: React.ReactElement;
  }
  const HideOnScroll = (props: scrollProps) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const APPBAR_MOBILE = 64;
  const APPBAR_DESKTOP = 84;

  const routes = [
    { path: "/", name: "Home", children: [] },
    {
      path: "/Introduction",
      name: "Introduction",
      children: [
        { path: "", name: "Introduction" },
        { path: "QuickStart", name: "QuickStart" },
      ],
    },
    {
      path: "/TechDemos",
      name: "TechDemos",
      children: [
        { path: "ImageFilter", name: "ImageFilter" },
        { path: "WebcamFilter", name: "WebcamFilter" },
      ],
    },
  ];
  const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    backgroundColor: "#031214",
  }));

  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up("lg")]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 3),
    },
  }));
  // const RootStyle = styled('div')(({ theme }) => ({
  //   boxShadow: "none",
  //   backdropFilter: "blur(6px)",
  //   WebkitBackdropFilter: "blur(6px)",
  //   backgroundColor: "#031214",
  // }));

  // const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  //   minHeight: APPBAR_MOBILE,
  //   [theme.breakpoints.up("lg")]: {
  //     minHeight: APPBAR_DESKTOP,
  //     padding: theme.spacing(0, 3),
  //   },
  // }));
  return (
    <HideOnScroll>
      <RootStyle>
        <ToolbarStyle>
          <Box sx={{ px: 2, py: 1, pr: 4 }}>
            <RouterLink to="/">
              <Box component="img" src={logo} sx={{ height: 60 }}></Box>
            </RouterLink>
          </Box>
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 6.5 }} sx={{ mr: 10 }}>
            {routes.map((route) => {
              return <NavBarBtn key={route.name} route={route} />;
            })}
          </Stack>
        </ToolbarStyle>
      </RootStyle>
    </HideOnScroll>
  );
}

export default NavBar;
