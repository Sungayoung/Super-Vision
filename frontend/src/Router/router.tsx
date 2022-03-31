import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../Layout/main/index";

import Home from "../Pages/Home/Home";
import IntroductionMain from "../Pages/Introduction";
import QuickStart from "../Pages/Introduction/QuickStart";

import ImageFilterMain from "../Pages/TechDemos/ImageFilter/ImageFilterMain";
import ImageFilterExperience from "../Pages/TechDemos/ImageFilter/ImageFilterExperience";
import VideoFilterMain from "../Pages/TechDemos/VideoFilter/VideoFilterMain";
import VideoFilterExperience from "../Pages/TechDemos/VideoFilter/VideoFilterExperience";
import WebcamFilterMain from "../Pages/TechDemos/WebCamFilter/WebCamFilterMain";
import WebcamFilterExperience from "../Pages/TechDemos/WebCamFilter/WebCamFilterExperience";

// 화면 라우팅 테이블
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ element: <Navigate to="/" replace /> }, { path: "", element: <Home /> }],
    },
    {
      path: "/Introduction",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/Introduction" replace /> },
        { path: "", element: <IntroductionMain /> },
        { path: "QuickStart", element: <IntroductionMain /> },
      ],
    },
    {
      path: "/TechDemos",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/TechDemos" replace /> },
        { path: "", element: <ImageFilterMain /> },
        {
          path: "ImageFilter",
          children: [
            { element: <Navigate to="/TechDemos/ImageFilter" replace /> },
            { path: "", element: <ImageFilterMain /> },
            { path: "Experience", element: <ImageFilterExperience /> },
          ],
        },
        {
          path: "VideoFilter",
          children: [
            { element: <Navigate to="/TechDemos/VideoFilter" replace /> },
            { path: "", element: <VideoFilterMain /> },
            { path: "Experience", element: <VideoFilterExperience /> },
          ],
        },
        {
          path: "WebCamFilter",
          children: [
            { element: <Navigate to="/TechDemos/WebCamFilter" replace /> },
            { path: "", element: <WebcamFilterMain /> },
            { path: "Experience", element: <WebcamFilterExperience /> },
          ],
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
