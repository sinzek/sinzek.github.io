// @/src/components/navbar.jsx

import MenuButton from "./menuButton";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden ring-1 ring-accent-500/5 backdrop-blur-sm md:h-18">
      <div className="flex h-full flex-row items-center justify-center gap-4">
        <div className="flex h-full flex-row items-center justify-center gap-2">
          <a href="/portfolio">
            <MenuButton title="portfolio">portfolio</MenuButton>
          </a>
        </div>
        <div className="filter-[drop-shadow(0_0_25px_rgba(252,_163,_17,_0.3))]">
          <a href="/">
            <img
              className="mb-5 h-[74px] w-[238px] transition-all duration-200 hover:translate-y-[-2px] hover:filter-[drop-shadow(0_4px_0_rgba(0,0,0,0.5))] focus-visible:ring-1 focus-visible:outline-none active:translate-y-0 active:shadow-none active:brightness-[0.8] active:drop-shadow-none"
              src="cbrockdotdev.gif"
            />
          </a>
        </div>
        <div className="flex h-full flex-row items-center justify-center gap-2">
          <a href="/blog">
            <MenuButton title="blog">blog</MenuButton>
          </a>
        </div>
      </div>
    </div>
  );
};
