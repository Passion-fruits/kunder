import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 25px;
`;

export const ImgWrapper = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  & svg {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 20px;
    cursor: pointer;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid rgb(240, 240, 240);
  }
`;

export const MusicInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 30px;
  .artist {
    color: ${COLOR.black};
    font-size: 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .genreWrap {
    margin-top: 30px;
    appearance: none;
    display: flex;
    align-items: center;
    & div {
      color: ${COLOR.black};
      font-size: 16px;
    }
  }
  .date {
    color: ${COLOR.text};
    font-size: 14px;
  }
`;

export const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  & h1 {
    font-size: 30px;
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
    margin-bottom: 5px;
    & span {
      color: ${COLOR.black};
      font-size: 16px;
    }
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 10px;
  background-color: #d4d4d4;
  margin: 0 13px;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 20px;
  align-items: center;
  color: ${COLOR.black};
  font-size: 16px;
  & svg {
    cursor: pointer;
  }
  & div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

export const Description = styled.textarea`
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-left: 4px solid ${COLOR.main};
  color: ${COLOR.text};
  font-size: 16px;
  margin-top: 30px;
  font-weight: 500;
`;

export const Comment = styled.input`
  width: 100%;
  padding: 22px;
  background-color: #f3f3f3;
  font-size: 16px;
  color: ${COLOR.black};
  border-radius: 5px;
  margin-top: 20px;
  &::placeholder {
    color: ${COLOR.text};
  }
`;

export const CommentContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 40px;
  & article {
    width: 100%;
    display: flex;
    gap: 30px;
    & img {
      width: 60px;
      height: 60px;
      border-radius: 80%;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .commentWrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    & p {
      font-size: 16px;
      color: ${COLOR.black};
      margin-top: 10px;
    }
  }
  .commentInfo {
    display: flex;
    align-items: center;
    font-size: 17px;
    color: ${COLOR.black};
    & span {
      font-size: 14px;
      font-weight: 500;
      margin-left: 8px;
      color: ${COLOR.text};
    }
  }
`;
