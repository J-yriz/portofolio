import Link from "next/link";

const navDirect = {
  "#about": "about",
  "#skills": "skills",
  "#project": "project",
  "#contact": "contact",
};

const Navbar = () => (
  <nav className="bg-huntBlack sticky top-0 py-5 z-40">
    <div className="flex items-center justify-center container mx-auto">
      <ul>
        {Object.entries(navDirect).map(([path, value]) => (
          <li key={path} className="inline-block mx-4">
            <Link href={path} className="hover:text-huntCyan transition-colors">
              {value.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
