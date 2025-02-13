import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TSlider } from "@/schemas/slider.schema";
import Slider from "./home/slider";
import { API_BASE_URL } from "@/lib/config";
import axios from "axios";
import { TWhyChooseUs } from "@/schemas/whychooseus.schema";
import WhyChooseUs from "./home/why-us";
import Aim from "./home/aim";
import { TContent } from "@/schemas/content.schema";
import AboutUs from "./home/aboutus";
import WeAccept from "./home/weaccept";
import Testimonial from "./home/testimonial";
import { TTestimonial } from "@/schemas/testimonial.schema";
interface HomeProps {
  slider: TSlider[];

  whychoous: TWhyChooseUs[];
  content: TContent[];
  testimonial: TTestimonial[];
}
export default function Home({
  slider,
  whychoous,
  content,
  testimonial,
}: HomeProps) {
  return (
    <div>
      <main>
        <Navbar />
        <Slider sliderList={slider} />
        <div className="bg-gray-100 flex flex-col gap-10 py-10">
          <WhyChooseUs whychooseusList={whychoous?.slice(0, 3)} />
          <Aim aimContent={content} />
          <AboutUs aboutContent={content} />
          <WeAccept />
          <Testimonial testimonialList={testimonial} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const sliders = await axios.get(`${API_BASE_URL}/web/slider`);
    const whychoouss = await axios.get(`${API_BASE_URL}/web/why-us`);
    const contents = await axios.get(`${API_BASE_URL}/web/content`);
    const testimonials = await axios.get(`${API_BASE_URL}/web/testimonial`);
    return {
      props: {
        slider: sliders?.data?.data,
        // service: services?.data?.data,
        whychoous: whychoouss?.data?.data,
        content: contents?.data?.data,
        testimonial: testimonials?.data?.data,
      },
      // revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        slider: [],
        // service: services?.data?.data,
        whychoous: [],
        content: [],
        testimonial: [],
      },
      // revalidate: 10,
    };
  }
}
