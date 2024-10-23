import { Project1, Project2, Project3 } from "@/constants/images";
import UIButton from "@/components/ui/uibutton";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TProject } from "@/schemas/project.schema";
import { WEBSITE_BASE_URL } from "@/lib/config";
interface ProjectProps {
  projectList: TProject[];
}
const Projects: React.FC<ProjectProps> = ({ projectList }) => {
  return (
    <div className="bg-background flex flex-col justify-center items-center py-10">
      <div className="w-content medium:px-[2.5rem] large:px-0 px-[1.5rem]">
        <div className="flex   flex-col gap-2 justify-center items-center">
          <div className="text-primary w-[30rem] text-3xl text-center font-semibold">
            Our Successful Projects
          </div>
          <div className="text-base font-medium w-[30rem] text-center ">
            Drive traffic, increase conversions, and grow your online presence
            with our data-driven strategies and innovative solutions.
          </div>
        </div>

        <div className="flex  w-full gap-7 mt-10 ">
          <div className="flex-1 ">
            <div className=" relative h-[530px] bg-black rounded-lg shadow-card">
              <Image
                className="h-full w-full absolute  rounded-lg inset-0  opacity-50 object-cover "
                width={1000}
                height={1000}
                src={`${WEBSITE_BASE_URL}/project/${projectList[0].image}`}
                alt={projectList[0]?.image}
                unoptimized
              />
              <div className="flex absolute p-5 bottom-5 items-center justify-between">
                <div className="w-[70%] flex flex-col gap-4">
                  <div className="font-bold text-2xl text-white">
                    {projectList[0].name}
                  </div>
                  <p className="text-white text-base leading-6">
                    {projectList[0].excerpt}
                  </p>
                </div>

                <UIButton
                  href={`/projects/${projectList[0].slug}`}
                  label="Learn More"
                  type="primary"
                  className="w-[9rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <div className="relative h-[250px] bg-black rounded-lg shadow-card">
              <Image
                className="h-full w-full object-cover rounded-lg absolute  inset-0  bg-black opacity-70"
                width={1000}
                height={1000}
                src={`${WEBSITE_BASE_URL}/project/${projectList[1]?.image}`}
                alt={projectList[1]?.image}
                unoptimized
              />
              <div className="absolute bottom-5 p-5 flex justify-between items-center">
                <div className="w-[70%] flex gap-4 flex-col">
                  <div className="font-bold text-2xl text-white">
                    {projectList[1]?.name}
                  </div>
                  <p className="text-white text-base leading-6">
                    {projectList[1]?.excerpt}
                  </p>
                </div>

                <UIButton
                  href={`/projects/${projectList[1].slug}`}
                  label="Learn More"
                  type="primary"
                  className="w-[9rem]"
                />
              </div>
            </div>
            <div className="relative h-[250px] bg-black rounded-lg shadow-card">
              <Image
                className="h-full w-full object-cover rounded-lg  absolute  inset-0   opacity-70"
                width={1000}
                height={1000}
                src={`${WEBSITE_BASE_URL}/project/${projectList[2]?.image}`}
                alt={projectList[2]?.image}
                unoptimized
              />
              <div className="absolute bottom-5 p-5 flex justify-between items-center">
                <div className="w-[70%] flex gap-4 flex-col">
                  <div className="font-bold text-2xl text-white">
                    {projectList[2]?.name}
                  </div>
                  <p className="text-white text-base leading-6">
                    {projectList[2]?.excerpt}
                  </p>
                </div>

                <UIButton
                  href={`/projects/${projectList[2].slug}`}
                  label="Learn More"
                  type="primary"
                  className="w-[9rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10">
          <Link href="/projects">
            {" "}
            <UIButton label="View More" type="primary" className="w-[9rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
