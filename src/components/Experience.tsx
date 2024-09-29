const ExpObj = {
  "Quality Control | PT Media Sarana Data (Gmedia)": {
    year: "2022 - 2023",
    description: "Melakukan pengawasan kualitas produk mengecek bug pada program.",
  },
};

const Experience = () => (
  <>
    <div id="experience" className="scroll-mt-20">
      <p className="text-2xl">EXPERIENCE</p>
      {Object.entries(ExpObj).map(([key, { year, description }]) => (
        <div key={key} className="relative border-l-2 mt-5 ml-16">
          <div className="mt-5 flex items-center relative group">
            <div className="bg-huntGray w-3 h-7 -ml-3 top-0 z-10 absolute">
              <div className="bg-huntCyan rounded-full w-6 h-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-huntCyan/50 transition-transform"></div>
            </div>
            <div className="ml-10 mb-2">
              <p className="text-huntWhite text-lg mb-1">{key}</p>
              <p className="text-lg font-semibold">{year}</p>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Experience;
