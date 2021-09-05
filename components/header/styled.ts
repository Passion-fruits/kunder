import styled from "@emotion/styled";
import { COLOR, CONTAINER, HEADER_HEIGHT, WRAPPER } from "./../../styles/index";

export const Wrapper = styled(WRAPPER)`
  height: ${`${HEADER_HEIGHT}px`};
  position: fixed;
  z-index: 10;
`;

export const Cotainer = styled(CONTAINER)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LEFT_SIDE = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  & img {
    height: 25px;
  }
  & span {
    color: ${COLOR.black};
    font-size: 18px;
    cursor: pointer;
    &:last-of-type {
      color: ${COLOR.red};
    }
  }
`;

export const RIGHT_SIDE = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & div,
  button {
    background-color: ${COLOR.background};
    border-radius: 3px;
  }
  & div {
    width: 300px;
    padding: 13px 20px;
    display: flex;
    align-items: center;
  }
  & input {
    color: ${COLOR.black};
    font-size: 16px;
    &::placeholder {
      color: ${COLOR.text};
    }
    margin-left: 16px;
    background: none;
  }
  & button {
    font-size: 16px;
    padding: 8px 15px;
    color: ${COLOR.text};
    &:first-of-type {
      margin-left: 10px;
    }
  }
`;
