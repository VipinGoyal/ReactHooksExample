import * as React from "react";
import { Section } from "../../../utils/config";

interface Props {
  history: any;
}

export const HomePage = (props: Props) => {
  const { history } = props;

  const onClickSection = (path: string) => {
    history.push(`/${path}`);
  };
  return (
    <ul className="AppG">
      {Object.keys(Section).map((section, idx) => (
        <li className="AppGLi" key={idx}>
          <div className="box" onClick={() => onClickSection(section)}>
            <h3>{Section[section].name}</h3>
            <ul className="s1">
              {Section[section].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};