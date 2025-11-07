import { Flower } from "lucide-react";

export default function NavBar() {
  return (
    <nav
      className="
        fixed top-6 left-1/2 transform -translate-x-1/2
        flex items-center justify-between
        w-full max-w-[1350px]
        px-6 py-2
        bg-white/5 backdrop-blur-md shadow-lg
        rounded-lg border border-white/10
      "
    >
      {/* Logo / Home Button */}
      <a
        href="/"
        className="flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <Flower className="w-6 h-6 text-purple-500" />
        <span className="font-inter font-semibold text-[16px] text-white">Praise</span>
      </a>

      {/* Nav Links */}
      <nav className="flex flex-row gap-8">
        <a
          href="/projects"
          className="font-inter text-[14px] text-white hover:scale-105 transition-transform font-semibold"
        >
          Projects
        </a>
        <a
          href="/achievements"
          className="font-inter text-[14px] text-white hover:scale-105 transition-transform font-semibold"
        >
          Achievements
        </a>
        <a
          href="/exposure"
          className="font-inter text-[14px] text-white hover:scale-105 transition-transform font-semibold"
        >
          Exposure
        </a>
      </nav>
    </nav>
  );
}