import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";


import { API_BASE_URL } from "@/lib/config";
import axios from "axios";
import { TFaq } from "@/schemas/faq.schema";



import FaqLanding from "./landing";
import FaqContent from "./faqcontent";
import Partition from "@/components/partition";
interface ServiceProps {
  faq: TFaq[];
  
}
const FaqIndex = ({ faq }: ServiceProps) => {
  return (
    <div>
      <Navbar />
      <FaqLanding />
      <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <FaqContent faqList={faq} />
        <Partition/>
        </div>

      <Footer />
    </div>
  );
};

export default FaqIndex;
export async function getServerSideProps() {
  const faqs = await axios.get(`${API_BASE_URL}/web/faq`);
 

  return {
    props: {
      faq: faqs?.data?.data,
      
    },
  };
}
