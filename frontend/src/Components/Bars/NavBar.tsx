import { styled } from "@mui/material/styles";
import { Box, Stack, Button, AppBar, Toolbar, Slide, useScrollTrigger } from "@mui/material";
import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";
import logo from "../../Assets/Image/logo.png";

function NavBar() {
  interface scrollProps {
    window?: () => Window;
    children: React.ReactElement;
  }

  const HideOnScroll = (props: scrollProps) => {
    const { children, window } = props;
    console.log(props);
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
  const location = useLocation();

  const routes = [
    { path: "/", name: "Home" },
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
              const isCurrentPath = matchPath(location.pathname, route.path);
              const fontColor = isCurrentPath ? "#CEF3FF" : "#F2FFFF";
              const fontWeight = isCurrentPath ? "600" : "200";
              return (
                <span key={route.name}>
                  <Button
                    id={`${route.name}-btn`}
                    to={route.path}
                    size="large"
                    sx={{ fontFamily: "Pretendard-Regular", color: fontColor, fontWeight }}
                    component={RouterLink}
                  >
                    {route.name}
                  </Button>
                </span>
              );
            })}
          </Stack>
        </ToolbarStyle>
      </RootStyle>
    </HideOnScroll>
  );
}

export default NavBar;
