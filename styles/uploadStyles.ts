import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 50px;
  width: 800px;
  margin-bottom: 100px;
`;

export const Tip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  & div {
    border: 1px solid ${COLOR.main};
    border-radius: 24px;
    font-size: 16px;
    color: ${COLOR.main};
    padding: 5px 15px;
  }
  & p {
    margin: 0;
    padding: 0;
    color: ${COLOR.text};
    font-size: 16px;
  }
`;

export const UploadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const UploadBtn = styled.button`
  width: 190px;
  height: 190px;
  border-radius: 80%;
  border: 1px dashed ${COLOR.text};
  background-color: white;
  color: ${COLOR.background};
  font-size: 80px;
  font-weight: bold;
  &::after {
    content: "+";
  }
`;

export const FlexContainer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  & input,
  select,
  textarea {
    padding: 13px 20px;
    color: ${COLOR.black};
    border: 1px solid ${COLOR.black};
    border-radius: 3px;
    font-size: 16px;
    &::placeholder {
      color: ${COLOR.text};
    }
  }
  & textarea {
    height: 130px;
    resize: none;
  }
  & span {
    color: ${COLOR.main};
    font-size: 16px;
  }
`;

export const SelectContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 260px);
`;
