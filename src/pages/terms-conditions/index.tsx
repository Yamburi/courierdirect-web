import Navbar from "@/components/navbar";
import React from "react";
import Partition from "@/components/partition";
import Footer from "@/components/footer";
import axios from "axios";
import { API_BASE_URL } from "@/lib/config";
import { TContent } from "@/schemas/content.schema";
import TOCLanding from "./landing";
import TOC from "./t&c";
interface PrivacyProps {
  content: TContent[];
}
const TocIndex = ({ content }: PrivacyProps) => {
  return (
    <div>
      <Navbar />
      <TOCLanding />
      <div className="bg-white flex flex-col gap-10 py-10">
        <TOC tocList={content} />
        <Partition />
      </div>

      <Footer />
    </div>
  );
};

export default TocIndex;
export async function getServerSideProps() {
  const contents = await axios.get(`${API_BASE_URL}/web/content`);

  return {
    props: {
      content: contents?.data?.data,
      title: `Courier Direct | Terms & Condition`,
      url: `https://www.courierdirect.com/terms-conditions`,
    },
  };
}
