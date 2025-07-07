import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

const contactusNosPagina = () => {
  return (
    <div className=" p-6 bg-bg-bage">
      <h1 className="text-2xl font-bold mb-6 text-center text-main-orange">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  );
};

export default contactusNosPagina;
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};
