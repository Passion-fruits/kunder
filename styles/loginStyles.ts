import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)`
  padding-top: 100px;
`;

export const Container = styled(CONTAINER)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    color: ${COLOR.black};
    font-size: 30px;
    font-family: "Agency FB";
    font-weight: bold;
  }
  & div {
    cursor: pointer;
    border: 1px solid ${COLOR.black};
    width: 340px;
    height: 50px;
    font-size: 18px;
    color: ${COLOR.black};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        margin-right:10px;
    }
    &:first-of-type {
      margin-top: 30px;
      color: ${COLOR.black};
    }
    &:last-of-type {
      color: white;
      background-color: ${COLOR.black};
      margin-top: 10px;
      margin-bottom: 40px;
      color: white;
    }
  }
  & span {
    cursor: pointer;
    color: ${COLOR.text};
  }
  & p {
    color: ${COLOR.text};
    font-size: 16px;
    margin-top: 13px;
    &:last-of-type {
      margin-top: 60px;
      text-align: center;
      line-height: 20px;
    }
  }
`;
