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
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    padding: auto;
    border-radius: 10px;
  }
`;
export const FooterCopyRight = styled.div`
  width: 120px;
  align-self: stretch;
  text-align: center;
  color: black;
  font-size: 12px;
  font-family: Roboto;
  word-wrap: break-word;
`;
