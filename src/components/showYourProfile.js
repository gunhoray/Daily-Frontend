import React from "react";
import {
  ShowYourProfileContainer,
  ShowYourProfileDataBox,
  ShowYourProfileName,
  ShowYourProfileEmail,
} from "./showYourProfile.style";

/**
 * mainPage안의 ShowYourProfile page를 구성하는 함수
 * @returns ShowYourProfile Section in mainPage
 */
const ShowYourProfile = () => {
  return (
    <ShowYourProfileContainer>
      <ShowYourProfileDataBox>
        <ShowYourProfileName>SAHA</ShowYourProfileName>
        <ShowYourProfileEmail>SAHA@SAHA.com</ShowYourProfileEmail>
      </ShowYourProfileDataBox>
    </ShowYourProfileContainer>
  );
};

export default ShowYourProfile;
