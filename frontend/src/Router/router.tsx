import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../Layout/main/index";

import Home from "../Pages/Home/Home";
import Introduction from "../Pages/Introduction/Introduction";
import QuickStart from "../Pages/Introduction/QuickStart";

import ImageFilterMain from "../Pages/TechDemos/ImageFilter/ImageFilterMain";
import ImageFilterExperienceA from "../Pages/TechDemos/ImageFilter/ImageFilterExperienceA";
import ImageFilterExperienceB from "../Pages/TechDemos/ImageFilter/ImageFilterExperienceB";
import WebCamFilterPage from "../Pages/TechDemos/WebCamFilter";

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
            { path: 'ExperienceA', element: <ImageFilterExperienceA /> },
            { path: 'ExperienceB', element: <ImageFilterExperienceB /> },
          ]
        },
        { path: "WebCamFilter", element: <WebCamFilterPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
