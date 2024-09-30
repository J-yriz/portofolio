import Image from "next/legacy/image"

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => (
  <div className="bg-huntGray">
    <div className="bg-huntBlack min-h-screen text-huntWhite">
      <Image src={"/image/bgHeader.webp"} alt="bgHeader" layout="fill" objectFit="cover" priority={true} quality={100} className="opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center text-center justify-center container mx-auto">
        <p className="text-4xl sm:text-5xl font-semibold">Fajar Aziz Kurniawan</p>
        <p className="text-2xl sm:text-3xl underline">Software Engineering & Fullstack TypeScript</p>
      </div>
    </div>
    <Navbar />
    <div className="container mx-auto px-10 md:px-32 text-justify sm:text-start my-11 space-y-14">
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Home;
