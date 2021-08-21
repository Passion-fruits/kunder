import styled from "@emotion/styled";
import { IMG_SIZE } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: ${`${IMG_SIZE}px`};
  & img {
    width: ${`${IMG_SIZE}px`};
    height: ${`${IMG_SIZE}px`};
    border-radius: 5px;
  }
  & h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 14px;
    color: ${COLOR.black};
    margin-bottom: 5px;
  }
  & span {
    font-size: 14px;
    color: ${COLOR.text};
  }
  & h5{
      font-size:15px;
      color:${COLOR.main};
      margin-top:10px;
      font-weight:500;
  }
`;