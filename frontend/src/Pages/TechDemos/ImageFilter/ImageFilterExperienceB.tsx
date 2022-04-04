import { useState } from "react";
import ImageUploadCard from "../../../Components/Cards/ImageUploadCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ImageResultCard from "../../../Components/Cards/ImageResultCard";
import Content from "../../../Components/Commons/Content";
import VmafResult from "../../../Components/TechDemos/ImageFilter/VmafResult";
import CropImage from "../../../Components/TechDemos/ImageFilter/CropImage";

function ImageFilterExperience() {
  const [file, setFile] = useState<Blob>(new Blob());
  const [isImgPreview, setIsImgPreview] = useState<boolean>(false);
  const [originImg, setOriginImg] = useState<string>("");
  const [normalImg, setNormalImg] = useState<string>("");
  const [srImg, setSrImg] = useState<string>("");
  const [normalVmaf, setNormalVmaf] = useState<number>(0);
  const [srVmaf, setSrVmaf] = useState<number>(0);
  const [diff, setDiff] = useState<number>(0);

  const [isCropModal, setIsCropModal] = useState<boolean>(false)

  const title: string = "TRY SUPER RESOLUTION on IMAGE";
  const content: string =
    "이미지를 업로드해서 일반 필터와 AI 필터의 화질 개선을 직접 확인하세요!\n화질이 개선된 이미지는 다운로드가 가능합니다";

  // function parentImgChange (file: Blob, imgPreviewUrl: string, isImgPreview: boolean): void {
  //   setFile(file)
  //   setImgPreviewUrl(imgPreviewUrl)
  //   setIsImgPreview(isImgPreview)
  //   console.log('parentImgChange', file)
  // }

  function parentImgChange(
    originImg: string,
    normalImg: string,
    srImg: string,
    normalVmaf: string,
    srVmaf: string,
    isImgPreview: boolean
  ): void {
    setOriginImg(originImg)
    setNormalImg(normalImg);
    setSrImg(srImg);
    setNormalVmaf(parseInt(normalVmaf));
    setSrVmaf(parseInt(srVmaf));
    setIsImgPreview(isImgPreview);
    const diff = parseInt(srVmaf) - parseInt(normalVmaf);
    setDiff(diff);
    console.log("parentImgChange", file);
  }

  function showCropImgModal() {
    setIsCropModal(!isCropModal)
  }

  return (
    <>
      <div className="relative container">
        <div className="center">
          <Content title={title} content={content} />
          <div className="cards">
            <ImageUploadCard page="B" originImg={originImg} parentImgChange={parentImgChange} showCropImgModal={showCropImgModal} />
            <ArrowRightIcon className="mt-5 mx-4" sx={{ color: "#F2FFFF", fontSize: 50 }} />
            <ImageResultCard
              title="일반 필터"
              file={file}
              imgPreviewUrl={normalImg}
              isImgPreview={isImgPreview}
              vmaf={normalVmaf}
            />
            <ImageResultCard
              title="AI 필터"
              file={file}
              imgPreviewUrl={srImg}
              isImgPreview={isImgPreview}
              vmaf={srVmaf}
              diff={diff}
            />
            <VmafResult normalVmaf={normalVmaf} srVmaf={srVmaf} diff={diff} />
          </div>
        </div>
      </div>
      {
      isCropModal &&
      <div className="">
        <CropImage 
          src="https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg"
          parentImgChange={parentImgChange}
          showCropImgModal={showCropImgModal}
        ></CropImage>
      </div>
      }
    </>
  );
}

export default ImageFilterExperience;
