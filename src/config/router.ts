import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../components/Home";
import Solar from "../components/Solar";

export interface Path {
  path: string;
  Component: React.FC;
}

const rootChildren: Path[] = [
  { path: "solar", Component: Solar },
  { path: "one", Component: One },
  { path: "two", Component: Two },
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }, ...rootChildren],
  },
]);

export const paths: Path[] = [{ path: "/", Component: Home }, ...rootChildren];
