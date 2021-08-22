import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 25px;
`;

export const MusicInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 38px;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
  }
  & div {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    & h1 {
      font-size: 25px;
      font-weight: bold;
      color: ${COLOR.black};
    }
    & span {
      color: ${COLOR.text};
      margin-top: 8px;
      font-size: 15px;
    }
    & aside {
      margin-top: 30px;
      display: flex;
      align-items: center;
      & span {
        color: ${COLOR.text};
        font-size: 15px;
      }
    }
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 13px;
  background-color: #d4d4d4;
  margin: 0 13px;
`;

export const HeartContainer = styled.aside`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${COLOR.text};
  font-size: 18px;
  position: absolute;
  right: 0;
  bottom: 0;
  & svg {
    cursor: pointer;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-left: 4px solid ${COLOR.main};
  color: ${COLOR.text};
  font-size: 16px;
  margin-top: 30px;
  font-weight:500;
`;

export const Comment = styled.input`
width:100%;
padding:22px;
background-color:#F3F3F3;
font-size:16px;
color:${COLOR.black};
border-radius:5px;
margin-top:20px;
&::placeholder{
    color:${COLOR.text};
}
`