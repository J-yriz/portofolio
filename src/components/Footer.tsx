import Link from "next/link";
import Image from "next/legacy/image";

const footLink = {
  discord: "https://discord.gg/VZtA7Sp6yC",
  instagram: "https://www.instagram.com/jrzsih/",
  linkedin: "https://www.linkedin.com/in/fajar-aziz-kurniawan-85a352297/",
  github: "https://www.github.com/j-yriz",
};

const Footer = () => (
  <footer className="bg-huntBlack px-20 py-10 border-t border-huntCyan">
    <div className="container mx-auto">
      <div className="flex items-center justify-center space-x-4">
        {Object.entries(footLink).map(([key, value]) => (
          <Link key={key} href={value}>
            <Image src={`/image/${key}.webp`} width={25} height={25} alt={`${key}`} />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
