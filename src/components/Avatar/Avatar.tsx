import * as React from "react";
import { width } from "styled-system";
import styled from "../../styled-components";
import { space } from "../../theme/variables";

interface IAvatarProps {
  src?: string;
  alt?: string;
  width?: number;
}

const AvatarStyled = styled("img")<IAvatarProps>`
  ${width}
  height: auto;
  border-radius: 100%;
`;

AvatarStyled.defaultProps = {
  width: `${space[6]}px`,
};

const Avatar = (props: IAvatarProps) => <AvatarStyled {...props} />;

export default Avatar;
