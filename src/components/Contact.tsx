import Image from "next/legacy/image";

const ContactObj = {
  gmail: "jrzfjr5@gmail.com",
  discord: "malmul._",
  maps: "Indonesia, Jawa Tengah",
};

const Contact = () => (
  <>
    <div id="contact" className="scroll-mt-20">
      <div className="flex items-center justify-center">
        <p className="text-2xl">CONTACT</p>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        {Object.entries(ContactObj).map(([key, value]) => (
          <div key={key} className="flex items-center justify-center rounded-md bg-huntBlack text-huntCyan h-12 px-5">
            <Image src={`/image/${key}.webp`} width={30} height={30} alt={`${key}`} />
            <p className="ml-3 text-lg">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Contact;
