import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import mainBackground from "../../Assets/Image/mainBackground.jpg";
import logoWhite from "../../Assets/Image/logoWhite.png";

const PageDiv = styled("div")({
  height: "100%",
  width: "99.5vw",
  background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainBackground})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});


function HomeMain() {
  return (
    <PageDiv>
      <Box component="img" src={logoWhite} sx={{ height: 102 }}></Box>
      <div>
        <div className="home-main-text">Super Vision은 Super Resolution 기술을 이용해</div>
        <div className="home-main-text">이미지 및 영상의 화질을 개선하는 서비스입니다</div>
      </div>
      <Button variant="contained" sx={{margin: "30px"}}>GET STARTED</Button>
    </PageDiv>
  );
}

export default HomeMain;
