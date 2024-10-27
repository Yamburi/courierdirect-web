import Navbar from "@/components/navbar";
import React from "react";
import PrivacyPolicyLanding from "./landing";
import Partition from "@/components/partition";
import Footer from "@/components/footer";
import Privacypolicy from "./privacypolicy";
import axios from "axios";
import { API_BASE_URL } from "@/lib/config";
import { TContent } from "@/schemas/content.schema";
interface PrivacyProps {
  content: TContent[];
}
const PrivacyPolicyIndex = ({ content }: PrivacyProps) => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyLanding />
      <div className="bg-white flex flex-col gap-10 py-10">
        <Privacypolicy privacypolicyList={content} />
        <Partition />
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyIndex;
export async function getServerSideProps() {
  const contents = await axios.get(`${API_BASE_URL}/web/content`);

  return {
    props: {
      content: contents?.data?.data,
    },
  };
}
