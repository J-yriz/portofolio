"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { CloseIcon } from "@/utility/Icons";
import { IDataModal } from "@/utility/Types";
import useWindowWidth from "@/utility/windowWitdh";

const Project = () => {
  const windowWidth = useWindowWidth();
  const [ProArr, setProArr] = useState<IDataModal[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState<IDataModal>({} as IDataModal);

  useEffect(() => {
    fetch("/project-data.json")
      .then((res) => res.json())
      .then((data) => setProArr(data));
  }, [setProArr]);

  const handleModal = (data?: IDataModal) => {
    if (showModal) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
    if (data) setDataModal(data);
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
        <div className="flex flex-wrap gap-3 justify-center mt-5">
          {ProArr.map((data) => (
            <button key={data.name} onClick={() => handleModal(data)} className="hover:scale-105 transition-transform">
              <Image
                src={`/image/project/${data.name}.webp`}
                width={windowWidth <= 768 ? 268 : 288}
                height={windowWidth <= 768 ? 142 : 162}
                alt={`${data.name}`}
              />
            </button>
          ))}
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-huntBlack/50">
            <div className="bg-huntGray p-3 rounded w-[520px] relative">
              <button className="absolute top-0 right-0 block w-10 h-10 bg-[#9ca3af] rounded-bl-md rounded-tr" onClick={() => handleModal()}>
                <CloseIcon />
              </button>
              <div className="flex flex-col items-center sm:items-start sm:flex-row">
                <div className="w-[296px] h-[170px]">
                  <Image src={`/image/project/${dataModal.name}.webp`} width={296} height={170} alt={`${dataModal.name}`} />
                </div>
                <div className="my-2 sm:my-0 w-full sm:w-auto flex flex-col ml-2 space-y-1">
                  <ul className="w-full sm:w-40 flex justify-center">
                    {dataModal.languange.map((lang, index) => (
                      <li key={index} className="inline-block mr-2">
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
                <p className="font-semibold">
                  {dataModal.name.split("-").join(" ")} | {dataModal.year}
                </p>
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
