import OutsideContentCard from "../../../Components/Cards/OutsideContentCard";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from '@mui/material/styles'
import Btn from '../../../Components/Commons/Btn'
import "./WebCamFilterMain.css"
import { useInternalRouter } from '../../../Router/routing';

const PageDiv = styled('div')({
  paddingTop: '84px',
  height: '100%'
})

function WebCamFilterMain() {
  const router = useInternalRouter();
  const onClick = () => {
    router.push('/techDemos/WebcamFilter/Experience');
  }

  return (
    <div className="relative">
      <div className="center container">
        <div style={{textAlign: 'center', fontSize: '36px', fontWeight: "600",}}>실시간으로 당신 웹캠의 화질개선을 느껴보세요!</div>
        <div className="cards">
          <OutsideContentCard
            title="ORIGINAL"
            content={"당신의 웹캠\n화질로 보여줍니다."}
            imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
          />
          <ArrowRightIcon className="mt-5 mx-4" sx={{ color: '#F2FFFF', fontSize: 50}}/>
          <OutsideContentCard
            title="일반 필터"           
            content={"일반적인 계산식에 의해\n개선한 화질로 보여줍니다."}
            imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
          />
          <OutsideContentCard
            title="AI 필터"
            content={"AI 학습 모델을 학습한 계산식에 의해\n개선한 화질로 보여줍니다."}
            imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
          />
        </div>
      </div>
      <div className="mb-4 text-center"> 
        <Btn
          content="직접 해보기"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default WebCamFilterMain;
