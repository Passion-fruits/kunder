import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/index";

export const MainTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .kunder-naming-intro {
    font-size: 23px;
    color: ${COLOR.black};
    font-family: "Agency FB Bold", arial;
  }
  .sub-intro {
    margin-top: 10px;
    font-size: 17px;
    font-weight: 500;
    color: ${COLOR.text};
  }
  .content-box {
    padding: 25px;
  }
`;

export const ContentsFlexWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
  .column-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const PlayBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 80%;
  background-color: ${COLOR.main};
  position: absolute;
  bottom: 0;
  z-index: 3;
  margin: 25px;
  & svg {
    margin-left: 5px;
  }
`;

export const RecommendMusicWrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid rgb(240, 240, 240);
  position: relative;
  & img {
    width: 100%;
    height: 100%;
  }
  .img-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    color: white;
    background: linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.8));
    .cover-music-info {
      display: flex;
      flex-direction: column;
      padding-top: 190px;
      & h1 {
        font-size: 25px;
      }
      & h3 {
        font-size: 18px;
        font-weight: 500;
        margin-top: 5px;
        opacity: 0.8;
      }
    }
  }
`;

interface genreWrapProps {
  backgroundColor: string;
  height: string;
  imgSize: string;
}

export const RecommendGenreWrapper = styled.div<genreWrapProps>`
  position: relative;
  width: 380px;
  height: ${(res) => res.height};
  background-color: ${(res) => res.backgroundColor};
  border-radius: 10px;
  color: white;
  & h1 {
    font-size: 18px;
  }
  & h3 {
    font-size: 15px;
    margin-top: 5px;
    font-weight: 500;
  }
  & img {
    width: ${(res) => res.imgSize};
    height: ${(res) => res.imgSize};
    transform: rotate(20deg);
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 35px;
    box-shadow: 0px 3px 8px rgb(0, 0, 0, 0.2);
    z-index: 3;
  }
`;
