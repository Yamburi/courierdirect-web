import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TSlider } from "@/schemas/slider.schema";
import Slider from "./home/slider";
import { API_BASE_URL } from "@/lib/config";
import axios from "axios";
import { TService } from "@/schemas/service.schema";
import { TWhyChooseUs } from "@/schemas/whychooseus.schema";
import WhyChooseUs from "./home/why-us";
import Aim from "./home/aim";
import { TContent } from "@/schemas/content.schema";
import AboutUs from "./home/aboutus";
interface HomeProps {
  slider: TSlider[];
  service: TService[];
  whychoous: TWhyChooseUs[];
  content: TContent[];
}
export default function Home({ slider, whychoous, content }: HomeProps) {
  return (
    <div>
      <main>
        <Navbar />
        <Slider sliderList={slider} />
        <div className="bg-gray-100 flex flex-col gap-10 py-10">
          <WhyChooseUs whychooseusList={whychoous?.slice(0, 3)} />
          <Aim aimContent={content} />
          <AboutUs aboutContent={content} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const sliders = await axios.get(`${API_BASE_URL}/web/slider`);
  // const services = await axios.get(`${API_BASE_URL}/web/service`);
  const whychoouss = await axios.get(`${API_BASE_URL}/web/why-us`);
  const contents = await axios.get(`${API_BASE_URL}/web/content`);

  return {
    props: {
      slider: sliders?.data?.data,
      // service: services?.data?.data,
      whychoous: whychoouss?.data?.data,
      content: contents?.data?.data,
    },
    // revalidate: 10,
  };
}
