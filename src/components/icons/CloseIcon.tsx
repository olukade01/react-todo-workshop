import { SVGProps } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  stroke: tomato;
`;

const CloseIcon = (props: SVGProps<SVGElement>) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </StyledSVG>
  );
};

export default CloseIcon;
