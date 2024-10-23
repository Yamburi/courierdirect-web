import React, { useState } from "react";
import Image from "next/image";
import {
  about,
  Aboutus1,
  Aboutus2,
  Aboutus3,
  appstore,
  aws,
  cloudflare,
  dart,
  digitalocean,
  docker,
  flutter,
  googlecloud,
  kotlin,
  kubernets,
  mongodb,
  mysql,
  postgresql,
  redis,
  sqlite,
  swiftui,
  tech1,
  tech10,
  tech11,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
} from "@/constants/images";

const Technologies = () => {
  const [tap, setTap] = useState(1);

  const techData = [
    {
      id: 1,
      name: "Web Development",
      images: [
        tech1,
        tech2,
        tech3,
        tech4,
        tech5,
        tech6,
        tech7,
        tech9,
        tech11,
        tech10,
      ],
    },
    {
      id: 2,
      name: "App Development",
      images: [flutter, appstore, dart, swiftui, kotlin],
    },
    {
      id: 3,
      name: "Database",
      images: [mongodb, mysql, postgresql, sqlite, redis],
    },
    {
      id: 4,
      name: "Cloud Platform",
      images: [aws, googlecloud, kubernets, docker, cloudflare, digitalocean],
    },
  ];

  return (
    <div className="flex bg-blue-100 flex-col justify-center items-center py-10">
      <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
        <div className="flex max-large:flex-col gap-4">
          <div className="large:w-[55%] w-full">
            <div className="flex items-center gap-1 max-medium:justify-center">
              <hr className="border w-24 border-primary" />
              <div className="text-2xl text-webblack font-bold whitespace-nowrap ">
                Our Expertise
              </div>
              <hr className="border w-24 border-primary" />
            </div>
            <div className="flex flex-col pt-7 gap-5">
              <h1 className="text-3xl font-bold max-medium:text-center">
                Technologies We Rely On to{" "}
                <span className="text-primary">Achieve Success</span>
              </h1>
              <div className="flex overflow-auto whitespace-nowrap gap-4 pb-4 text-webblack font-bold text-lg">
                {techData.map((tech) => (
                  <React.Fragment key={tech.id}>
                    <span
                      onClick={() => setTap(tech.id)}
                      className={`${
                        tap === tech.id ? "text-primary" : "text-webblack"
                      } cursor-pointer hover:text-primary`}
                    >
                      {tech.name}
                    </span>
                    {tech.id !== techData.length && (
                      <div className="border mx-2 border-gray-600" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex justify-evenly flex-wrap gap-8 pt-7">
              {techData
                .find((tech) => tech.id === tap)
                ?.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    className="w-[80px] h-[80px] object-contain"
                    alt={`${techData.find((tech) => tech.id === tap)?.name}`}
                  />
                ))}
            </div>
          </div>

          <div className=" large:h-[500px] h-[400px] w-full gap-4 max-small:hidden">
            <Image
              width={1000}
              height={1000}
              src={tech8}
              alt="technology"
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
