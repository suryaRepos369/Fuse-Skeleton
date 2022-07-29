import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    translate: "APPLICATIONS",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "login-component",
        title: "Fb",
        translate: "Login",
        type: "item",
        icon: "whatshot",
        url: "login",
      },
      {
        id: "event-component",
        title: "Example",
        translate: "Show-Event",
        type: "item",
        icon: "whatshot",
        url: "events",
      },
      {
        id: "constact-component",
        title: "Contact",
        translate: "Add-Contacts",
        type: "item",
        icon: "whatshot",
        url: "addcontacts",
      },
      {
        id: "message-component",
        title: "AddPost",
        translate: "Add-Post",
        type: "item",
        icon: "whatshot",
        url: "addcontent",
      },
      {
        id: "schedule-component",
        title: "schedule",
        translate: "Schedule-Post",
        type: "item",
        icon: "whatshot",
        url: "schedule",
      },
    ],
  },
];

export default navigationConfig;
