import InsideContentCard from "../../../Components/Cards/InsideContentCard";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import OutsideContentCard from "../../../Components/Cards/OutsideContentCard";
import Btn from "../../../Components/Commons/Btn";
import { useInternalRouter } from '../../../Router/routing';

function ImageFilterMain () {
  const router = useInternalRouter();
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push('/techDemos/ImageFilter/Experience');
  }

  const state = {
    origin: {
      title: "ORIGINAL",
      content: "원본 이미지 화질로 보여줍니다.",
      imgSrc: "https://maxst.icons8.com/vue-static/upscaler/slider/after_2.png"
    },
    gan: {
      title: "AI 필터",
      content: "GAN 필터로 개선한 화질로 보여줍니다.",
      imgSrc: "https://maxst.icons8.com/vue-static/upscaler/slider/after_2.png"
    },
    normal: {
      title: "일반 필터",
      content: "일반 계산식에 의해 개선한 화질로 보여줍니다.",
      imgSrc: "https://maxst.icons8.com/vue-static/upscaler/slider/after_2.png"
    },
  }

  return (
    <>
      <div className="relative">
        <div className="center container">
          <div className="big_title">필터별 이미지 화질 개선을 VMAF SCORE와 함께 확인할 수 있어요!</div>
          <div className="cards">
            <OutsideContentCard title={state.origin.title} content={state.origin.content} imgSrc={state.origin.imgSrc} />
            <ArrowRightIcon className="mt-5 mx-4" sx={{ color: '#F2FFFF', fontSize: 50}}/>
            <OutsideContentCard title={state.gan.title} content={state.gan.content} imgSrc={state.gan.imgSrc} />
            <OutsideContentCard title={state.normal.title} content={state.normal.content} imgSrc={state.normal.imgSrc} />
          </div>
          <div className="mb-4 text-center"> 
            <Btn
              content="직접 해보기"
              onClick={onClick}
            />
          </div>
        </div>
        {/* <div className="center container">
          <div className="big_title">이런 것들을 할 수 있어요!</div>
          <div className="cards row g-5">
            <div className="col col-12 col-lg-4">
              <InsideContentCard title={state.experience.title} content={state.experience.content} imgSrc={state.experience.imgSrc} />
            </div>
            <div className="col col-12 col-lg-4">
              <InsideContentCard title={state.experience.title} content={state.experience.content} imgSrc={state.experience.imgSrc} />
            </div>
            <div className="col col-12 col-lg-4">
              <InsideContentCard title={state.experience.title} content={state.experience.content} imgSrc={state.experience.imgSrc} />
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ImageFilterMain