import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./../../styles/index";

export const Wrapper = styled(WRAPPER)`
  background-color: black;
  box-sizing: content-box;
  padding: 18px 0;
  position: absolute;
  bottom: 0;
  box-shadow: 0px -3px 10px rgb(0, 0, 0, 0.1);
  position: fixed;
  z-index: 3;
`;

export const Container = styled(CONTAINER)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  gap: 17px;
  & div {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    & h3 {
      color: white;
      font-size: 17px;
      font-weight: bold;
    }
    & span {
      color: ${COLOR.text};
      font-size: 15px;
      margin-top: 5px;
    }
  }
`;

export const Control = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  & svg {
    cursor: pointer;
  }
`;

export const Center = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const CenterControl = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  & svg {
    cursor: pointer;
  }
`;

interface props {
  progress: number;
}

export const RangeContainer = styled.div<props>`
  margin-top: 30px;
  -webkit-appearance: none;
  width: 400px;
  height: 5px;
  background: ${(e) =>
    `linear-gradient(to right, ${COLOR.main} 0%, ${COLOR.main} 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  cursor: pointer;
  transition: background 450ms ease-in;
  border-radius: 2px;
  overflow: hidden;
  border: none;
  :hover {
    height: 5px;
  }
  ::-webkit-slider-thumb {
    opacity: 0;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid ${COLOR.main};
    border-radius: 50%;
    cursor: pointer;
  }
`;
