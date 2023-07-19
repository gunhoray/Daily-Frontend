import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
`;
export const TeamPtag = styled.p`
  color: #fff;
  font-size: 35px;
  font-weight: 700;
`;
export const ModalProfile = styled.div`
  margin-bottom: 20px;
`;
export const ModalDataInner = styled.div`
  width: 400px;
  height: 120px;
  border: 1px solid #fff;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
`;
export const ModalImg = styled.img`
  width: 90px;
  height: 90px;
  margin-top: 15px;
  margin-left: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;
export const ModalData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  margin-left: 18px;
  flex-shrink: 1;
`;
export const ModalName = styled.div`
  width: 100%;
  height: auto;
  align-self: stretch;
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;
export const ModalGitAdress = styled(Link)`
  width: 100%;
  height: auto;
  align-self: stretch;
  color: #45e8bc;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
`;
export const ModalRole = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  color: #fff;
  padding: 4px 0px;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`;
