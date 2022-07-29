import DemoContent from "@fuse/core/DemoContent";
import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";

const Root = styled(FusePageSimple)({
  "& .FusePageSimple-header": {},
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
});

function ExamplePage(props) {
  const { t } = useTranslation("Facebook post scheduler Page");

  return (
    <Root
      header={
        <div className="p-24">
          <h4>{t("Facebook post scheduler Page")}</h4>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>FB POSt</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
    />
  );
}

export default ExamplePage;
