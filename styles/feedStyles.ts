import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)``;

const FEED_IMG_SIZE = "375px";

export const Container = styled(CONTAINER)`
  padding-top: 30px;
  width: 720px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const LEFT_SIDE = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  position: fixed;
  & h1 {
    font-size: 20px;
    color: ${COLOR.black};
  }
  & span {
    font-size: 16px;
    color: ${COLOR.text};
    margin-top: 12px;
  }
  & select {
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    color: ${COLOR.black};
    border: 1px solid ${COLOR.text};
    margin-top: 10px;
    appearance: none;
    outline: none;
    background-image: ${`linear-gradient(45deg, transparent 50%,  ${COLOR.black} 50%),
      linear-gradient(135deg,  ${COLOR.black} 50%, transparent 50%)`};
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    &:first-of-type {
      margin-top: 30px;
    }
  }
  & p {
    font-size: 13px;
    margin-top: 20px;
    color: ${COLOR.text};
    line-height: 20px;
  }
`;

export const RIGHT_SIDE = styled.div`
  position: absolute;
  right: 0;
  width: ${FEED_IMG_SIZE};
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-sizing: content-box;
  padding-bottom: 200px;
`;

export const FeedCardWrapper = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  width: ${FEED_IMG_SIZE};
  height: ${FEED_IMG_SIZE};
  position: relative;
  & img {
    border-radius: 5px;
    border: 1px solid rgb(240, 240, 240);
    width: 100%;
    height: 100%;
  }
`;

export const MusicInfo = styled.div`
  position: absolute;
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  & mark {
    position: absolute;
    padding: 8px 15px;
    background-color: ${COLOR.black};
    color: white;
    font-size: 13px;
    &:last-of-type {
      margin-top: 35px;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  & div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 17px;
    color: ${COLOR.black};
  }
  & svg {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  & div {
    display: flex;
    gap: 10px;
    align-items: center;
    & h3 {
      font-size: 17px;
      color: ${COLOR.main};
    }
    & span {
      color: ${COLOR.text};
      font-size: 13px;
    }
  }
  & textarea {
    padding: 0;
    border: none;
    font-size: 16px;
    color: ${COLOR.text};
    margin-top: 0px;
  }
`;
