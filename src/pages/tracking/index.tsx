import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";



import Partition from "@/components/partition";
import TrackLanding from "./landing";
import Search from "./search";

const FaqIndex = () => {
  return (
    <div>
      <Navbar />
      <TrackLanding/>
      <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <Search/>
       
        </div>

      <Footer />
    </div>
  );
};

export default FaqIndex;

