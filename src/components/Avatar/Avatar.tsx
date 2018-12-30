import * as React from "react";
import { variant, width } from "styled-system";
import styled from "../../styled-components";
import { defaultTheme, ITheme } from "../../theme";
import { space } from "../../theme/variables";

interface IAvatarProps {
  src?: string;
  alt?: string;
  variant?: "circle" | "curved";
  width?: number;
  theme: ITheme;
}

const avatars = variant({
  key: "avatars",
  prop: "variant",
});

const AvatarStyled = styled("img")<IAvatarProps>`
  ${avatars}
  ${width}
  height: auto;
`;

AvatarStyled.defaultProps = {
  theme: defaultTheme,
  variant: "circle",
  width: `${space[6]}px`,
};

const Avatar = (props: IAvatarProps) => <AvatarStyled {...props} />;

export default Avatar;
