import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import mainBackground from "../../Assets/Image/mainBackground.jpg";
import logoWhite from "../../Assets/Image/logoWhite.png";
import "./HomeMain.css";

const PageDiv = styled("div")({
  height: "100%",
  width: "99.5vw",
  background: `linear-gradient( rgba(5, 21, 39, 0.5), rgba(5, 21, 39, 0.5)), url(${mainBackground})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Btn = styled(Button)({
  borderRadius: "30px",
  background: "#5F7B84",
  fontFamily: "Pretendard-Regular",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    backgroundColor: "#516970",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#516970",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function HomeMain() {
  return (
    <PageDiv>
      <Box component="img" src={logoWhite} sx={{ height: 102 }}></Box>
      <div>
        <div className="home-main-text">Super Vision은 Super Resolution 기술을 이용해</div>
        <div className="home-main-text">이미지 및 영상의 화질을 개선하는 서비스입니다</div>
      </div>
      <Btn variant="contained" sx={{ margin: "30px" }}>
        GET STARTED
      </Btn>
    </PageDiv>
  );
}

export default HomeMain;
