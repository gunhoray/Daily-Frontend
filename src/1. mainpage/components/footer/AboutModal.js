import React, { useState } from "react";
import {
  ModalContainer,
  TeamPtag,
  ModalProfile,
  ModalDataInner,
  ModalData,
  ModalName,
  ModalGitAdress,
  ModalRole,
  ModalImg,
} from "./styled/footerModalEl";
import reactImg from "./img/react.png";
import nodeImg from "./img/node.png";

const AboutModal = ({ closeModal }) => {
  const [madeProfile, setMadeProfile] = useState([
    {
      id: 1,
      img: nodeImg,
      name: "김대욱(ackrima)",
      git: "https://github.com/ackrima",
      role: "Back-End",
    },
    {
      id: 2,
      img: nodeImg,
      name: "김형섭(hyeong08)",
      git: "https://github.com/hyeong08",
      role: "Back-End",
    },
    {
      id: 3,
      img: reactImg,
      name: "이건호(Ray)",
      git: "https://github.com/gunhoray",
      role: "Front-End",
    },
    {
      id: 4,
      img: reactImg,
      name: "육정백(SAHA)",
      git: "https://github.com/SAHA-YJB",
      role: "Front-End",
    },
  ]);

  return (
    <ModalContainer onClick={closeModal}>
      <TeamPtag>
        4 Team <span style={{ color: "#4eb8d1" }}>Profile</span>
      </TeamPtag>
      {madeProfile.map((item) => {
        return (
          <ModalProfile key={item.id}>
            <ModalDataInner>
              <ModalImg src={item.img} />
              <ModalData>
                <ModalName>{item.name}</ModalName>
                <ModalGitAdress to={item.git}>git-hub</ModalGitAdress>
                <ModalRole>{item.role}</ModalRole>
              </ModalData>
            </ModalDataInner>
          </ModalProfile>
        );
      })}
    </ModalContainer>
  );
};

export default AboutModal;
