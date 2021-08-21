import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "./index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  & label {
    cursor: pointer;
  }
  & input[type="radio"] {
    display: none;
  }
`;

export const GerneList = styled.div`
  width: 100%;
  display: flex;
  gap: 38px;
  font-size: 18px;
  font-weight: bold;
  margin-top:10px;
  & label {
    padding-bottom: 7px;
  }
`;

export const SortList = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  font-size: 17px;
  color: ${COLOR.text};
  margin-bottom: 40px;
`;
