import Grid from "@mui/material/Grid";
import "./Introduction.css";
// mui
import { styled } from "@mui/material/styles";

// Local
import Btn from "../../Components/Commons/Btn";
import { useInternalRouter } from "../../Router/routing";
// 사이드 바
import Sidebar from "../../Components/Bars/SideBar";
// Pages
import CNN from "../../Components/Introduction/Tech/CNN";
import SuperResolution from "../../Components/Introduction/Tech/SuperResolution";
import VMAF1 from "../../Components/Introduction/Tech/VMAF1";
import VMAF2 from "../../Components/Introduction/Tech/VMAF2";
import Project from "../../Components/Introduction/Project/Project";
// components
import Content from "../../Components/Commons/Content";

function Introduction() {
  const router = useInternalRouter();
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push("/Introduction/QuickStart");
  }
  return (
    <>
      <CNN />
      <SuperResolution />
      <VMAF1 />
      <VMAF2 />
      <Project />
      <div className="mb-4 text-center">
        <Btn content="QUICK START" onClick={onClick} />
      </div>
    </>
  );
}

export default Introduction;
