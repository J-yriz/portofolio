"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { IDataModal } from "@/utility/Types";

const ProArr = [
  {
    name: "Jariz-Porto",
    year: "2023",
    website: "#",
    github: "https://github.com/J-yriz/nezon-porto",
    languange: ["NextJS", "TypeScript", "Tailwind"],
    discription: "This is a portfolio website that I made for my self, this website is made using NextJS, TypeScript, and TailwindCSS.",
  },
  {
    name: "Nezon-Porto",
    year: "2023",
    website: "https://nezon-porto.vercel.app/",
    github: "https://github.com/J-yriz/nezon-porto",
    languange: ["NextJS", "TypeScript", "Tailwind"],
    discription: "This is a portfolio website that I made for my friend, this website is made using NextJS, TypeScript, and TailwindCSS.",
  },
  {
    name: "Spotify-Clone",
    year: "2023",
    website: "",
    github: "https://github.com/J-yriz/spotifyclone-nextjs",
    languange: ["NextJS", "JavaScript", "Tailwind", "Express"],
    discription: "This is a clone of the Spotify website, this website is made using NextJS, JavaScript, and TailwindCSS.",
  },
];

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState<IDataModal>({} as IDataModal);

  const handleModal = (data?: IDataModal) => {
    showModal ? (document.body.style.overflow = "auto") : (document.body.style.overflow = "hidden");
    data && setDataModal(data);
    setShowModal(!showModal);
  };

  return (
    <>
      <div id="project" className="scroll-mt-20">
        <div className="flex items-center justify-center relative">
          <div className="bg-huntGray w-36 flex justify-center z-10">
            <p className="text-2xl">PROJECT</p>
          </div>
          <div className="border-t-2 border-huntCyan w-full absolute"></div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {ProArr.map((data) => (
            <button key={data.name} onClick={() => handleModal(data)} className="hover:scale-105 transition-transform">
              <Image src={`/image/project/${data.name}.webp`} width={288} height={162} alt={`${data.name}`} />
            </button>
          ))}
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-huntBlack/50">
            <div className="bg-huntGray p-3 pr-10 rounded w-[520px] relative">
              <button className="absolute top-0 right-0 bg-[#9ca3af] rounded-bl-md rounded-tr" onClick={() => handleModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-10">
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex">
                <Image src={`/image/project/${dataModal.name}.webp`} width={296} height={170} alt={`${dataModal.name}`} />
                <div className="flex flex-col ml-2 space-y-1">
                  <ul>
                    {dataModal.languange.map((lang, index) => (
                      <li className="inline-block mr-2">
                        <Image src={`/image/skills/${lang.toLowerCase()}.webp`} key={index} width={30} height={30} alt={`${lang}`} />
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`${dataModal.website}`}
                    target="_blank"
                    className="bg-huntBlack hover:bg-huntCyan transition-colors text-center p-2 rounded"
                  >
                    {dataModal.website ? "Link Preview" : "Not Available"}
                  </Link>{" "}
                  <Link
                    href={`${dataModal.github}`}
                    target="_blank"
                    className="bg-huntBlack hover:bg-huntCyan transition-colors text-center p-2 rounded"
                  >
                    {dataModal.github ? "Link GitHub" : "Not Available"}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">{dataModal.name.split("-").join(" ")} | {dataModal.year}</p>
                <p>{dataModal.discription}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
