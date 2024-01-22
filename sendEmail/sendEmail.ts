"use server";
import React from "react";
import { validateString } from "@/utils/motion";
import { Resend } from "resend";
import ContactFormEmail from "./ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const subject = formData.get("subject");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  await resend.emails.send({
    from: "Portfolio Form <onboarding@resend.dev>",
    to: "tiagonewalves@hotmail.com",
    subject: subject as string,
    reply_to: senderEmail as string,
    //text: message as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
    }),
  });
};
