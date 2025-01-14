import { type ReactNode } from "react";

import { Headline, Root, SubTitle, Title } from "./styled";

interface Props {
  title: string;
  subTitle?: string;
  avatar?: ReactNode;
  action?: ReactNode;
}

export const UiModalHeader = ({ title, action, subTitle, avatar }: Props) => {
  return (
    <Root>
      {avatar}
      <Headline>
        <Title>{title}</Title>
        {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Headline>
      {action}
    </Root>
  );
};
