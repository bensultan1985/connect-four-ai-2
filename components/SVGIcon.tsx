import styled from "styled-components";
import LinkNext from "next/link";

export const SVGIcon = ({
  children,
  width = "100%",
  height = "100%",
  to,
  onClick,
}: {
  children: JSX.Element;
  width?: string;
  height?: string;
  to?: string;
  onClick?: () => void;
}) => {
  return (
    <SVGTopContainer width={width} height={height} to={to} onClick={onClick}>
      {to ? (
        <LinkNext href={to}>
          <SVGIconContainer>{children}</SVGIconContainer>
        </LinkNext>
      ) : (
        <SVGIconContainer>{children}</SVGIconContainer>
      )}
    </SVGTopContainer>
  );
};

interface SVGTopContainerProps {
  width: string;
  height: string;
  to?: string;
  onClick?: () => void;
}
const SVGTopContainer = styled.div<SVGTopContainerProps>`
  //background-color: #3ec90f;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${(p) => (p.to || p.onClick ? "pointer" : "default")};
`;

const SVGIconContainer = styled.div`
  //background-color: #42AC98;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
