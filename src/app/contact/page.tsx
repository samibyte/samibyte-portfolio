import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sami Adnan",
  description: "Get in touch with Sami Adnan for collaboration opportunities, project inquiries, or just to say hello. Available for high-impact digital engineering and innovative web development.",
};

const Contact = () => {
  return <ContactClient />;
};

export default Contact;

