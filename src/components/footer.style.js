import { styled } from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  height: 40px;
  padding: 60;
  background: white;
  justify-content: center;
  align-items: center;
  gap: 60;
  display: inline-flex;
`;
export const FooterContainer = styled.div`
  width: 266px;
  justify-content: center;
  align-items: center;
  gap: 60;
  display: flex;
  position: relative;
`;
export const FooterAboutUs = styled.div`
  width: 120px;
  align-self: stretch;
  text-align: center;
  color: black;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
export const FooterCopyRight = styled.div`
  width: 120px;
  align-self: stretch;
  text-align: center;
  color: black;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
`;
