import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../Layout/main/index";

import Home from "../Pages/Home/Home";
import Introduction from "../Pages/Introduction/Introduction";
import QuickStart from "../Pages/Introduction/QuickStart";

import ImageFilterMain from "../Pages/TechDemos/ImageFilter/ImageFilterMain";
import ImageFilterExperience from "../Pages/TechDemos/ImageFilter/ImageFilterExperience";
import WebCamFilterMain from "../Pages/TechDemos/WebCamFilter/WebCamFilterMain";

// 화면 라우팅 테이블
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/" replace /> }, 
        { path: "", element: <Home /> }
      ],
    },
    {
      path: "/Introduction",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/Introduction" replace /> }, 
        { path: '', element: <Introduction />},
        { path: "QuickStart", element: <QuickStart /> }
      ],
    },
    {
      path: "/TechDemos",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/TechDemos" replace /> },
        { path: '', element: <ImageFilterMain />},
        { path: "ImageFilter",
          children: [
            { element: <Navigate to="/TechDemos/ImageFilter" replace /> },
            { path: '', element: <ImageFilterMain /> },
            { path: 'Experience', element: <ImageFilterExperience /> },
          ]
        },
        { path: "WebCamFilter", element: <WebCamFilterMain /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
