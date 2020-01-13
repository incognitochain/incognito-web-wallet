import * as React from "react";
import { Styled } from "./styled";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { translateSelector, II18n } from "src/i18n";

interface IProps {}

const Settings = (props: IProps) => {
  const translate: II18n = useSelector(translateSelector);
  return (
    <Styled className="settings">
      <Helmet title={translate.settings.helmet} />
    </Styled>
  );
};

export default Settings;
