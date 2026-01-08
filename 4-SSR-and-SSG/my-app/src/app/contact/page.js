"use client";

import Title from "../components/Title";
import ContactForm from "../components/ContactForm";

export default function Profiles() {
  return (
    <div className={"font-nova mx-8 my-4"}>
      <Title>Contact</Title>
      <div className={"flex flex-row"}>
        <ContactForm />
      </div>
    </div>
  );
}
