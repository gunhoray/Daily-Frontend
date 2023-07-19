import React, { useState } from "react";
import {
  FooterSection,
  FooterContainer,
  FooterAboutUs,
  FooterCopyRight,
} from "./footer.style";
import AboutModal from "./aboutModal";
const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
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
