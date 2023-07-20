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
} from "./aboutModal.style";
import nodeImg from "../img/node.png";
import reactImg from "../img/react.png";

/**
 * Footer안에 있는 About Us를 통해 팀 구성원을 보여주는 modal 컴포넌트를 구현하는 함수
 * @param {boolean} closeModal modal을 열고 닫기 위한 state
 * @returns About Us modal component
 */
const AboutModal = ({ closeModal }) => {
  /**
   * 팀원들의 정보를 담고 있는 state
   * @param {array} madeProfile 각 팀원들의 정보가 담긴 객체를 담은 배열
   */
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
