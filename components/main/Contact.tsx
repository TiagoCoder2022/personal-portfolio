import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center max-w-[1920px]"
    >
      <Image
        unoptimized
        src="/planet.jpg"
        width={1920}
        height={900}
        alt="picture"
        objectFit="cover"
      />
    </section>
  );
};

export default Contact;
