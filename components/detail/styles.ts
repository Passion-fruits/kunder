import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 25px;
`;

export const MusicInformationWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 30px;
  .music-cover-img {
    width: 220px;
    height: 220px;
    border-radius: 5px;
    border: 1px solid rgb(240, 240, 240);
  }
`;

export const MusicInformationTextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  .music-title {
    font-size: 28px;
    font-weight: bold;
    color: ${COLOR.black};
    margin-bottom: 10px;
  }
  .artist-name {
    color: ${COLOR.text};
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .genre-mood-wrap {
    margin-top: 40px;
    appearance: none;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    & div {
      color: ${COLOR.black};
      font-size: 15px;
    }
  }
  .created-at {
    color: ${COLOR.text};
    font-size: 14px;
    margin-top: 5px;
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
  right: 0;
  bottom: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${COLOR.black};
  font-size: 16px;
  & svg {
    cursor: pointer;
  }
`;

export const Description = styled.textarea`
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-left: 4px solid ${COLOR.main};
  color: ${COLOR.black};
  font-size: 16px;
  margin-top: 30px;
  font-weight: 500;
`;

export const CommentFormInput = styled.input`
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
  .comment-wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    & p {
      font-size: 16px;
      color: ${COLOR.black};
      margin-top: 10px;
    }
  }
  .comment-info {
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
