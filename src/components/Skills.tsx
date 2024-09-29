import Link from "next/link";
import Image from "next/legacy/image";

const SkillObj = {
  HTML: "https://www.w3schools.com/html/html_intro.asp",
  JavaScript: "https://www.w3schools.com/js/js_intro.asp",
  NodeJS: "https://nodejs.org/en/",
  DiscordJS: "https://discordjs.guide/",
  Express: "https://expressjs.com/",
  EJS: "https://ejs.co/",
  NextJS: "https://nextjs.org/",
  TypeScript: "https://www.typescriptlang.org/",
  Tailwind: "https://tailwindcss.com/",
  Git: "https://git-scm.com/",
  Prisma: "https://www.prisma.io/docs/getting-started",
  MySQL: "https://www.mysql.com/",
};

const Skills = () => (
  <div id="skills" className="scroll-mt-20">
    <div className="flex items-center justify-center">
      <p className="text-2xl bg-huntGray z-10">SKILLS</p>
    </div>
    <div className="flex flex-wrap items-center gap-5 justify-center mt-5">
      {Object.entries(SkillObj).map(([name, link]) => (
        <Link key={name} href={link} target="_blank">
          <div className="flex flex-col space-y-2 items-center justify-center bg-[#4a4e57] hover:bg-huntCyan transition-all w-36 h-36 rounded-lg">
            <Image src={`/image/skills/${name.toLowerCase()}.webp`} width={80} height={80} alt={`${name}`} />
            <p>{name}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Skills;
