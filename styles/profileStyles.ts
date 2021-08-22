import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 30px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 38px;
  position: relative;
  & img {
    width: 190px;
    height: 190px;
    border-radius: 80%;
    box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.2);
  }
  & section {
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    & h1 {
      font-size: 28px;
      font-weight: bold;
      color: ${COLOR.black};
    }
    & span {
      color: ${COLOR.text};
      font-size: 17px;
      font-weight: 500;
      margin-top: 8px;
      margin-left: 2px;
    }
    & article {
      display: flex;
      gap: 22px;
      margin-top: 40px;
      align-items: center;
      & svg {
        cursor: pointer;
      }
    }
  }
  & button {
    padding: 7px 20px;
    font-size: 15px;
    background-color: #0099ff;
    color: white;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 3px;
  }
`;

export const Menu = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom:30px;
`;

interface Selection {
  check: boolean;
}

export const Selection = styled.span<Selection>`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${(res) => (res.check ? COLOR.main : COLOR.text)};
  padding-bottom: 15px;
  border-bottom: 3px solid ${(res) => (res.check ? COLOR.main : "#fff")};
`;
