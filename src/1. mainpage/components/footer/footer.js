import React, { useState } from "react";
import {
  FooterSection,
  FooterContainer,
  FooterAboutUs,
  FooterCopyRight,
} from "./styled/footerEl";
import AboutModal from "./AboutModal";

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
        <FooterCopyRight>CopyRight</FooterCopyRight>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;