import OutsideContentCard from "../../../Components/Cards/OutsideContentCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Content from "../../../Components/Commons/Content";

function WebCamFilterExperience() {
  return (
    <div>
      <Content
        title="Try SUPER RESOLUTION on WEB CAM"
        content="실시간으로 일반 필터와 AI 필터의 웹캠 화질 개선을 느껴보세요!\n어떤 필터의 화질이 더 좋아보이나요?"
      />
      <div className="outside-card-container">
        <OutsideContentCard
          title="ORIGINAL"
          content="당신의 웹캠 화질로 보여줍니다."
          imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
        />
        <ArrowRightIcon sx={{ color: "#F2FFFF", fontSize: 50 }} />
        <OutsideContentCard
          title="일반 필터"
          content="일반적인 계산식에 의한 개선한 화질로 보여줍니다."
          imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
        />
        <OutsideContentCard
          title="AI 필터"
          content="AI 학습 모델을 학습한 계산식에 의한 개선한 화질로 보여줍니다."
          imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
        />
      </div>
    </div>
  );
}

export default WebCamFilterExperience;
