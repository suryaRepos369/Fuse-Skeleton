import { Navigate } from "react-router-dom";
import FuseUtils from "@fuse/utils";
import ExampleConfig from "app/main/example/ExampleConfig";
import FuseLoading from "@fuse/core/FuseLoading";
import Error404Page from "app/main/404/Error404Page";
import Dummy from "./Dummy";
import Login from "../../app/main/fbpost/FbDemoPost/Login";
import Contacts from "../../app/main/fbpost/FbDemoPost/AddContacts";
import Message from "../../app/main/fbpost/FbDemoPost/AddMessage";
import Schedule from "../../app/main/fbpost/FbDemoPost/Schedule";
const routeConfigs = [ExampleConfig];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: "/",
    element: <Navigate to="login" />,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "addcontacts",
    element: <Contacts />,
  },
  {
    path: "addcontent",
    element: <Message />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
  {
    path: "events",
    element: <Dummy />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
