import React, { useState } from "react";
import {
  FooterSection,
  FooterContainer,
  FooterAboutUs,
  FooterCopyRight,
} from "./footer.style";
import AboutModal from "./aboutModal";

/**
 * mainPage안의 footer 컴포넌트를 구현하는 함수
 * @returns Footer component in magePage
 */
const Footer = () => {
  /**
   * About Us modal을 열고 닫아주는 state
   * @param {boolean} isOpenModal false를 initial value로 가지고 있는 state
   */
  const [isOpenModal, setIsOpenModal] = useState(false);
  /**
   * About Us modal을 열어주는 함수
   * @param {boolean} setIsOpenModal isOpenModal을 true로
   */
  const openModal = () => {
    setIsOpenModal(true);
  };
  /**
   * About Us modal을 닫아주는 함수
   * @param {boolean} setIsOpenModal isOpenModal을 false로
   */
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <FooterSection>
      <FooterContainer>
        <FooterAboutUs onClick={openModal}>About Us</FooterAboutUs>
        {isOpenModal && <AboutModal closeModal={closeModal} />}
        <FooterCopyRight>Copy Right</FooterCopyRight>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
