import InsideContentCard from "../../../Components/Cards/InsideContentCard";

function ImageFilterMain () {
  const state = {
    experience: {
      title: "SUPER_SCENARY",
      content: "내가 제주도 가기 전 날 유채꽃이 져서 인스타그램에 자랑을 못 하셨나요?\n\n그 꽃, 저희가 다시 피워드립니다!",
      imgSrc: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/Kkqlix66NRMKCXDH-KH0cSg5Jro.JPG"
    },
  }

  return (
    <>
      <div className="relative">
        <div className="center container">
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
        </div>
      </div>
    </>
  )
}

export default ImageFilterMain