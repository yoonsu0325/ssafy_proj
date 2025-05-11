import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Screen />,
  },
  {
    path: "/price",
    element: <ScreenScreen />,
  },
  {
    path: "/area",
    element: <ScreenWrapper />,
  },
  {
    path: "/join",
    element: <Screen3 />,
  },
  {
    path: "/favoriteRegion",
    element: <Screen4 />,
  },
  {
    path: "/economyIndicator",
    element: <Screen5 />,
  },
  {
    path: "/login",
    element: <Screen6 />,
  },
  {
    path: "/sideBar",
    element: <Screen7 />,
  },
  {
    path: "/region",
    element: <Screen8 />,
  },
  {
    path: "/mypage",
    element: <Screen9 />,
  },
  {
    path: "*",
    element: <Screen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
