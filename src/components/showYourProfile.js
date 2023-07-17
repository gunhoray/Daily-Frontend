import React from "react";
import {
  ShowYourProfileContainer,
  ShowYourProfileDataBox,
  ShowYourProfileName,
  ShowYourProfileEmail,
} from "./showYourProfile.style";

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
