import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import ServiceLanding from "./landing";

import { API_BASE_URL } from "@/lib/config";
import axios from "axios";
import { TService } from "@/schemas/service.schema";
import { PARCEL } from "@/constants/images";
import Image from "next/image";
import ServiceDescription from "./servicedescription";
import { TServiceDetail } from "@/schemas/servicedetail.schema";
import Contact from "./contact";
import FaqLanding from "./landing";
import FaqContent from "./faqcontent";
import Partition from "@/components/partition";
interface ServiceProps {
  service: TService[];
  servicedetail: TServiceDetail[];
}
const ServiceIndex = ({ service, servicedetail }: ServiceProps) => {
  return (
    <div>
      <Navbar />
      <FaqLanding />
      <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <FaqContent/>
        <Partition/>
        </div>

      <Footer />
    </div>
  );
};

export default ServiceIndex;
export async function getServerSideProps() {
  const services = await axios.get(`${API_BASE_URL}/web/service`);
  const servicedetails = await axios.get(`${API_BASE_URL}/web/service-detail`);

  return {
    props: {
      service: services?.data?.data,
      servicedetail: servicedetails?.data?.data,
    },
  };
}
