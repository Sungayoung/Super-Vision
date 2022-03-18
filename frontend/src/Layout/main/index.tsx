import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const MainLayout = () => {
  const APP_BAR_MOBILE = 64;
  const APP_BAR_DESKTOP = 92;

  const RootStyle = styled('div')({
    backgroundColor: '#051527',
    height: '100%',
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  });

  const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    color: '#F2FFFF',
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    // paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }));

  return (
    <RootStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default MainLayout;
