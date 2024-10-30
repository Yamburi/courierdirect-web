import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import ServiceLanding from "./landing";
import DomesticService from "./domesticservice";
import { API_BASE_URL } from "@/lib/config";
import axios from "axios";
import { TService } from "@/schemas/service.schema";

import ServiceDescription from "./servicedescription";
import { TServiceDetail } from "@/schemas/servicedetail.schema";
import Contact from "./contact";
import Partition from "@/components/partition";
interface ServiceProps {
  service: TService[];
  servicedetail: TServiceDetail[];
}
const ServiceIndex = ({ service, servicedetail }: ServiceProps) => {
  return (
    <div>
      <Navbar />
      <ServiceLanding />
      <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <DomesticService serviceList={service} />
        <Partition />
        <ServiceDescription serviceDetailList={servicedetail} />
        <Partition />

        <Contact />
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
      title: `Courier Direct | Services`,
      url: `https://www.courierdirect.com/service`,
    },
  };
}
