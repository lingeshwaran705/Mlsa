import React from "react";
import {
  Wrap,
  InnerWrapper,
  Heading,
  Main,
  OuterWrapper,
} from "../styledComponents/ProfileCardStyle";
import data from "../data/ProfileData";
import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <>
      <Wrap leads>
        <InnerWrapper>
          <Heading>Pillars of our Community</Heading>
          <Main>
            {data.map((item) => {
              return <ProfileCard key={item.id} data={item} />;
            })}
          </Main>
        </InnerWrapper>
      </Wrap>
    </>
  );
}

export default React.memo(Profile);
