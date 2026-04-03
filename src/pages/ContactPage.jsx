import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import ContactForm from "../components/ContactPage/ContactForm";
import { Link } from "react-router";
import Phone from "../assets/icons/phone.png";
import Mail from "../assets/icons/mail.png";

const ContactPage = () => {
  return (
    <Section className="pb-35">
      <Container>
        <div className="flex items-center gap-2 justify-start pb-20">
          <Link to="/" className="text-slate-300">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link to="/contact" className="text-800">
            Contact
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[340px_800px] gap-7.5 mb-12">
          <div className="bg-white rounded-sm shadow-xs border border-gray-100 ">
            <div className="px-6 py-8 flex flex-col gap-20">
              <div className="relative">
                <div className="flex items-center gap-4 pb-8">
                  <img src={Phone} alt="Phone" className="size-10" />
                  <h3 className="text-[16px] font-medium">Call To US</h3>
                </div>

                <p className="text-sm ledaing-5.25">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm ledaing-5.25 pt-4 after:absolute after:w-full after:h-px after:bg-[#C0C0C0] after:-bottom-9 after:left-0  after:z-10">
                  Phone: +8801611112222
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 pb-8">
                  <img src={Mail} alt="Phone" className="size-10" />
                  <h3 className="text-[16px] font-medium">Write To US</h3>
                </div>

                <p className="text-sm ledaing-5.25">
                 Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm ledaing-5.25 pt-4">
                 Emails: customer@exclusive.com
                </p>
                <p className="text-sm ledaing-5.25 pt-4">
                 Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
