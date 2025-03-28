import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

import TrackLanding from "./landing";
import Search from "./search";

const Tracking = () => {
  return (
    <div>
      <Navbar />
      <TrackLanding />
      <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <Search />
      </div>

      <Footer />
    </div>
  );
};

export default Tracking;

export async function getStaticProps(context: any) {
  return {
    props: {
      title: `Courier Direct | Tracking`,
      url: `https://www.courierdirect.com/tracking`,
    },
  };
}
