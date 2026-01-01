"use client";

import Title from "../components/Title";
import ProfileCard from "../components/ProfileCard";

export default function Profiles() {
  return (
    <div className={"font-nova mx-8 my-4"}>
      <Title>Profiles</Title>
      <div className={"flex flex-row"}>
        <ProfileCard premium={true} id="0" />
        <ProfileCard premium={false} id="1" />
        <ProfileCard premium={false} id="2" />
      </div>
    </div>
  );
}
