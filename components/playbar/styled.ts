import styled from "@emotion/styled";
import { CONTAINER, WRAPPER } from "./../../styles/index";

export const Wrapper = styled(WRAPPER)`
  background-color: black;
  box-sizing: content-box;
  padding: 18px 0;
  position: absolute;
  bottom: 0;
  box-shadow: 0px -3px 10px rgb(0, 0, 0, 0.1);
  position:fixed;
`;

export const Container = styled(CONTAINER)`
  height: 80px;
`;
