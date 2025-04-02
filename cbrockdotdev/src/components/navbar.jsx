// @/src/components/navbar.jsx

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen ring-1 ring-accent-500/5 backdrop-blur-sm md:h-18">
      <div className="flex h-full w-full flex-row items-center justify-center">
        <h1 className="font-mono text-3xl font-extrabold text-secondary-500">
          cbrock.dev
        </h1>
      </div>
    </div>
  );
};
